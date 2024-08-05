import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BetimesOauthService } from 'src/app/services/betimes-oauth.service';
import { ClearDataService } from 'src/app/services/clear-data.service';
import { LoginService } from 'src/app/services/login.service';
@Component({
    selector: 'app-un-authentication',
    templateUrl: './un-authentication.component.html',
    styleUrls: ['./un-authentication.component.scss']
})
export class UnAuthenticationComponent {

    constructor(private _router: Router, private _loginServ: LoginService) { }

    goMain() {
        this._loginServ.logout();
    }
}
