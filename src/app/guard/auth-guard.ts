import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { User } from "../services/user";
import { BetimesOauthService } from "../services/betimes-oauth.service";
import { LoginService } from "../services/login.service";
import { inject } from "@angular/core";

export const authGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {

    const user = User.Current;
    const oathServ = inject(BetimesOauthService);
    const loginServ = inject(LoginService);
    if (user && oathServ.lib.hasValidAccessToken()) {
        return true;
    }

    loginServ.login(state.url, { replaceUrl: true, queryParams: route.queryParams });
    return false;
};
