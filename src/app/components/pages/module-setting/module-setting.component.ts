import { Component, ViewChild, type OnInit } from '@angular/core';
import { DxMultiViewComponent, DxSelectBoxComponent } from 'devextreme-angular';
import { ModuleEditComponent } from './module-edit/module-edit.component';
import DataSource from 'devextreme/data/data_source';
import { User } from 'src/app/services/user';
import { finalize } from 'rxjs/operators';
import { AdmModuleInfoService, IModuleInfo } from 'src/app/services/adm-module-info.service';
import { AppInfoService, IAppInfo } from 'src/app/services/adm-app-info.service';
import { showConfirmDialog, showDialog } from 'src/app/common/dialog/dialog';

@Component({
    selector: 'app-module-setting',
    templateUrl: './module-setting.component.html',
    styleUrls: ['./module-setting.component.scss']
})
export class ModuleSettingComponent implements OnInit {

    @ViewChild(DxMultiViewComponent, { static: true }) multiView: DxMultiViewComponent;
    @ViewChild(ModuleEditComponent, { static: true }) form: ModuleEditComponent;
    @ViewChild('select', { static: false }) select: DxSelectBoxComponent;
    public formData: IModuleInfo = {} as any;
    moduleInfo: DataSource;
    appinfo: IAppInfo[];
    addMenuLevel2 = false;

    constructor(private service: AdmModuleInfoService,
        private serviceAppinfo: AppInfoService) {
        this.formData = {} as any;
    }

    ngOnInit() {
        this.form.mainForm = this;
        this.LoadApp();
    }

    OnAppSelected(e) {
        if (e.event) {
            const data = this.select.instance.option("selectedItem");
            if (data) {
                this.form.appName = data.APP_NAME;
            }
            this.formData.APP_ID = e.value;

            if (e.value !== -1) {
                this.moduleInfo = new DataSource({
                    load: () => this.service.Get(User.Current.Role.RoleId, false, e.value).toPromise()
                        .then(_ => {
                            if (!_) {
                                _ = [];
                            }
                            return { data: _ };
                        })
                });
            } else if (e.value === -1) {
                this.moduleInfo = new DataSource({
                    load: () => this.service.Get(User.Current.Role.RoleId, false).toPromise()
                        .then(_ => {
                            if (!_) {
                                _ = [];
                            }
                            return { data: _ };
                        })
                });
            }
        }
    }

    LoadApp() {
        if (User.Current.Role.RoleCode === 'ROOT' && !this.formData.APP_ID) {
            this.formData.APP_ID = (this.formData.APP_ID) ? this.formData.APP_ID : -1;
            this.moduleInfo = new DataSource({
                load: () => this.service.Get(User.Current.Role.RoleId, false).toPromise()
                    .then(_ => {
                        if (!_) {
                            _ = [];
                        }

                        return { data: _ };
                    })
            });
        } else if (User.Current.Role.RoleCode !== 'ROOT' && !this.formData.APP_ID) {
            this.formData.APP_ID = (this.formData.APP_ID) ? this.formData.APP_ID : 1;
            this.moduleInfo = new DataSource({
                load: () => this.service.Get(User.Current.Role.RoleId, false, this.formData.APP_ID).toPromise()
                    .then(_ => {
                        if (!_) {
                            _ = [];
                        }

                        return { data: _ };
                    })
            });
        } else {
            this.formData.APP_ID = (this.formData.APP_ID) ? this.formData.APP_ID : 1;
            this.moduleInfo = new DataSource({
                load: () => this.service.Get(User.Current.Role.RoleId, false, this.formData.APP_ID).toPromise()
                    .then(_ => {
                        if (!_) {
                            _ = [];
                        }

                        return { data: _ };
                    })
            });
        }
        this.serviceAppinfo.GetAppInfo(User.Current.Role.RoleId, false).subscribe(_ => {
            this.appinfo = _;
            this.formData.APP_ID = _[0].APP_ID;
        });

    }

    Add() {

        if (!this.formData.APP_ID || this.formData.APP_ID === -1) {
            showDialog({
                type: "warning",
                title: "แจ้งเตือน!",
                message: "กรุณาเลือก Module ก่อน",
            }).then(() => { });
        }

        else {

            this.form.disabledApprov = false;
            this.form.LoadModule();
            this.form.disabled = true;
            this.form.modulePriv = [];
            this.form.moduleInfo = [];
            this.form.moduleIdform = undefined;
            this.formData.MODULE_ICON = undefined;
            this.formData.MODULE_ID = undefined;
            this.formData.MODULE_REMARK = undefined;
            this.formData.MODULE_URL = undefined;
            this.formData.MODULE_ID = undefined;
            this.formData.MODULE_MAIN_FLAG = 'Y';
            this.formData.RECORD_STATUS = 'A';
            this.formData.MODULE_LEVEL = 1;
            this.formData.MODULE_PARENT_ID = 0;
            this.formData.MODULE_NEW_WINDOW_FLAG = 'N';

            this.serviceAppinfo.GetLastModuleCode(this.formData.APP_ID)
                .subscribe((_) => {
                    this.formData.MODULE_CODE = _.LAST_MODULE_CODE;
                    this.formData.MODULE_SEQ = _.LAST_MODULE_CODE;
                    this.multiView.selectedIndex = 1;
                });
        }
    }
    addMenuChild(e) {

        if (!this.formData.APP_ID || this.formData.APP_ID === -1) {
            showDialog({
                type: "warning",
                title: "แจ้งเตือน!",
                message: "กรุณาเลือก Module ก่อน",
            }).then(() => { });
        }

        else {

            this.form.disabledApprov = false;
            this.form.LoadModule();
            this.form.disabled = true;
            this.form.modulePriv = [];
            this.form.moduleInfo = [];
            this.form.moduleIdform = undefined;
            this.formData.MODULE_ICON = undefined;
            this.formData.MODULE_ID = undefined;
            this.formData.MODULE_REMARK = undefined;
            this.formData.MODULE_URL = undefined;
            this.formData.MODULE_ID = undefined;
            this.formData.MODULE_MAIN_FLAG = 'N';
            this.formData.RECORD_STATUS = 'A';
            this.formData.MODULE_LEVEL = 2;
            this.formData.MODULE_PARENT_ID = e.data.MODULE_ID;
            this.formData.MODULE_NEW_WINDOW_FLAG = 'N';

            this.serviceAppinfo.GetLastModuleCode(this.formData.APP_ID)
                .subscribe((_) => {
                    this.formData.MODULE_CODE = _.LAST_MODULE_CODE;
                    this.formData.MODULE_SEQ = _.LAST_MODULE_CODE;
                    this.multiView.selectedIndex = 1;
                });
        }
    }
    Edit(e) {
        this.form.LoadModule();
        this.form.disabledApprov = true;
        this.formData = e.data;
        this.form.Load(e.data.MODULE_ID);
        this.multiView.selectedIndex = 1;
    }

    OnIcon(e) {
        return e.data.MODULE_ICON;
    }

    IsNameStatus(d) {
        return d.data.MODULE_NAME;
    }

    async Delete(e, d) {
        if (!this.formData.APP_ID || this.formData.APP_ID === -1) {
            showDialog({
                type: "warning",
                title: "แจ้งเตือน!",
                message: "กรุณาเลือก Module ก่อน",
            }).then(() => { });
        } else {
            const confirm = await showConfirmDialog({ title: 'ยืนยัน!', message: 'คุณต้องการลบข้อมูลนี้หรือไม่' })
            if (!confirm) {
                return;
            }

            e.startWait();
            this.service.DelModuleInfo(d.data.MODULE_ID)
                .pipe(finalize(() => e.stopWait()))
                .subscribe(_ => {
                    showDialog({
                        type: "info",
                        title: "สำเร็จ!",
                        message: "ลบข้อมูลเรียบร้อย",
                    }).then(() => {
                        this.LoadApp();
                    });
                });
        }

    }

    Clear() {
        this.formData.MODULE_CODE = undefined;
        this.formData.MODULE_ICON = undefined;
        this.formData.MODULE_ID = undefined;
        this.formData.MODULE_LEVEL = undefined;
        this.formData.MODULE_NAME = undefined;
        this.formData.MODULE_PARENT_ID = undefined;
        this.formData.MODULE_REMARK = undefined;
        this.formData.MODULE_SEQ = undefined;
        this.formData.MODULE_URL = undefined;
        this.formData.MODULE_MAIN_FLAG = undefined;
        this.formData.RECORD_STATUS = undefined;
    }

    IsIconStatus(d) {
        let icon;
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        return icon = 'fa ' + d.data.MODULE_ICON;
    }

}
