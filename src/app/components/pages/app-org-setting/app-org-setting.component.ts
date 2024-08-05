import { CommonModule } from '@angular/common';
import { Component, ViewChild, type OnInit } from '@angular/core';
import { DxMultiViewComponent } from 'devextreme-angular';
import { AppOrgEditComponent } from './app-org-edit/app-org-edit.component';
import DataSource from 'devextreme/data/data_source';
import { AdmAppOrgInfoService, IAppOrgInfo } from 'src/app/services/adm-app-org-info.service';
import { showConfirmDialog, showDialog } from 'src/app/common/dialog/dialog';
import { finalize } from 'rxjs/operators';
import { User } from 'src/app/services/user';

@Component({
    selector: 'app-app-org-setting',
    templateUrl: './app-org-setting.component.html',
    styleUrls: ['./app-org-setting.component.scss'],
})
export class AppOrgSettingComponent implements OnInit {

    @ViewChild(DxMultiViewComponent, { static: true }) multiView: DxMultiViewComponent;
    @ViewChild(AppOrgEditComponent, { static: true }) form: AppOrgEditComponent;

    appOrgInfo: DataSource;
    public formAppOrgInfo: IAppOrgInfo;
    constructor(private serviceApporginfo: AdmAppOrgInfoService) {
        this.formAppOrgInfo = {} as any;
    }

    ngOnInit() {
        this.form.mainForm = this;
        this.appOrgInfo = new DataSource({
            load: () => this.serviceApporginfo.GetAppOrgInfo(User.Current.Role.RoleId, false).toPromise()
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
        this.formAppOrgInfo.APP_ID = undefined;
        this.formAppOrgInfo.APP_ORG_ID = undefined;
        this.formAppOrgInfo.ORG_ROOT_ID = undefined;
        this.formAppOrgInfo.DEL_FLAG = undefined;
        this.formAppOrgInfo.ORG_ROOT_ID = undefined;
        this.formAppOrgInfo.RECORD_STATUS = "A";
        this.form.Load();
        this.multiView.selectedIndex = 1;

    }

    Edit(e) {
        this.form.check = true;
        this.formAppOrgInfo = Object.assign({}, e.data);

        this.multiView.selectedIndex = 1;
        this.form.Load();
    }


    async Delete(e, d) {

        const confirm = await  showConfirmDialog({ title: 'ยืนยัน', message: 'คุณต้องการลบข้อมูลนี้หรือไม่' })
        if (!confirm) {
            return;
        }

        e.startWait();
        this.serviceApporginfo.DelAppOrgInfo(d.data.APP_ORG_ID)
            .pipe(finalize(() => e.stopWait()))
            .subscribe(_ => {
                showDialog({
                    type: "info",
                    title: "สำเร็จ!",
                    message: "ลบข้อมูลเรียบร้อย",
                }).then(() => {
                    this.appOrgInfo.reload();
                });
            });
    }

    GetStatus(Status: IAppOrgInfo) {
        let data;
        if (Status.RECORD_STATUS === "A") {
            data = "ใช้งาน";
        } else if (Status.RECORD_STATUS === "I") { data = "ไม่ใช้งาน"; }
        return data;
    }

}
