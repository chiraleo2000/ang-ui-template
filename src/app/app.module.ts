import { NotifierModule, NotifierOptions } from 'angular-notifier';
import { Dialog } from './common/dialog/dialog';
import { SweetAlertDialog } from './common/dialog/sweetalert-dialog';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { OAuthModule, AuthConfig, OAuthStorage } from 'angular-oauth2-oidc';
import { locale } from 'dayjs';
import { locale as devExtreamLocale } from "devextreme/localization";
import { DxTreeListModule, DxFormModule, DxTreeViewModule, DxListModule, DxSelectBoxModule,
    DxScrollViewModule, DxDataGridModule, DxToolbarModule, DxTextBoxModule, DxButtonModule,
    DxDateBoxModule, DxLoadPanelModule, DxMultiViewModule, DxPopupModule, DxTabPanelModule,
    DxLookupModule, DxCheckBoxModule, DxDropDownButtonModule, DxTextAreaModule, DxRadioGroupModule,
    DxTagBoxModule, DxMenuModule, DxNumberBoxModule, DxLoadIndicatorModule } from 'devextreme-angular';
import { DxoSelectionModule } from 'devextreme-angular/ui/nested';
import { environment } from 'src/environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetimesDevExtreamDateProvider } from './common/betimes-devextream-date-provider';
import { UnAuthenticationComponent } from './components/pages/un-authentication/un-authentication.component';
import { BetimesOauthService } from './services/betimes-oauth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BetimesHttpInterceptor } from './common/betimes-http-interceptor';
import { RefreshTokenInterceptor } from './interceptor/refresh-token-interceptor';
import { MainPageComponent } from './components/layout/main-page/main-page.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { BreadcrumbsComponent } from './components/layout/breadcrumbs/breadcrumbs.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { ModuleSettingComponent } from './components/pages/module-setting/module-setting.component';
import { RoleSettingComponent } from './components/pages/role-setting/role-setting.component';
import { ProvinceSettingComponent } from './components/pages/province-setting/province-setting.component';
import { ProvinceEditComponent } from './components/pages/province-setting/province-edit/province-edit.component';
import { ModuleEditComponent } from './components/pages/module-setting/module-edit/module-edit.component';
import { DxButtonImproveComponent } from './components/control/dx-button-improve/dx-button-improve.component';
import { RoleEditComponent } from './components/pages/role-setting/role-edit/role-edit.component';
import { OrgSettingComponent } from './components/pages/org-setting/org-setting.component';
import { OrgEditComponent } from './components/pages/org-setting/org-edit/org-edit.component';
import { AppOrgSettingComponent } from './components/pages/app-org-setting/app-org-setting.component';
import { AppOrgEditComponent } from './components/pages/app-org-setting/app-org-edit/app-org-edit.component';
import { AppSettingComponent } from './components/pages/app-setting/app-setting.component';
import { AppEditComponent } from './components/pages/app-setting/app-edit/app-edit.component';
import { NotFoundMenuPageComponent } from './components/pages/not-found-menu-page/not-found-menu-page.component';
import { TestComponent } from './components/pages/test/test.component';

const customNotifierOptions: NotifierOptions = {
    position: {
        horizontal: {
            position: 'left',
            distance: 12,
        },
        vertical: {
            position: 'bottom',
            distance: 12,
            gap: 10,
        },
    },
    theme: 'material',
    behaviour: {
        autoHide: 500000,
        onClick: 'hide',
        onMouseover: 'pauseAutoHide',
        showDismissButton: true,
        stacking: 4,
    },
    animations: {
        enabled: true,
        show: {
            preset: 'slide',
            speed: 300,
            easing: 'ease',
        },
        hide: {
            preset: 'fade',
            speed: 300,
            easing: 'ease',
            offset: 50,
        },
        shift: {
            speed: 300,
            easing: 'ease',
        },
        overlap: 150,
    },
};

@NgModule({
    declarations: [
        AppComponent,
        NotFoundMenuPageComponent,
        UnAuthenticationComponent,
        MainPageComponent,
        SidebarComponent,
        HeaderComponent,
        BreadcrumbsComponent,
        FooterComponent,
        RoleSettingComponent,
        RoleEditComponent,
        ProvinceSettingComponent,
        ProvinceEditComponent,
        ModuleSettingComponent,
        ModuleEditComponent,
        DxButtonImproveComponent,
        OrgSettingComponent,
        OrgEditComponent,
        AppOrgSettingComponent,
        AppOrgEditComponent,
        AppSettingComponent,
        AppEditComponent,
        TestComponent
    ],
    imports: [
        BrowserModule,
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
        DxTreeListModule,
        RouterModule,
        DxFormModule,
        DxTreeViewModule,
        DxListModule,
        DxSelectBoxModule,
        DxScrollViewModule,
        DxDataGridModule,
        DxToolbarModule,
        DxTextBoxModule,
        DxButtonModule,
        DxDateBoxModule,
        DxLoadPanelModule,
        DxMultiViewModule,
        DxPopupModule,
        DxButtonModule,
        DxTabPanelModule,
        DxTreeListModule,
        DxoSelectionModule,
        DxTabPanelModule,
        DxLookupModule,
        DxCheckBoxModule,
        DxDropDownButtonModule,
        DxToolbarModule,
        DxTextAreaModule,
        NotifierModule.withConfig(customNotifierOptions),
        DxDateBoxModule,
        DxRadioGroupModule,
        DxTagBoxModule,
        OAuthModule.forRoot(),
        JwtModule.forRoot({
            jwtOptionsProvider: {
                provide: JWT_OPTIONS,
                useFactory: JwtOptionsFactory,
                deps: [BetimesOauthService]
            },
        }),
        DxMenuModule,
        DxNumberBoxModule,
        DxLoadIndicatorModule
    ],
    exports: [],
    providers: [
        { provide: AuthConfig, useValue: environment.config.openIdConfig },
        { provide: OAuthStorage, useFactory: () => localStorage },
        { provide: Dialog, useClass: SweetAlertDialog },
        { provide: HTTP_INTERCEPTORS, useClass: RefreshTokenInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: BetimesHttpInterceptor, multi: true }
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {
    constructor() {
        // Set locale
        locale("th-TH");
        devExtreamLocale("th");
        BetimesDevExtreamDateProvider.register();
    }
}

function JwtOptionsFactory(oauthServ: BetimesOauthService) {
    const whitelist = [/.+/];
    return {
        // tokenGetter: () => CookieStorage.accessToken?.Token,
        tokenGetter: () => oauthServ.lib.getAccessToken(),
        allowedDomains: whitelist,
        disallowedRoutes: [/user\/(auth|renew)$/],
    };
}

