import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { req } from '../common/betimes-http-request';

@Injectable({
    providedIn: 'root'
})
export class UserRoleService {

    constructor() { }

    public Get(): Observable<IAdmUserRole[]> {
        return req<IAdmUserRole[]>('AdmUserRole').get();
    }
    public GetId(role: number, appId: number): Observable<IAdmUserRole[]> {
        const request = req<IAdmUserRole[]>('AdmUserRole/module/permission');
        if (appId) {
            request.queryString({ roleId: role, appId });
        }
        else {
            request.queryString({ roleId: role });
        }
        return request.get();
    }

    public GetPersonalByRoleId(roleId: number, role: number, appId: number): Observable<IAdmUserinRole[]> {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        const request = req<IAdmUserinRole[]>('AdmUserRole/' + roleId + '/personal');
        if (appId) {
            request.queryString({ roleId: role, appId });
        }
        else {
            request.queryString({ roleId: role });
        }
        return request.get();
    }

    public InsertRoleInfo(param: IAdmUser): Observable<any> {
        return req("AdmUserRole")
            .body(param)
            .post();

    }
}

export interface IAdmUser {
    USER_ROLE_ID?: number;
    USER_ID?: number;
    ROLE_ID?: number;
    DEL_FLAG?: string;
}

export interface IAdmUserRole {
    MODULE_ICON: string;
    MODULE_ID: number;
    MODULE_NAME: string;
    MODULE_LEVEL: number;
    MODULE_SEQ: string;
    ROLE_PRIV_ID: number;
    PERMISSION: [{
        PERMISSION_ID: number; PRIV_FLAG: string; PERMISSION_NAME: string;
    }];
}

export interface IAdmUserinRole {
    USER_ROLE_ID: number;
    USER_ID?: number;
    PERSONAL_FULL_NAME?: string;
    POSITION_NAME?: string;
    ORG_NAME?: string;
    DEL_FLAG?: string;
}
