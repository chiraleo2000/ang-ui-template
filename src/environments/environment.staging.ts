import { AuthConfig } from "angular-oauth2-oidc";

export const environment = {
    production: true,
    config: {
        baseConfig: {
            apiUrl: "https://sao-api-ds.demotoday.net/ds/api",
            dsApiUrl: "https://sao-api-ds.demotoday.net/ds/api"
        },
        openIdConfig: {
            issuer: "https://sao-keycloak.demotoday.net/auth/realms/master",
            sessionChecksEnabled: false,
            sessionCheckIFrameName: "sao-tsea-session-check-iframe",
            redirectUri: `${window.location.origin}/login`,
            postLogoutRedirectUri: `${window.location.origin}/login`,
            silentRefreshRedirectUri: window.location.origin + '/silent-refresh.html',
            clientId: 'oag-tsea',
            dummyClientSecret: '',
            scope: 'openid',
            responseType: 'code',
            useSilentRefresh: false,
            showDebugInformation: false,
            clearHashAfterLogin: false,
            oidc: true,
            requireHttps: false
        } as AuthConfig
    }
};
