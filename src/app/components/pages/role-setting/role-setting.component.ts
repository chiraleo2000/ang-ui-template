import { Component, ViewChild, type OnInit } from '@angular/core';
import { DxMultiViewComponent, DxSelectBoxComponent } from 'devextreme-angular';
import { User } from 'src/app/services/user';
import DataSource from 'devextreme/data/data_source';
import { AppInfoService, IAppInfo } from 'src/app/services/adm-app-info.service';
import { IAdmRoleInfo, IAdmRoleUser, RoleInfoService } from 'src/app/services/adm-role-info.service';
import { showConfirmDialog, showDialog } from 'src/app/common/dialog/dialog';
import { finalize } from 'rxjs/operators';
import { formatDate } from 'devextreme/localization';
import * as dayjs from 'dayjs';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subject } from 'rxjs';
import { FormCommandEvent, FormCommandEventType } from 'src/app/common/common-type';
import { RoleEditDisplayConfig } from '../province-setting/province-edit/province-edit.component';

@Component({
    selector: 'app-role-setting',
    templateUrl: './role-setting.component.html',
    styleUrls: ['./role-setting.component.scss'],
})
export class RoleSettingComponent implements OnInit {

    @ViewChild('select', { static: false }) select: DxSelectBoxComponent;
    @ViewChild(DxMultiViewComponent, { static: true }) multiView: DxMultiViewComponent;
    public formData: IAdmRoleInfo = <any>{};
    userRole: IAdmRoleUser = <any>{};
    admRole: IAdmRoleInfo[] = [];
    admRoleTemp = <any>[];
    roleCode = null;
    readonly = false;
    moduleInfo: DataSource;
    appinfo: IAppInfo[];
    appId: number;
    currentApp: IAppInfo;
    appSettingNoRoot: boolean;
    commandEvent: Observable<FormCommandEvent<RoleEditDisplayConfig>>

    private _commandEvent$ = new Subject<FormCommandEvent<RoleEditDisplayConfig>>();
    constructor(private service: RoleInfoService,
        private activeRoute: ActivatedRoute,
        private serviceAppinfo: AppInfoService) {
            this.commandEvent = this._commandEvent$.asObservable();
    }

    ngOnInit() {
        this.roleCode = User.Current.Role.RoleCode;
        this.Load(null);

        if (this.activeRoute.snapshot.params.roleId) {
            const roleId = this.activeRoute.snapshot.params.roleId;
            this.service.GetById(roleId).subscribe(_ => {
                this.serviceAppinfo.GetById(_.APP_ID).subscribe(app => {
                    this.currentApp = app;
                    this.appId = app.APP_ID;
                    this.formData.APP_ID = app.APP_ID;

                    this.multiView.selectedIndex = 1;
                    this._commandEvent$.next({ command: FormCommandEventType.update, data: {
                        appId: _.APP_ID,
                        appName: app.APP_NAME,
                        data: _
                    } });
                });
            });
        }
    }


    OnAppSelected(e) {
        if (e) {
            this.currentApp = this.select.instance.option("selectedItem");
            this.appId = e.value;
            this.service.Get(User.Current.Role.RoleId, e.value, false).subscribe(_ => {
                let indexDelete = -1;
                // eslint-disable-next-line eqeqeq
                if (User.Current.Role.RoleCode != "ROOT") {
                    _.forEach(role => {
                        const index: number = role.ROLE_CODE.indexOf("ROOT");
                        if (index > -1) {
                            indexDelete = index;
                        }
                    });
                }

                // ถ้าสิทธิ์ไม่ใช่ ROOT ไม่ต้องแสดงผู้ดูแลระบบ
                if (indexDelete > -1) {
                    this.admRole = _.slice(indexDelete + 1);
                } else {
                    this.admRole = _;
                }
            });
        }
    }

    Load(e) {
        this.serviceAppinfo.GetAppInfo(User.Current.Role.RoleId).subscribe(_ => {
            this.appinfo = _;

            if (e) {
                this.formData.APP_ID = e;
            } else {
                this.formData.APP_ID = this.appinfo[0].APP_ID;
            }
        });

        if (e) {
            this.service.Get(User.Current.Role.RoleId, e, false).subscribe(_ => {
                let indexDelete = -1;
                // eslint-disable-next-line eqeqeq
                if (User.Current.Role.RoleCode != "ROOT") {
                    _.forEach(role => {
                        const index: number = role.ROLE_CODE.indexOf("ROOT");
                        if (index > -1) {
                            indexDelete = index;
                        }
                    });
                }

                // ถ้าสิทธิ์ไม่ใช่ ROOT ไม่ต้องแสดงผู้ดูแลระบบ
                if (indexDelete > -1) {
                    this.admRole = _.slice(indexDelete + 1);
                } else {
                    this.admRole = _;
                }
            });
        }
    }

    CalStatus(rowData: IAdmRoleInfo) {
        if (rowData.RECORD_STATUS === 'A') {
            return 'ใช้งาน';
        } else {
            return 'ไม่ใช้งาน';
        }
    }

    DisplayDate(rowData: IAdmRoleInfo) {
        return formatDate(dayjs(rowData.CREATE_DATE).toDate(), "dateThai");
    }

    Add() {
        if (!this.appId) {
            showDialog({
                type: "warning",
                title: "แจ้งเตือน!",
                message: "กรุณากรอกแอปพลิเคชั่นก่อน",
            }).then(() => { });
        } else {
            this.multiView.selectedIndex = 1;
            this._commandEvent$.next({ command: FormCommandEventType.add , data: {
                appName: this.currentApp.APP_NAME
            } });
        }

    }

    Edit(e) {
        if (!this.appId) {
            showDialog({
                type: "warning",
                title: "แจ้งเตือน!",
                message: "กรุณาเลือกแอปพลิเคชั่นก่อน",
            }).then(() => { });
        } else {
            this.multiView.selectedIndex = 1;
            this._commandEvent$.next({ command: FormCommandEventType.update, data: {
                appName: this.currentApp.APP_NAME,
                roleId: e.data.ROLE_ID,
                appId: e.data.APP_ID,
            } });
        }
    }

    async Delete(e, x) {
        const confirm = await showConfirmDialog({ title: 'ยืนยัน', message: 'คุณต้องการลบข้อมูลนี้หรือไม่' });

        if (!confirm) {
            return;
        }

        x.data.DEL_FLAG = 'Y';
        this.userRole.roleInfo = x.data;
        this.userRole.userRole = [];
        e.startWait();
        this.service.EditRoleInfo(this.userRole.roleInfo.ROLE_ID, this.userRole)
            .pipe(finalize(() => e.stopWait()))
            .subscribe(_ => {
                showDialog({
                    type: "info",
                    title: "สำเร็จ",
                    message: "ลบข้อมูลเรียบร้อย",
                }).then(() => {
                    this.Load(x.data.APP_ID);
                });
            });
    }
}
