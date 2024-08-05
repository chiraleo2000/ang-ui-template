import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { req } from '../common/betimes-http-request';
import { IRole } from './role.service';

@Injectable({
    providedIn: 'root',
})
export class UserService {
    public getProfile(): Observable<IUserProfile> {
        return req<IUserProfile>("user/me").get();
    }
}

export interface IUserProfile {
    UserId: number;
    UserName: string;
    PersonalId: number;
    FullNameTH: string;
    FirstNameTH: string;
    LastNameTH: string;
    PositionId: number;
    PositionNameTH: string;
    OrganizeId: number;
    OrganizeLevel: number;
    OrganizeRootId: number;
    OrganizeNameTH: string;
    OrganizeNameDetail: string;
    LoginType: string;
    ImageUrl: string;
    LastAccessDateTime: Date;
    UserType: number;
    SecureRegistrar: boolean;
    Role: IRole;
    Roles: IRole[];
}
