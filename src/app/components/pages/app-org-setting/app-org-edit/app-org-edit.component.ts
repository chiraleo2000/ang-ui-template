import { CommonModule } from '@angular/common';
import { Component, ViewChild, type OnInit, Input } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { showDialog } from 'src/app/common/dialog/dialog';
import { AppInfoService, IAppInfo } from 'src/app/services/adm-app-info.service';
import { OrganizeInfoService } from 'src/app/services/organize-info.service';
import { User } from 'src/app/services/user';
import { AppOrgSettingComponent } from '../app-org-setting.component';
import { DxFormComponent, DxSelectBoxComponent } from 'devextreme-angular';
import { AdmAppOrgInfoService, IViewAppOrgInfo } from 'src/app/services/adm-app-org-info.service';
import DataSource from 'devextreme/data/data_source';

@Component({
    selector: 'app-app-org-edit',
    templateUrl: './app-org-edit.component.html',
    styleUrls: ['./app-org-edit.component.scss'],
})
export class AppOrgEditComponent implements OnInit {

    @ViewChild(DxFormComponent, { static: true }) form: DxFormComponent;
    @ViewChild('select', { static: false }) select: DxSelectBoxComponent;
    @Input() formAppOrgInfo: IViewAppOrgInfo;
    public mainForm: AppOrgSettingComponent;
    // eslint-disable-next-line @typescript-eslint/member-ordering
    @Input() check: boolean;
    id: number;
    org: DataSource;
    validateLogisticservice = "myValidationGroup";
    appInfo: IAppInfo[];
    radioActive: any = [{ id: "A", text: "ใช้งาน" }, { id: "I", text: "ไม่ใช้งาน" }];
    constructor(private ServiceAppOrgInfo: AdmAppOrgInfoService,
        private serviceAppInfo: AppInfoService,
        private serviceOrg: OrganizeInfoService) {
        this.formAppOrgInfo = {} as any;

    }

    ngOnInit() {

        this.org = new DataSource({
            pageSize: 10,
            byKey: (_) => undefined,
            load: (opt) => {
                if (opt.filter) {
                    return;
                }

                if (!opt.searchValue) {
                    opt.searchValue = "";
                }
                return this.serviceOrg.SearchOrganize({
                    // _custom: "(ORGANIZE_CODE_LEV2 IS NULL)",
                    ORGANIZE_NAME_THA: opt.searchValue
                }, opt.skip, opt.take).toPromise()
                    .then(_ => ({ data: _.Data, totalCount: _.TotalCount }));
            }
        });

        this.serviceAppInfo.GetAppInfo(User.Current.Role.RoleId).subscribe(_ => this.appInfo = _);
    }

    public Load() {

        this.formAppOrgInfo = Object.assign({}, this.mainForm.formAppOrgInfo);
        setTimeout(() => {
            if (this.formAppOrgInfo.ORG_ROOT_ID) {
                this.org.items().push({
                    ORGANIZE_NAME_THA: this.formAppOrgInfo.ORGANIZE_NAME_THA,
                    ORGANIZE_ROOT_ID: this.formAppOrgInfo.ORG_ROOT_ID
                });
            }
            this.form.instance.repaint();
        });

    }

    Save(e) {

        if (!this.form.instance.validate().isValid) {
            showDialog({
                type: "error",
                title: "เกิดข้อผิดพลาด!",
                message: "กรุณากรอกข้อมูลให้ครบถ้วน",
            }).then(() => { });
            return;
        }

        if (this.check) {
            this.id = this.formAppOrgInfo.APP_ORG_ID;
            e.startWait();
            this.ServiceAppOrgInfo.PutAppOrgInfo(this.id, {
                APP_ID: this.formAppOrgInfo.APP_ID,
                ORG_ROOT_ID: this.formAppOrgInfo.ORG_ROOT_ID,
                RECORD_STATUS: this.formAppOrgInfo.RECORD_STATUS,
            })
                .pipe(finalize(() => e.stopWait()))
                .subscribe(_ => {
                    showDialog({
                        type: "info",
                        title: "สำเร็จ!",
                        message: "บันทึกเรียบร้อย",
                    }).then(() => {
                        this.mainForm.multiView.selectedIndex = 0;
                        this.mainForm.appOrgInfo.reload();
                    });
                });
        } else {
            e.startWait();
            this.ServiceAppOrgInfo.PostAppOrgInfo({
                APP_ID: this.formAppOrgInfo.APP_ID,
                ORG_ROOT_ID: this.formAppOrgInfo.ORG_ROOT_ID,
                RECORD_STATUS: this.formAppOrgInfo.RECORD_STATUS,
            })
                .pipe(finalize(() => e.stopWait()))
                .subscribe(_ => {
                    showDialog({
                        type: "info",
                        title: "สำเร็จ!",
                        message: "บันทึกเรียบร้อย",
                    }).then(() => {
                        this.mainForm.multiView.selectedIndex = 0;
                        this.mainForm.appOrgInfo.reload();
                    });
                });
        }

        this.ClearForm();
    }

    public ClearForm() {
        this.form.instance.resetValues();
    }

    Back() {
        this.ClearForm();
        this.mainForm.multiView.selectedIndex = 0;
    }
}
