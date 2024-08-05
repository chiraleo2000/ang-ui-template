import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { req } from '../common/betimes-http-request';

@Injectable({
    providedIn: 'root'
})
export class PermissionInfoService {

    constructor() { }


    public Get(): Observable<IPermission[]> {
        return req<IPermission[]>('AdmPermissionInfo').get();
    }
}

export interface IPermission {
    PERMISSION_ID: number;
    PERMISSION_CODE: string;
    PERMISSION_NAME: string;
    PERMISSION_REMARK: string;
    RECORD_STATUS: string;
    DEL_FLAG: string;
}
