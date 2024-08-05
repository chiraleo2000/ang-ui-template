import { Inject, Injectable } from '@angular/core';
import { req } from '../common/betimes-http-request';
import { Observable } from 'rxjs';
import { IPostcodeInfo } from './postcode.service';
import { IPagingResult } from '../common/common-type';

@Injectable({
    providedIn: 'root'
})
export class SubDistrictService {

    constructor() { }

    public GetSubDistrict(includeStatus = true): Observable<ISubDistrictInfo[]> {
        return req<ISubDistrictInfo[]>('CmsSubDistrict')
            .queryString({ RecordStatus: <any>includeStatus })
            .get();
    }

    public GetPostCode(subdistrictId: number): Observable<IPostcodeInfo[]> {
        return req<IPostcodeInfo[]>(`CmsSubDistrict/${subdistrictId}/post-code`)
            .get();
    }

    public PutSubDistrict(id: number, param: ISubDistrictInfo): Observable<ISubDistrictInfo> {
        return req<ISubDistrictInfo>(`CmsSubDistrict/${id}`)
            .body(param)
            .put();
    }

    public PostSubDistrict(param: ISubDistrictInfo): Observable<ISubDistrictInfo> {
        return req<ISubDistrictInfo>('CmsSubDistrict')
            .body(param)
            .post();
    }

    public SearchSubDistrict(searchObj: object, offset: number, length: number,
                             includeStatus = true): Observable<IPagingResult<ISubDistrictInfo>> {
        return req<IPagingResult<ISubDistrictInfo>>("CmsSubDistrict/search")
            .body({ Condition: searchObj, Offset: offset, Length: length })
            .queryString({ RecordStatus: <any>includeStatus })
            .post();
    }
}


export interface ISubDistrictInfo {

    SUB_DISTRICT_ID?: number;
    SUB_DISTRICT_NAME_THA?: string;
    SUB_DISTRICT_NAME_ENG?: string;
    PROVINCE_ID?: number;
    DISTRICT_ID?: number;
    LAT?: number;
    LONG?: number;
    RECORD_STATUS?: string;
}
