import { Injectable } from '@angular/core';
import { LoginOptions, OAuthErrorEvent, OAuthService } from 'angular-oauth2-oidc';
import { BehaviorSubject, Observable } from 'rxjs';
import { concatMap, filter, mergeMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class BetimesOauthService {
    isAuthenticated$: Observable<boolean>;
    isDoneLoading$: Observable<boolean>;
    ownLogout = false;
    private _isAuthenticatedSubject$ = new BehaviorSubject<boolean>(false);
    private _isDoneLoadingSubject$ = new BehaviorSubject<boolean>(false);

    constructor(private _authServ: OAuthService) {
        this._authServ.events.subscribe(event => {
            if (event instanceof OAuthErrorEvent) {
                console.error('OAuthErrorEvent Object:', event);
            }
        });

        this.isAuthenticated$ = this._isAuthenticatedSubject$.asObservable();
        this.isDoneLoading$ = this._isDoneLoadingSubject$.asObservable();
        this._authServ.events
            .pipe(filter(e => e.type === "token_received"))
            .subscribe(() => {
                const hasValidAccessToken = this._authServ.hasValidAccessToken();
                if (hasValidAccessToken) {
                    this.ownLogout = false;
                }
            });

        this._authServ.events
            .pipe(filter(e => ['session_terminated', 'session_error'].includes(e.type)), concatMap(() => this.isDoneLoading$))
            .subscribe(e => {
                this._isAuthenticatedSubject$.next(false);
                console.error("session_terminated", e);
            });
    }

    public get lib(): OAuthService { return this._authServ; }

    init(option?: LoginOptions): Promise<boolean> {
        return this._authServ
            .loadDiscoveryDocumentAndTryLogin(option)
            .then(() => {
                if (this._authServ.hasValidAccessToken()) {
                    this._isAuthenticatedSubject$.next(this._authServ.hasValidAccessToken());
                    return Promise.resolve(this._authServ.getAccessToken() !== "undefined");
                }
                return this._authServ.refreshToken()
                    .then(() => Promise.resolve(true))
                    .catch(result => {
                        this._isAuthenticatedSubject$.next(false);
                        if (this.checkUserInteractionRequiredOnRefreshFailure(result)) {
                            console.warn('User interaction is needed to log in, we will wait for the user to manually log in.');
                            return Promise.resolve(true);
                        }
                        return Promise.reject(result);
                    });
            })
            .then(() => {
                this._isDoneLoadingSubject$.next(true);
                return Promise.resolve(true);
            })
            .catch((err) => {
                console.error(err);
                // ภ้ามี error ตอนที่จะเอา token ให้เด้ง error ไปเลย
                if (err.url === this.lib.tokenEndpoint) {
                    this._isDoneLoadingSubject$.error(err);
                } else {
                    this._isDoneLoadingSubject$.next(true);
                }
                return Promise.resolve(false);
            });
    }

    public refresh(): Promise<any> {
        return this._authServ.responseType === "code" ?
            this._authServ.refreshToken() :
            this._authServ.silentRefresh();
    }

    logOut(): Promise<any> {
        this._isDoneLoadingSubject$.next(false);
        return this.lib.revokeTokenAndLogout().then(() => {
            this.ownLogout = true;
            this._isDoneLoadingSubject$.next(true);
        });
    }

    private checkUserInteractionRequiredOnRefreshFailure(errorObj: any): boolean {
        const errorCodes = [
            'invalid_grant',
            'interaction_required',
            'login_required',
            'account_selection_required',
            'consent_required'
        ];

        const k = this._authServ.responseType === 'code' ? 'error' : 'reason';

        return errorObj
            && errorObj[k]
            && errorCodes.indexOf(errorObj[k].error) >= 0;
    }
}
