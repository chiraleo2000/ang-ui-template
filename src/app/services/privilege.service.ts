import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { req } from '../common/betimes-http-request';
import { IMenu, IMenuPermission } from '../common/common-type';

@Injectable({
    providedIn: 'root'
})
export class PrivilegeService {
    private _menus: IMenu[];
    private _activeMenu: string;
    constructor() { }

    public set activeMenuCode(code: string) {
        this._activeMenu = code;
    }

    public get activeMenuCode(): string {
        return this._activeMenu;
    }

    public get menu(): IMenu[] {
        return this._menus;
    }

    public get currentPermission(): IMenuPermission {
        const menu = this._menus[this._activeMenu];
        if (!menu) {
            return undefined;
        }

        return menu.PERMISSION;
    }

    public loadMenu(roleId: number, renew?: boolean): Observable<boolean> {
        const request = req<IMenu[]>("user/menus");
        if (renew) {
            request.invalidate();
        }

        return request
            .cache()
            .queryString({roleId: roleId, appCode: "DS"})
            .get()
            .pipe(
                map(_ => {
                    this._menus = _;
                    return true;
                }),
                catchError( () => of(false) )
            );
    }
}
