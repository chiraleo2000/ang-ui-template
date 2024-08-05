import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IDistrictInfo } from './district.service';
import { req } from '../common/betimes-http-request';
@Injectable({
    providedIn: 'root'
})
export class ProvinceService {
    constructor() { }

    public getProvince(includeStatus = true): Observable<IProvinceinfo[]> {
        return req<IProvinceinfo[]>('CmsProvince')
            .queryString({ RecordStatus: <any>includeStatus })
            .get();
    }

    public getProvinceOfRegion(region: number): Observable<IProvinceinfo[]> {
        return req<IProvinceinfo[]>("CmsRegion/regions/" + region)
            .cache()
            .get();
    }

    public getDistrictofProvince(provice: number): Observable<IDistrictInfo[]> {
        return req<IDistrictInfo[]>('CmsProvince/' + provice + '/district').get();
    }

    public update(id: number, param: IProvinceinfo): Observable<IProvinceinfo> {
        return req<IProvinceinfo>('CmsProvince/' + id)
            .body(param)
            .put();
    }

    public create(param: IProvinceinfo): Observable<IProvinceinfo> {
        return req<IProvinceinfo>('CmsProvince')
            .body(param)
            .post();
    }

}


export interface IProvinceinfo {

    PROVINCE_ID?: number;
    PROVINCE_NAME_THA?: string;
    PROVINCE_NAME_ENG?: string;
    REGION_ID?: number;
    RECORD_STATUS?: string;
}

