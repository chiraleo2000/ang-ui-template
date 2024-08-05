import { Injectable } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { ClearDataService } from './clear-data.service';
import { BetimesOauthService } from './betimes-oauth.service';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    defaultLoginRedirectTo = "/";
    successLoginRedirectTo = "/";
    _loginFailMessage = "";
    constructor(private router: Router, private clearDataServ: ClearDataService, private _oathServ: BetimesOauthService) { }

    failLogin(failMessage: string) {
        this._loginFailMessage = failMessage;
        this.router.navigate(["/login"]);
    }

    login(redirectTo?: string, options?: NavigationExtras) {
        this.successLoginRedirectTo = redirectTo || "/";
        this.router.navigate(["/login"], options);
    }

    logout(redirectTo = "/login") {

        try {
            const p = this._oathServ.lib.revokeTokenAndLogout();
            this.clearDataServ.clearData();
            if (p) {
                p.then(() => {
                    this._oathServ.lib.logOut({client_id: environment.config.openIdConfig.clientId});
                });
            } else {
                this._oathServ.lib.logOut({client_id: environment.config.openIdConfig.clientId});
            }
        } catch (error) {
            console.error(error);
            this.clearDataServ.clearData();
            this.router.navigate([redirectTo]);
        }
    }

    reset() {
        this.successLoginRedirectTo = "/";
        this._loginFailMessage = "";
    }
}
