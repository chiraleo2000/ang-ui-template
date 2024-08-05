import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { req } from '../common/betimes-http-request';

@Injectable({
    providedIn: 'root'
})
export class AdmAppOrgInfoService {

    constructor() { }
    public GetAppOrgInfo(role: number, includeStatus = true): Observable<IAppOrgInfo[]> {
        return req<IAppOrgInfo[]>('AdmAppOrg')
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            .queryString({ roleId: role, RecordStatus: <any>includeStatus })
            .get();
    }

    public PutAppOrgInfo(id: number, param: IAppOrgInfo): Observable<IAppOrgInfo> {
        return req<IAppOrgInfo>(`AdmAppOrg/${id}`)
            .body(param)
            .put();
    }

    public PostAppOrgInfo(param: IAppOrgInfo): Observable<IAppOrgInfo> {
        return req<IAppOrgInfo>('AdmAppOrg')
            .body(param)
            .post();
    }


    public DelAppOrgInfo(id: number): Observable<any> {
        return req(`AdmAppOrg/${id}`)
            .delete();
    }
}


export interface IAppOrgInfo {

    APP_ORG_ID?: number;
    APP_ID?: number;
    ORG_ROOT_ID?: number;
    RECORD_STATUS?: string;
    DEL_FLAG?: string;
}


export interface IViewAppOrgInfo extends IAppOrgInfo {
    ORGANIZE_NAME_THA?: string;
}
