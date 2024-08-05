import { Component, OnInit, ViewChild } from "@angular/core";
import DataSource from "devextreme/data/data_source";
import { IMenu, LoadMenuParam } from "src/app/common/common-type";
import { PrivilegeService } from "src/app/services/privilege.service";
import { User } from "src/app/services/user";
import { MenuSelectionChangedEvent, SidebarComponent } from "../sidebar/sidebar.component";
import { Observable } from "rxjs";
@Component({
    selector: "app-main-page",
    templateUrl: "./main-page.component.html",
    styleUrls: ["./main-page.component.scss"],
})
export class MainPageComponent implements OnInit {
    @ViewChild(SidebarComponent, { static: true }) sidebar: SidebarComponent;
    menuDataSource: DataSource<IMenu>;
    breadcrumbItems: IMenu[];

    constructor(private _privilegeServ: PrivilegeService) {}

    ngOnInit() {
        const menuSoruce = new DataSource<IMenu>({
            key: "MODULE_ID",
            paginate: false,
            load: (opt) => {
                const v: LoadMenuParam = opt.searchValue;
                if (!v.roleId) {
                    return Promise.resolve([]);
                }

                let request: Observable<boolean>;
                if (v.renew !== undefined || v.renew !== null) {
                    request = this._privilegeServ.loadMenu(v.roleId, v.renew);
                } else {
                    request = this._privilegeServ.loadMenu(v.roleId);
                }
                    return request.toPromise().then(() => this._privilegeServ.menu);
            },
        });
        this.sidebar.menuDataSource = menuSoruce;
    }

    onMenuSelectionChanged(e: MenuSelectionChangedEvent) {
        this.breadcrumbItems = e.breadcrumbData;
    }
}
