import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISubDistrictInfo } from './sub-district.service';
import { req } from '../common/betimes-http-request';

@Injectable({
    providedIn: 'root'
})
export class DistrictService {
    constructor() { }

    public GetDistrict(includeStatus = true): Observable<IDistrictInfo[]> {
        return req<IDistrictInfo[]>('CmsDistrict')
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            .queryString({ RecordStatus: <any>includeStatus })
            .get();
    }

    public PutDistrict(id: number, param: IDistrictInfo): Observable<IDistrictInfo> {
        return req<IDistrictInfo>(`CmsDistrict/${id}`)
            .body(param)
            .put();
    }

    public PostDistrict(param: IDistrictInfo): Observable<IDistrictInfo> {
        return req<IDistrictInfo>('CmsDistrict')
            .body(param)
            .post();
    }

    public GetSubDistrictOfDistrict(district: number): Observable<ISubDistrictInfo[]> {
        return req<ISubDistrictInfo[]>(`CmsDistrict/${district}/sub-district`).get();
    }
}

export interface IDistrictInfo {
    DISTRICT_ID?: number;
    DISTRICT_NAME_THA?: string;
    DISTRICT_NAME_ENG?: string;
    PROVINCE_ID?: number;
    RECORD_STATUS?: string;
    DISTRICT_CODE?: string;
}
