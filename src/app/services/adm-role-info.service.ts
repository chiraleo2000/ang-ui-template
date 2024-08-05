import { IAdmUser, IAdmUserinRole } from 'src/app/services/user-role-info.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { req } from '../common/betimes-http-request';
@Injectable({
    providedIn: 'root'
})
export class RoleInfoService {


    constructor() { }

    public Get(role: number, appid?: number, includeStatus = true): Observable<IAdmRoleInfo[]> {
        const request = req<IAdmRoleInfo[]>('AdmRoleInfo');
        if (appid) {
            request.queryString({ roleId: role, appId: appid, RecordStatus: <any>includeStatus });
        } else {
            request.queryString({ roleId: role, RecordStatus: <any>includeStatus });
        }
        return request.get();
    }

    GetById(roleId: number): Observable<IAdmRoleInfo> {
        return req<IAdmRoleInfo>('AdmRoleInfo/' + roleId).get();
    }

    public Create(role: number, appid: number): Observable<any> {
        return req("AdmRoleInfo/permission/create")
            .body({ roleId: role, appId: appid })
            .post();

    }
    public InsertRoleInfo(param: IAdmRoleUser): Observable<any> {
        return req("AdmRoleInfo")
            .body(param)
            .post();

    }

    public EditRoleInfo(id: number, param: IAdmRoleUser): Observable<IAdmRoleUser> {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        return req<IAdmRoleUser>('AdmRoleInfo/' + id)
            .body(param)
            .put();
    }
}


export interface IAdmRoleUser {
    roleInfo: IAdmRoleInfo;
    userRole: IAdmUser[];
}

export interface IAdmRoleInfo {
    ROLE_ID?: number;
    APP_ID?: number;
    ROLE_CODE?: string;
    ROLE_NAME?: string;
    ROLE_SEQ?: number;
    ORG_LV?: number;
    RECORD_STATUS?: string;
    DEL_FLAG?: string;
    CREATE_DATE?: Date;
}

export interface IAdmRoleInfoUserRole extends IAdmRoleInfo {
    USER_ROLE?: IAdmUserinRole[];
}
