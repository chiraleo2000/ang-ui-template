import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAppInfo } from './adm-app-info.service';
import { User } from './user';
import { req } from '../common/betimes-http-request';
import { HttpStatusResultValue, IPagingResult, OffsetFilterParam } from '../common/common-type';
import { environment } from 'src/environments/environment';
import { trimObject } from '../common/helper';

@Injectable({
    providedIn: 'root'
})
export class OrganizeInfoService {

    constructor() { }
    public gets(filter: OrganizeFilterParam): Observable<IPagingResult<IOrganizeInfo>> {
        trimObject(filter)
        return req<IPagingResult<IOrganizeInfo>>("CmsOrganize")
            .queryString(filter as any)
            .get();
    }


    public GetByOrganizeId(id: number): Observable<IOrganizeInfo> {
        return req<IOrganizeInfo>(`CmsOrganize/${id}`)
            .host(environment.config.baseConfig.dsApiUrl)
            .cache()
            .get();
    }

    // public GetByOrganizeIdResult(id: number): Observable<HttpStatusResultValue<IOrganizeInfo>> {
    //     return req(`CmsOrganize/${id}`)
    //         .useSystemResult<HttpStatusResultValue<IOrganizeInfo>>()
    //         .get();
    // }

    public GetApps(roleId: number): Observable<IAppInfo[]> {
        return req<IAppInfo[]>('CmsOrganize/app')
            .queryString({ roleId: <any>roleId })
            .get();
    }

    public InsertOrganizeInfo(param: FormData): Observable<any> {
        return req("CmsOrganize")
            .body(param)
            .post();

    }

    public GetsOrganizePki(id: number): Observable<IOrganizeInfo[]> {
        return req<IOrganizeInfo[]>(`CmsOrganize/${id}/pki`)
            .get();
    }

    public UpdateOrganizeInfo(id: number, param: FormData): Observable<IOrganizeInfo> {
        return req<IOrganizeInfo>(`CmsOrganize/${id}`)
            .body(param)
            .put();
    }

    public SearchOrganizeName(name: string, offset: number, length: number): Observable<IPagingResult<IOrganizeInfo>> {
        return req<IPagingResult<IOrganizeInfo>>("CmsOrganize/search")
            .body({
                Condition: {
                    ORGANIZE_NAME_THA: name
                }, Offset: offset, Length: length
            })
            .post();
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    public SearchOrganize(searchObj: Object, offset: number, length: number): Observable<IPagingResult<IOrganizeInfo>> {
        return req<IPagingResult<IOrganizeInfo>>("CmsOrganize/search")
            .body({ Condition: searchObj, Offset: offset, Length: length })
            .queryString({ roleId: User.Current.Role.RoleId })
            .post();
    }
}

export interface OrganizeFilterParam extends OffsetFilterParam {
    organizeName?: string;
}


export interface IOrganizeInfo {
    ORGANIZE_ID?: number;
    ORGANIZE_ECMS_ID?: string;
    ORGANIZE_CODE_LEV1: number;
    ORGANIZE_CODE_LEV2: number;
    ORGANIZE_CODE_LEV3: number;
    ORGANIZE_CODE_LEV4: number;
    ORGANIZE_CODE_LEV5: number;
    ORGANIZE_ROOT_ID?: number;
    ORGANIZE_LEVEL_ID?: number;
    ORGANIZE_ARIA_CODE?: string;
    ORGANIZE_NAME_DETAIL?: string;
    ORGANIZE_NAME_THA?: string;
    ORGANIZE_NAME_ENG?: string;
    ORGANIZE_ABBR_THA?: string;
    ORGANIZE_ABBR_ENG?: string;
    ORGANIZE_TELEPHONE?: string;
    ORGANIZE_FAX?: string;
    ORGANIZE_CONTACT?: string;
    ORGANIZE_EMAIL?: string;
    ORGANIZE_ADDRESS_NO?: string;
    ORGANIZE_ADDRESS_MOO?: string;
    ORGANIZE_ADDRESS_BUILDING?: string;
    ORGANIZE_ADDRESS_SOI?: string;
    ORGANIZE_ADDRESS_STREET?: string;
    ORGANIZE_ADDRESS_PROVINCE?: number;
    ORGANIZE_ADDRESS_DISRICT?: number;
    ORGANIZE_ADDRESS_SUB_DISTRICT?: number;
    ORGANIZE_ADDRESS_POSTCODE?: number;
    ORGANIZE_IMAGE_PATH?: string;
    ORGANIZE_LOGO_PATH?: string;
    ORGANIZE_FILE_PATH?: string;
    ORGANIZE_URL_INTERNET?: string;
    ORGANIZE_URL_INTRANET?: string;
    ORGANIZE_URL_DM?: string;
    ORGANIZE_FORMAL_FLAG?: string;
    ORGANIZE_TYPE_ID?: number;
    ORGANIZE_SEQ?: number;
    GOVERNMENT_ID?: number;
    GOVERNMENT_TYPE_ID?: number;
    MANAGER_ID?: number;
    MANAGER2_ID?: number;
    RECORD_STATUS?: string;
    DEL_FLAG?: string;
    ORGANIZE_LEVEL?: number;
    ORGANIZE_LEVEL_PARENT?: number;
    MANAGER_FULL_NAME?: string;
    MANAGER2_FULL_NAME?: string;
    MANAGER_POSITION?: string;
    ORGANIZE_PARENT_ID?: string;
    ROOT_ORGANIZE_NAME_THA?: string;
    ORGANIZE_CODE_LEV1_OLD?: string;
    ORGANIZE_CODE_LEV2_OLD?: string;
    ORGANIZE_CODE_LEV3_OLD?: string;
    ORGANIZE_CODE_LEV4_OLD?: string;
    ORGANIZE_CODE_LEV5_OLD?: string;
}

export interface IOrganizeInfoSend {
    ORGANIZE_ID?: number;
    ORGANIZE_CODE_LEV1: number;
    ORGANIZE_CODE_LEV2: number;
    ORGANIZE_CODE_LEV3: number;
    ORGANIZE_CODE_LEV4: number;
    ORGANIZE_CODE_LEV5: number;
    ORGANIZE_ROOT_ID?: number;
    ORGANIZE_LEVEL_ID?: number;
    ORGANIZE_ARIA_CODE?: string;
    ORGANIZE_NAME_DETAIL?: string;
    ORGANIZE_NAME_THA?: string;
    ORGANIZE_NAME_ENG?: string;
    ORGANIZE_ABBR_THA?: string;
    ORGANIZE_ABBR_ENG?: string;
    ORGANIZE_TELEPHONE?: string;
    ORGANIZE_FAX?: string;
    ORGANIZE_CONTACT?: string;
    ORGANIZE_EMAIL?: string;
    ORGANIZE_ADDRESS_NO?: string;
    ORGANIZE_ADDRESS_MOO?: string;
    ORGANIZE_ADDRESS_BUILDING?: string;
    ORGANIZE_ADDRESS_SOI?: string;
    ORGANIZE_ADDRESS_STREET?: string;
    ORGANIZE_ADDRESS_PROVINCE?: number;
    ORGANIZE_ADDRESS_DISRICT?: number;
    ORGANIZE_ADDRESS_SUB_DISTRICT?: number;
    ORGANIZE_ADDRESS_POSTCODE?: number;
    ORGANIZE_URL_INTERNET?: string;
    ORGANIZE_URL_INTRANET?: string;
    ORGANIZE_URL_DM?: string;
    ORGANIZE_TYPE_ID?: number;
    ORGANIZE_SEQ?: number;
    GOVERNMENT_ID?: number;
    GOVERNMENT_TYPE_ID?: number;
    MANAGER_ID?: number;
    MANAGER2_ID?: number;
    RECORD_STATUS?: string;
    DEL_FLAG?: string;
}
