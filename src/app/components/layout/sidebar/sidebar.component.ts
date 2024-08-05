import { Component, OnInit, ViewChild, Output, EventEmitter, Input, OnDestroy } from "@angular/core";
import { NavigationEnd, Router } from "@angular/router";
import { DxTreeViewComponent } from "devextreme-angular";
import { Subscription } from "rxjs";
import { User } from "src/app/services/user";
import { IMenu, LoadMenuParam } from "src/app/common/common-type";
import { IRole } from "src/app/services/role.service";
import DataSource from "devextreme/data/data_source";
import { Node } from "devextreme/ui/tree_view";
import { showDialog } from "src/app/common/dialog/dialog";
import { EventNotificationCenter, StandardEventName } from "src/app/common/event";

@Component({
    selector: "app-sidebar",
    templateUrl: "./sidebar.component.html",
    styleUrls: ["sidebar.component.scss"],
})
export class SidebarComponent implements OnInit, OnDestroy {
    @ViewChild(DxTreeViewComponent) treeview: DxTreeViewComponent;
    @Output() menuSelectionChanged = new EventEmitter<MenuSelectionChangedEvent>();
    @Input() set menuDataSource(v: DataSource<IMenu>) {
        if (v) {
            this._menuDataSource = v;
            this._menuDataSource.off("loadingChanged");
            this._menuDataSource.on({
                loadingChanged: isLoading => this.onMenuDataSourceLoading(isLoading),
            });
            if (this._menuDataSource.items().length === 0) {
                const param: LoadMenuParam = {
                    roleId: User.Current.Role.RoleId,
                    renew: false,
                };
                this._menuDataSource.searchValue(param);
                this._menuDataSource.load();
            }
        }
    }
    get menuDataSource() {
        return this._menuDataSource;
    }

    protected _menuDataSource: DataSource<IMenu>;
    roleList: IRole[];
    innerWidth = 280;
    userImagePath: string;
    checkImg = true;
    curRoleId: number;
    orgInfo: string;
    buttonVisable = true;

    routeEventSubscription: Subscription;
    freezeRouteEvent: boolean;
    private _currentMenu: IMenu;
    private _isChangeRole = false;

    constructor(private router: Router) {}

    ngOnInit() {
        this.roleList = User.Current.Roles;
        this.curRoleId = User.Current.Role.RoleId;
        this.routeEventSubscription = this.router.events.subscribe((ev) => {
            if (!this.freezeRouteEvent && ev instanceof NavigationEnd) {
                this.selectCurrentRoute();
            }
        });
    }

    ngOnDestroy(): void {
        this.routeEventSubscription?.unsubscribe();
    }

    menuClicked(e: any) {
        if (e.node.children.length > 0) {
            if (e.node.expanded) {
                this.treeview.instance.collapseItem(e.node.key);
            } else {
                this.treeview.instance.expandItem(e.node.key);
            }
        } else {
            this.treeview.instance.unselectAll();
            this.treeview.instance.selectItem(e.node.key);
            this.freezeRouteEvent = true;
            this.router.navigate(["/" + e.itemData.MODULE_URL]).then(() => {
                this.freezeRouteEvent = false;
            });
        }
    }

    selectCurrentRoute() {
        let menu: IMenu;
        const menus: IMenu[] = this._menuDataSource.items();

        try {
            menu = menus.find(
                (s) =>
                    s.MODULE_URL &&
                    this.router.isActive(s.MODULE_URL, {
                        paths: "subset",
                        queryParams: "ignored",
                        fragment: "ignored",
                        matrixParams: "ignored",
                    })
            );
            if (menu) {
                if (menu.MODULE_PARENT_ID > 0) {
                    this.treeview.instance.expandItem(menu.MODULE_PARENT_ID);
                }
                this.treeview.instance.unselectAll();
                setTimeout(() => {
                    this.treeview.instance.selectItem(menu.MODULE_ID);
                });
            }
        } catch {
            /* empty */
        }
    }

    getMenuMainMenu(): IMenu {
        const menus: IMenu[] = this._menuDataSource.items();
        return menus.find((s) => s.MODULE_MAIN_FLAG === "Y");
    }

    onTreeViewItemSelectionChanged(e) {
        if (this._currentMenu && this._currentMenu.MODULE_ID === e.itemData.MODULE_ID) {
            return;
        }

        this._currentMenu = e.itemData;
        this.menuSelectionChanged.emit({
            sender: this,
            menu: e.itemData,
            breadcrumbData: e.node ? this.getBreadcrumbData(e.node) : undefined,
        });
    }

    onRoleSelected(e) {
        if (!e.event) {
            return;
        }

        const curRole = User.Current.Role;
        const targetRole = e.component.instance().option("selectedItem") as IRole;
        if (curRole.RoleId !== targetRole.RoleId) {
            this._isChangeRole = true;
            const param: LoadMenuParam = {
                roleId: targetRole.RoleId,
                renew: true,
            };
            this._menuDataSource.searchValue(param);
            this._menuDataSource.load().then(() => {
                this._isChangeRole = false;
                User.SwitchRole(targetRole);
                EventNotificationCenter.on(StandardEventName.RoleChanged).emit(targetRole);

                showDialog({
                    type: "info",
                    message: `เปลี่ยนบทบาทเป็น '${targetRole.RoleName}'`,
                });
            });
        }
    }

    private getBreadcrumbData(node: Node): IMenu[] {
        return node.parent ? this.getBreadcrumbData(node.parent).concat(node.itemData as IMenu) : [node.itemData as IMenu];
    }

    private onMenuDataSourceLoading(isLoading: boolean) {
        if (isLoading) {
            // TODO: Loading State ...
        } else {
            const mainMenu = this.getMenuMainMenu() || this._menuDataSource.items().find(_ => !!_.MODULE_URL);
            if (mainMenu && (this.router.url === "/" || this._isChangeRole)) {
                this.router.navigate([mainMenu.MODULE_URL]);
            } else {
                setTimeout(() => {
                    this.selectCurrentRoute();
                });
            }
        }
    }
}

export interface MenuSelectionChangedEvent {
    sender: SidebarComponent;
    menu: IMenu;
    breadcrumbData: IMenu[];
}
