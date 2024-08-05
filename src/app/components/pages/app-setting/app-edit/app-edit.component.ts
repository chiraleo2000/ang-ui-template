import { CommonModule } from '@angular/common';
import { Component, ViewChild, type OnInit, Input } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { finalize } from 'rxjs/operators';
import { AppInfoService, IAppInfo } from 'src/app/services/adm-app-info.service';
import { AppSettingComponent } from '../app-setting.component';
import { showDialog } from 'src/app/common/dialog/dialog';

@Component({
    selector: 'app-app-edit',
    templateUrl: './app-edit.component.html',
    styleUrls: ['./app-edit.component.scss'],
})
export class AppEditComponent implements OnInit {

    @ViewChild(DxFormComponent, { static: true }) form: DxFormComponent;
    @Input() formAppInfo: IAppInfo;
    public mainForm: AppSettingComponent;
    @Input() check: boolean;
    id: number;
    imageFile: File;
    userImagePath: string | ArrayBuffer;
    radioActive: any = [{ id: "A", text: "ใช้งาน" }, { id: "I", text: "ไม่ใช้งาน" }];
    constructor(private serviceAppInfo: AppInfoService) {
        this.formAppInfo = <any>{};
    }

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit() {

    }

    public Load() {


        if (this.check) {
            this.formAppInfo = Object.assign({}, this.mainForm.formAppInfo);
        }
    }



    FormatData(): FormData {

        const formData = new FormData();

        this.formAppInfo.DEL_FLAG = undefined;
        this.formAppInfo.UPDATE_DATE = undefined;
        this.formAppInfo.CREATE_USER_ID = undefined;
        this.formAppInfo.UPDATE_USER_ID = undefined;
        this.formAppInfo.CREATE_DATE = undefined;

        if (!this.check) {
            this.formAppInfo.APP_ID = undefined;
        }

        for (const key in this.formAppInfo) {
            if (this.formAppInfo[key] === "" || this.formAppInfo[key] === '') {
                formData.append(key, "");
            } else if (this.formAppInfo[key] !== null && this.formAppInfo[key] !== undefined) {
                formData.append(key, this.formAppInfo[key]);
            }
        }

        if (this.imageFile) {
            formData.append("UPLOAD_IMAGE", this.imageFile);
        }

        return formData;
    }

    OnImageAdd(uploadTag) {
        const files: FileList = uploadTag.files;
        let fileReader: FileReader;
        if (files.length > 0) {
            this.imageFile = files.item(0);
            fileReader = new FileReader();
            fileReader.readAsDataURL(this.imageFile);
            fileReader.onloadend = () => this.userImagePath = fileReader.result;
        }
    }

    OpenFileDialog(e, uploadTag) {
        e.event.stopPropagation();
        uploadTag.click();
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
            this.id = this.formAppInfo.APP_ID;
            e.startWait();
            this.serviceAppInfo.PutAppInfo(this.id, this.FormatData())
                .pipe(finalize(() => e.stopWait()))
                .subscribe(_ => {
                    showDialog({
                        type: "info",
                        title: "สำเร็จ!",
                        message: "บันทึกเรียบร้อย",
                    }).then(() => {
                        this.mainForm.multiView.selectedIndex = 0;
                        this.mainForm.appinfo.reload();
                    });
                });
        } else {
            e.startWait();
            this.serviceAppInfo.PostAppInfo(this.FormatData())
                .pipe(finalize(() => e.stopWait()))
                .subscribe(_ => {
                    showDialog({
                        type: "info",
                        title: "สำเร็จ!",
                        message: "บันทึกเรียบร้อย",
                    }).then(() => {
                        this.mainForm.multiView.selectedIndex = 0;
                        this.mainForm.appinfo.reload();
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
