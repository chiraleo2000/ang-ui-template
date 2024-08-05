import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { req } from '../common/betimes-http-request';

@Injectable({
    providedIn: 'root'
})
export class AdmModuleInfoService {

    constructor() { }
    public GetMuduleInfo(): Observable<any> {
        return req<any>().api('AdmModuleInfo')
            .get();
    }

    public Get(role: number , includeStatus = true , appid? : number ): Observable<IModuleInfo[]> {
        // eslint-disable-next-line prefer-const
        let request =  req<IModuleInfo[]>('AdmModuleInfo');
        if(appid){
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            request.queryString({ roleId: role , RecordStatus: <any>includeStatus , appId : appid });
        } else {
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            request.queryString({ roleId: role , RecordStatus: <any>includeStatus });
        }
        return request.get();
    }

    public InsertModuleInfo(param: IModuleInfo): Observable<any> {
        return req("AdmModuleInfo")
            .body(param)
            .post();

    }

    public EditModuleInfo(id: number, param: IModuleInfo): Observable<IModuleInfo> {
        return req<IModuleInfo>(`AdmModuleInfo/${id}`)
            .body(param)
            .put();
    }

    public DelModuleInfo(id: number): Observable<any> {
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        return req<IModuleInfo>(`AdmModuleInfo/${id}`)
            .delete();
    }

}

export interface IModuleInfo {
    APP_ID? : number;
    APP_NAME? : string;
    MODULE_ID?: number;
    MODULE_SEQ?: string;
    MODULE_CODE?: string;
    MODULE_NAME?: string;
    MODULE_REMARK?: string;
    MODULE_PARENT_ID?: number;
    MODULE_LEVEL?: number;
    MODULE_MAIN_FLAG?: string;
    MODULE_URL?: string;
    MODULE_ICON?: string;
    MODULE_NEW_WINDOW_FLAG?: string;
    RECORD_STATUS?: string;

}
