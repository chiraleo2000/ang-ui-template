
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { req } from '../common/betimes-http-request';

@Injectable({
    providedIn: 'root'
})
export class ModulePrivService {


    constructor() { }

    public Get(): Observable<IAdmModulePriv[]> {
        return req<IAdmModulePriv[]>('AdmModulePriv').get();
    }

    public GetId(id: number): Observable<IAdmModulePriv[]> {
        return req<IAdmModulePriv[]>(`AdmModuleInfo/${id}/permissions`).get();
    }

    public InsertModulePriv(param: IAdmModulePriv): Observable<any> {
        return req("AdmModulePriv")
            .body(param)
            .post();

    }

    public EditModulePriv(id: number, param: IAdmModulePriv): Observable<IAdmModulePriv> {
        return req<IAdmModulePriv>(`AdmModulePriv/${id}`)
            .body(param)
            .put();
    }

    public DelModulePriv(id: number): Observable<any> {
        return req(`AdmModulePriv/${id}`)
            .delete();
    }

}

export interface IAdmModulePriv {
    MODULE_PRIV_ID?: number;
    MODULE_ID?: number;
    PERMISSION_ID?: number;
    RECORD_STATUS?: string;
    PERMISSION_NAME?: string;
    DEL_FLAG?: string;
}
