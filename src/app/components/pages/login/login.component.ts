import { Component, OnInit, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { JwtHelperService } from "@auth0/angular-jwt";
import { custom } from "devextreme/ui/dialog";
import { Subscription } from "rxjs";
import { filter, concatMap } from "rxjs/operators";
import { InternalCache } from "src/app/common/cache";
import { Dialog } from "src/app/common/dialog/dialog";
import { BetimesOauthService } from "src/app/services/betimes-oauth.service";
import { ClearDataService } from "src/app/services/clear-data.service";
import { LoginService } from "src/app/services/login.service";
import { RoleService } from "src/app/services/role.service";
import { User } from "src/app/services/user";
import { UserService } from "src/app/services/user.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
    // @ViewChild(DxFormComponent) form: DxFormComponent;
    username: string;
    password: string;
    isRemember = false;
    failLoginMessage: string;
    currentItem: any;
    _oidcSubscription: Subscription;
    constructor(
        private router: Router,
        private roleServ: RoleService,
        private loginServ: LoginService,
        private _oauthServ: BetimesOauthService,
        private _userServ: UserService,
        private _dialog: Dialog
    ) { }
    ngOnInit() {
        this.failLoginMessage = this.loginServ._loginFailMessage;
        this.loginServ._loginFailMessage = undefined;
        this._oidcSubscription = this._oauthServ.isDoneLoading$
            .pipe(filter(r => r), concatMap(() => this._oauthServ.isAuthenticated$))
            .subscribe( async r => {
                if (r) {
                    try {
                        const info = await this._userServ.getProfile().toPromise();
                        const loadReult = await this.roleServ.LoadRole().toPromise();
                        if (!loadReult || !this.roleServ.RoleInfo) {
                            this.router.navigate(["un-authentication"]);
                        }

                        info.Roles = this.roleServ.RoleInfo;
                        info.Role = info.Roles.length > 0 ? info.Roles[0] : undefined;

                        const roles = info.Roles;
                        for (const role of roles) {
                            if (role.RoleCode !== "USER" && role.OrgRefId <= 0) {
                                this._dialog.error("ไม่ถูกต้อง", `ไม่พบชื่อของท่านใน '${role.RoleName}'`, "ปิด");
                                this.router.navigate(["un-authentication"]);
                                return;
                            } else if (!role.RoleCode) {
                                this._dialog.error("ไม่ถูกต้อง", "ไม่พบรหัสบทบาท", "ปิด");
                                this.router.navigate(["un-authentication"]);
                                return;
                            }
                        }

                        User.SetUser(info);
                        const state = this._oauthServ.lib.state;
                        if (state) {
                            this.router.navigateByUrl(decodeURIComponent(state)).then(() => this.loginServ.reset());
                        } else {
                            this.router.navigate([this.loginServ.defaultLoginRedirectTo]).then(() => this.loginServ.reset());
                        }
                    } catch (error) {
                        console.error(error);
                        this.router.navigate(["un-authentication"]);
                    }
                } else {
                    InternalCache.DeleteAll();
                    const redirectTo = this.loginServ.successLoginRedirectTo ?? this.loginServ.defaultLoginRedirectTo;
                    this._oauthServ.lib.initLoginFlow(redirectTo);
                }
            });

    }

    ngOnDestroy(): void {
        this._oidcSubscription?.unsubscribe();
    }
}
