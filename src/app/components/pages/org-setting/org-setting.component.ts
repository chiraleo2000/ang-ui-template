import { Component, ViewChild, type OnInit } from '@angular/core';
import { DxMultiViewComponent } from 'devextreme-angular';
import { OrgEditComponent } from './org-edit/org-edit.component';
import { IOrganizeInfo, OrganizeInfoService } from 'src/app/services/organize-info.service';
import { User } from 'src/app/services/user';
import { showConfirmDialog, showDialog } from 'src/app/common/dialog/dialog';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'app-org-setting',
    templateUrl: './org-setting.component.html',
    styleUrls: ['./org-setting.component.scss'],
})
export class OrgSettingComponent implements OnInit {

    @ViewChild(OrgEditComponent, { static: true }) form: OrgEditComponent;
    @ViewChild(DxMultiViewComponent, { static: true }) multiView: DxMultiViewComponent;
    organize: IOrganizeInfo[] = {} as any;
    _isLoading = false;
    public formOrganize: IOrganizeInfo;

    constructor(private serviceOrganize: OrganizeInfoService) {
        this.formOrganize = {} as any;
    }

    ngOnInit() {
        this.form.mainForm = this;
        this.Load();
    }

    Load() {
        this._isLoading = true;
        this.serviceOrganize.gets({offset: 0, length: 1000})
            .subscribe(_ => {
                this.organize = _.Data;
                this._isLoading = false;
            });
    }

    Add(d) {
        this.form.OnSelectorg(d);
        this.form.LoadDefualt();
        this.multiView.selectedIndex = 1;
    }

    Edit(e) {
        this.formOrganize = Object.assign({}, e.data);
        this.form.OnSelectorg(e);
        this.form.Load(e.data.ORGANIZE_ID);
        this.multiView.selectedIndex = 1;

    }

    FormatData(data): FormData {
        const formData = new FormData();
        for (const key in data) {
            // eslint-disable-next-line eqeqeq
            if (data[key] === "" || data[key] === '' || data[key] == undefined) {
                formData.append(key, "");
            } else if (data[key] == null) {
                formData.append(key, null);
            }
            else if (data[key]) {
                formData.append(key, data[key]);
            }
        }

        return formData;
    }

    async Delete(e, d) {
        const confirm = await showConfirmDialog({ title: 'ยืนยัน', message: 'คุณต้องการลบข้อมูลนี้หรือไม่' })

        if (!confirm) {
            return;
        }

        d.data.DEL_FLAG = 'Y';
        e.startWait();
        this.serviceOrganize.UpdateOrganizeInfo(d.data.ORGANIZE_ID, this.FormatData(d.data))
            .pipe(finalize(() => e.stopWait()))
            .subscribe(_ => {
                showDialog({
                    type: "info",
                    title: "สำเร็จ!",
                    message: "ลบข้อมูลเรียบร้อย",
                }).then(() => {
                    this.Load();
                });
            });
    }

    GetStatus(Status: IOrganizeInfo) {
        let data;
        if (Status.RECORD_STATUS === "A") {
            data = "ใช้งาน";
        } else if (Status.RECORD_STATUS === "I") { data = "ไม่ใช้งาน"; }
        return data;
    }

}
