import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanActivateFn } from '@angular/router';
import { User } from '../services/user';
import { BetimesOauthService } from '../services/betimes-oauth.service';

export const loginGuard: CanActivateFn = (
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) => {

    const router = inject(Router);
    const betimesOAuth = inject(BetimesOauthService);
    const user = User.Current;
    if (user && betimesOAuth.lib.hasValidAccessToken()) {
        router.navigate(["/"], { replaceUrl: true });
        return false;
    }
    User.Clear();
    return true;
};
