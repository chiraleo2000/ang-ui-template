import { Component, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { concatMap, filter } from 'rxjs/operators';
import { User } from './services/user';
import { BetimesOauthService } from './services/betimes-oauth.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    public static InjectorInstance: Readonly<Injector>;
    title = 'app';
    isHideMainComponent = true;
    constructor(private injecttor: Injector, private _betimesOAuth: BetimesOauthService, private router: Router,
        private _jwt: JwtHelperService) {

        AppComponent.InjectorInstance = injecttor;
        window.addEventListener("message", e => {
            console.log(e);
        });
        this._betimesOAuth.init();
        this._betimesOAuth.isDoneLoading$
            .pipe(filter(r => r), concatMap(() => this._betimesOAuth.isAuthenticated$))
            .subscribe(r => {
                if (r && !User.Current) {
                    this.isHideMainComponent = false;
                    this.router.navigate(["/login"], { skipLocationChange: true });
                } else if (!r && !this._betimesOAuth.ownLogout) {
                    this.router.navigate(["/login"]);
                }
                else if (r && User.Current) {
                    this.isHideMainComponent = false;
                }
            }, () => {
                this.router.navigate(["un-authentication"]);
            });
    }
}
