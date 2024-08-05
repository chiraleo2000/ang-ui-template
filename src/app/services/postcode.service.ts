import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { req } from '../common/betimes-http-request';
import { IPagingResult } from '../common/common-type';

@Injectable({
    providedIn: 'root'
})
export class PostcodeService {

    constructor() { }


    public GetPostcode(includeStatus = true): Observable<IPostcodeInfo[]> {
        return req<IPostcodeInfo[]>('CmsPostCode')
            .queryString({ RecordStatus:includeStatus as any})
            .get();
    }

    public PutPostcode(id: number, param: IPostcodeInfo): Observable<IPostcodeInfo> {
        return req<IPostcodeInfo>(`CmsPostCode/${id}`)
            .body(param)
            .put();
    }

    public PostPostcode(param: IPostcodeInfo): Observable<IPostcodeInfo> {
        return req<IPostcodeInfo>('CmsPostCode')
            .body(param)
            .post();
    }

    public SearchPostcode(searchObj: object, offset: number,length: number, includeStatus = true): Observable<IPagingResult<IPostcodeInfo>> {
        return req<IPagingResult<IPostcodeInfo>>("CmsPostCode/search")
            .body({ Condition: searchObj, Offset: offset, Length: length })
            .queryString({ RecordStatus: includeStatus as any})
            .post();
    }
}
export interface IPostcodeInfo {

    POSTCODE_ID?: number;
    POSTCODE_CODE?: string;
    PROVINCE_ID?: number;
    DISTRICT_ID?: number;
    SUB_DISTRICT_ID?: number;
    SUB_DISTRICT_NAME_THA?: string;
    RECORD_STATUS?: string;
}
