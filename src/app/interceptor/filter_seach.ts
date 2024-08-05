import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InternalCache } from 'share-ui';
import { User } from '../services/user';

@Injectable()
export class FilterSeach implements HttpInterceptor {

    constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const set_filter = {
            SetFilterSeach: [],
            FilterType: ""
        };
        const data = InternalCache.Get("set_filter") ?? set_filter;
        if (User.Current?.Role) {
            data.OrgLevel = User.Current.Role.OrgLevel;
        }

        const jsonString = JSON.stringify(data);
        const modifiedReq = req.clone({
            setHeaders: {
                'Set-Filter': jsonString
            }
        });
        return next.handle(modifiedReq);
    }
}
