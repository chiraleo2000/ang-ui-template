import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { req } from '../common/betimes-http-request';
import { IPagingResult, OffsetFilterParam } from '../common/common-type';
import { trimObject } from '../common/helper';

@Injectable({
    providedIn: 'root'
})
export class PersonalService {

    constructor() { }

    public gets(filter: PersonalFilter): Observable<IPagingResult<IPersonal>> {
        trimObject(filter);
        return req<IPagingResult<IPersonal>>('CmsPersonal')
            .queryString(filter as any)
            .get();
    }

    // eslint-disable-next-line @typescript-eslint/ban-types
    public Search(searchObj: object, offset: number, length: number): Observable<IPagingResult<IPersonal>> {
        return req<IPagingResult<IPersonal>>("CmsPersonal/search")
            .body({ Condition: searchObj, Offset: offset, Length: length })
            .post();
    }

    public SearchByName(name: string, offset: number, length: number): Observable<IPagingResult<IPersonal>> {
        return this.Search({ PERSONAL_FULL_NAME: name }, offset, length);

    }

    public GetPersonal(): Observable<IPersonal[]> {
        return req<IPersonal[]>('CmsPersonal')
            // .queryString({ RecordStatus: <any>includeStatus })
            .get();
    }
    public GetPersonalById(id: number): Observable<IPersonal> {
        return req<IPersonal>(`CmsPersonal/${id}`)
            .get();
    }

    public GetPersonalManager(id: number): Observable<IOrganizeInfo[]> {
        return req<IOrganizeInfo[]>(`CmsPersonal/${id}/organize/manager`)
            .get();
    }
    // eslint-disable-next-line @typescript-eslint/ban-types
    public admSearch(roleId: number, searchObj: Object, offset: number, length: number): Observable<IPagingResult<IPersonal>> {
        return req<IPagingResult<IPersonal>>("CmsPersonal/search")
            .queryString({ RoleId: roleId })
            .body({ Condition: searchObj, Offset: offset, Length: length })
            .post();
    }


    public admSearchByName(roleId: number, name: string, offset: number, length: number): Observable<IPagingResult<IPersonal>> {
        return this.admSearch(roleId, { PERSONAL_FULL_NAME: name }, offset, length);
    }

    public PutPersonal(id: number, param: FormData): Observable<IPersonal> {
        return req<IPersonal>(`CmsPersonal/${id}`)
            .body(param)
            .put();
    }


    public PostPersonal(param: FormData): Observable<IPersonal> {
        return req<IPersonal>('CmsPersonal')
            .body(param)
            .post();
    }


}





export interface IPersonal {
    PERSONAL_ID?: number;
    PERSONAL_CODE?: string;
    TITLE_ID?: number;
    PERSONAL_FULL_NAME: string;
    TITLE_NAME: string;
    ORGANIZE_ROOT_ID: number;
    PERSONAL_FNAME_THA?: string;
    PERSONAL_LNAME_THA?: string;
    PERSONAL_START_DATE?: Date;
    PERSONAL_BIRTH_DATE?: any;
    PERSONAL_LEAVE_DATE?: Date;
    PERSONAL_TYPE_ID?: number;
    POSITION_ID?: number;
    POSITION_NAME?: string;
    POSITION_MNG_ID?: number;
    POSITION_MNG_NAME?: string;
    POSITION_MNG_LEVEL?: number;
    ORG_ID?: number;
    ORG_NAME?: string;
    PERSONAL_TEL_NO?: string;
    PERSONAL_NATIONALITY?: string;
    PERSONAL_RACE?: string;
    PERSONAL_TEL_HOME?: string;
    PERSONAL_TEL_POSITION?: string;
    PERSONAL_ADDRESS_HOME_REGISTER?: string;
    PERSONAL_ACCIDENCE_TEL?: string;
    PERSONAL_STATUS?: string;
    PERSONAL_CITIZEN_NUMBER?: string;
    PERSONAL_ADDRESS?: string;
    PROVINCE_ID?: number;
    DISTICT_ID?: number;
    SUB_DISTICT_ID?: number;
    POST_CODE?: number;
    HOME_REGISTER_PROVINCE_ID?: number;
    HOME_REGISTER_DISTICT_ID?: number;
    HOME_REGISTER_SUB_DISTICT_ID?: number;
    HOME_REGISTER_POST_CODE?: number;
    ACCIDENCE_TEL?: string;
    ACCIDENCE_ADDRESS?: string;
    ACCIDENCE_PROVINCE?: number;
    ACCIDENCE_DISTICT?: number;
    ACCIDENCE_SUB_DISTICT?: number;
    ACCIDENCE_POST_CODE?: number;
    PERSONAL_RELIGION?: string;
    PERSONAL_GENDER?: number;
    PERSONAL_EMAIL?: string;
    PERSONAL_SALARY?: number;
    PERSONAL_WORK_ADDRESS?: string;
    PERSONAL_PICTURE?: string;
    ACCIDENCE_PERSON?: string;
    ACCIDENCE_RELATION?: string;
    RECORD_STATUS?: string;
    USER_NAME?: string;
    HOME_REGISTER_ADDRESS?: string;
    NEW_PASSWORD?: string;
    UPLOAD_PICTURE?: string;
    USER_PICTURE?: string;
    OLD_PASSWORD?: string;
    USER_ID?: number;
    PERSONAL_SIGNATURE_PICTURE?: string;
    ORGANIZE_NAME_THA?: string;
    UPDATE_DATE?: any;
    UPDATE_USER_ID?: number;
    CREATE_DATE?: Date;
    CREATE_USER_ID?: number;
    SECURITY_FLAG?: string;
    SECURITY_TYPE?: string;
    SECURITY_CODE?: string;
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
}

export interface PersonalFilter extends OffsetFilterParam {
    personalFullName?: string;
}
