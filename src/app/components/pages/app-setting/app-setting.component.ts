import { CommonModule } from '@angular/common';
import { Component, ViewChild, type OnInit } from '@angular/core';
import { AppInfoService, IAppInfo } from 'src/app/services/adm-app-info.service';
import DataSource from 'devextreme/data/data_source';
import { DxMultiViewComponent } from 'devextreme-angular';
import { AppEditComponent } from './app-edit/app-edit.component';
import { User } from 'src/app/services/user';

@Component({
    selector: 'app-app-setting',
    templateUrl: './app-setting.component.html',
    styleUrls: ['./app-setting.component.scss'],
})
export class AppSettingComponent implements OnInit {

    @ViewChild(DxMultiViewComponent, { static: true }) multiView: DxMultiViewComponent;
    @ViewChild(AppEditComponent, { static: true }) form: AppEditComponent;

    appinfo: DataSource;
    public formAppInfo: IAppInfo;
    constructor(private serviceAppInfo: AppInfoService) {
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        this.formAppInfo = <any>{};
    }

    ngOnInit() {
        this.form.mainForm = this;
        this.appinfo = new DataSource({
            load: () => this.serviceAppInfo.GetAppInfo(User.Current.Role.RoleId , false).toPromise()
                .then(_ => {
                    if (!_) {
                        _ = [];
                    }
                    return { data: _ };
                })
        });
    }

    Add() {
        this.form.check = false;
        this.formAppInfo.APP_ID = undefined;
        this.formAppInfo.APP_CODE = undefined;
        this.formAppInfo.APP_NAME = undefined;
        this.formAppInfo.APP_REMARK = undefined;
        this.formAppInfo.APP_ICON = undefined;
        this.form.userImagePath = undefined;
        this.form.formAppInfo.RECORD_STATUS = "A";
        this.multiView.selectedIndex = 1;

    }

    Edit(e) {
        this.form.check = true;
        this.formAppInfo = Object.assign({}, e.data);
        this.multiView.selectedIndex = 1;
        this.form.Load();
    }
    GetStatus(Status: IAppInfo) {
        let data;
        if (Status.RECORD_STATUS === "A") {
            data = "ใช้งาน";
        } else if (Status.RECORD_STATUS === "I") { data = "ไม่ใช้งาน"; }
        return data;
    }

}
