import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { req } from '../common/betimes-http-request';

@Injectable({
    providedIn: 'root'
})
export class RoleService {
    private _roleInfo: IRole[];
    public get RoleInfo(): IRole[] {
        return this._roleInfo;
    }

    constructor() { }


    public LoadRole(): Observable<boolean> {
        return req<IRole[]>("role/DS")
            .cache()
            .get()
            .pipe(
                map(_ => {
                    this._roleInfo = _;
                    return true;
                }),
                catchError( () => of(false) )
            );
    }

}

export interface IRole {
    RoleId: number;
    RoleCode: string;
    RoleName: string;
    OrgRefId: number;
    OrgLevel: number;
    OrganizeName: string;
}
