import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { req } from '../common/betimes-http-request';

@Injectable({
    providedIn: 'root'
})
export class AppInfoService {
    constructor() { }
    public GetAppInfo(role: number, includeStatus = true): Observable<IAppInfo[]> {
        return req<IAppInfo[]>('AdmAppInfo')
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            .queryString({ roleId: role, RecordStatus: <any>includeStatus })
            .get();
    }

    public GetById(appId: number): Observable<IAppInfo> {
        return req<IAppInfo>('AdmAppInfo/' + appId)
            .get();
    }


    public PutAppInfo(id: number, param: FormData): Observable<IAppInfo> {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        return  req<IAppInfo>('AdmAppInfo/' + id)
            .body(param)
            .put();
    }

    public PostAppInfo(param: FormData): Observable<IAppInfo> {
        return  req<IAppInfo>('AdmAppInfo')
            .body(param)
            .post();
    }

    public GetLastModuleCode(appId: number): Observable<any> {
        return req<any>(`AdmModuleInfo/${appId}/seqlastid`)
            .get();
    }

}

export interface IAppInfo {
    APP_ID?: number;
    APP_CODE?: string;
    APP_NAME?: string;
    APP_REMARK?: string;
    APP_ICON?: string;
    APP_SEQ?: string;
    APP_URL?: string;
    RECORD_STATUS?: string;
    NOTI_COUNT: number;
    DEL_FLAG?: string;
    UPDATE_DATE? : Date;
    CREATE_USER_ID? : number;
    UPDATE_USER_ID? : number;
    CREATE_DATE? : Date;
}
