import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { req } from '../common/betimes-http-request';

@Injectable({
    providedIn: 'root'
})
export class RoleInfoPrivService {

    constructor() { }


    public Get(): Observable<IAdmRoleInfoPriv[]> {
        return req<IAdmRoleInfoPriv[]>('AdmRolePriv').get();
    }

    public GetId(id: number): Observable<IAdmRoleInfoPriv[]> {
        return req<IAdmRoleInfoPriv[]>('AdmModuleInfo/' + id + '/permissions').get();
    }

    public InsertModulePriv(param: IAdmRoleInfoPriv): Observable<any> {
        return req("AdmRolePriv")
            .body(param)
            .post();

    }

    public EditModulePriv(id: number, param: IAdmRoleInfoPriv): Observable<IAdmRoleInfoPriv> {
        return req<IAdmRoleInfoPriv>('AdmRolePriv/' + id)
            .body(param)
            .put();
    }

    public DelModulePriv(id: number): Observable<any> {
        return req("AdmRolePriv/" + id)
            .delete();
    }

    public UpdateRolePrive(fillter: IAdmRoleInfoPriv[]): Observable<void> {

        return req<void>('AdmRolePriv/batch')
            .body(fillter)
            .put();
    }

}

export interface IAdmRoleInfoPriv {
    ROLE_PRIV_ID: number;
    PERMISSION_ID: number;
    MODULE_ID: number;
    ROLE_ID: number;
    MODULE_PRIV_ID: number;
    PRIV_FLAG: string;
    RECORD_STATUS: string;
}
