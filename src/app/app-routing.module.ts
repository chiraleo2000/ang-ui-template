import { NgModule } from "@angular/core";
import { LoginComponent } from "./components/pages/login/login.component";
import { UnAuthenticationComponent } from "./components/pages/un-authentication/un-authentication.component";
import { RouterModule, Routes } from "@angular/router";
import { loginGuard } from "./guard/login.guard";
import { ModuleSettingComponent } from "./components/pages/module-setting/module-setting.component";
import { RoleSettingComponent } from "./components/pages/role-setting/role-setting.component";
import { MainPageComponent } from "./components/layout/main-page/main-page.component";
import { authGuard } from "./guard/auth-guard";
import { ProvinceSettingComponent } from "./components/pages/province-setting/province-setting.component";
import { OrgSettingComponent } from "./components/pages/org-setting/org-setting.component";
import { AppOrgSettingComponent } from "./components/pages/app-org-setting/app-org-setting.component";
import { AppSettingComponent } from "./components/pages/app-setting/app-setting.component";
import { NotFoundMenuPageComponent } from "./components/pages/not-found-menu-page/not-found-menu-page.component";
import { privilegeGuard } from "./guard/privilege-guard";
import { TestComponent } from "./components/pages/test/test.component";

const routes: Routes = [
    {
        path: '', component: MainPageComponent, canActivate: [authGuard], canActivateChild: [privilegeGuard],
        children: [
            { path: 'setting-module-info', component: ModuleSettingComponent },
            { path: 'setting-role-info', component: RoleSettingComponent },
            { path: 'setting-role-info/:roleId', component: RoleSettingComponent },
            { path: 'province-setting', component: ProvinceSettingComponent },
            { path: 'setting-org-info', component: OrgSettingComponent },
            { path: 'setting-app-org', component: AppOrgSettingComponent },
            { path: 'setting-app-info', component: AppSettingComponent },
            { path: 'setting-personal-info', component: TestComponent },
        ]
    },
    { path: 'un-authentication', component: UnAuthenticationComponent },
    { path: '404-menu', component: NotFoundMenuPageComponent },
    { path: 'login', component: LoginComponent, canActivate: [loginGuard] }

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule { }
