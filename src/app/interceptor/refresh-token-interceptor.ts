import { ClearDataService } from './../services/clear-data.service';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, from, Observable, ObservableInput, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { catchError, filter, switchMap, take } from 'rxjs/operators';
import { custom } from 'devextreme/ui/dialog';
import { BetimesOauthService } from '../services/betimes-oauth.service';
import { User } from '../services/user';
import { LoginService } from '../services/login.service';
import { Dialog } from '../common/dialog/dialog';

@Injectable()
export class RefreshTokenInterceptor implements HttpInterceptor {
    private refreshTokenInProgress = false;
    private refreshTokenSubject: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private oauthServ: BetimesOauthService, private router: Router, private _dialog: Dialog) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(catchError(_ => this.OnError(req, next, _)));
    }

    private OnError(req: HttpRequest<any>, next: HttpHandler, error: HttpErrorResponse): ObservableInput<any> {
        if (error.status !== 401) {
            return throwError(error);
        } else if (req.url.includes("user/auth")) {
            return throwError(error);
        } else if (req.url.includes("user/refresh")
        || req.url.includes("user/renew")) {
            this.unAuthenticate();
            return throwError(error);
        }


        if (this.refreshTokenInProgress) {
            return this.refreshTokenSubject.pipe(
                filter(r => r !== null),
                take(1),
                switchMap( (_) => {
                    const newHeader = new HttpHeaders({Authorization: "Bearer " + this.oauthServ.lib.getAccessToken()});
                    return next.handle(req.clone({headers: newHeader}));
                })
            );
        } else {
            this.refreshTokenInProgress = true;
            this.refreshTokenSubject.next(null);
            return from(this.oauthServ.refresh()).pipe(
                switchMap( t => {
                    this.refreshTokenInProgress = false;
                    this.refreshTokenSubject.next(true);
                    const newHeader = new HttpHeaders({Authorization: "Bearer " + this.oauthServ.lib.getAccessToken()});
                    return next.handle(req.clone({headers: newHeader}));
                }),
                catchError( _ => {
                    this.refreshTokenInProgress = false;
                    this.unAuthenticate();
                    this.refreshTokenSubject.error(error);
                    return throwError(error);
                })
            );
        }
    }

    private unAuthenticate() {
        this._dialog.error("เกิดข้อผิดพลาด", "การเชื่อมต่อหมดอายุ กรุณา Login ใหม่", "ปิด");
        this.router.navigate(["un-authentication"]);
    }
}
