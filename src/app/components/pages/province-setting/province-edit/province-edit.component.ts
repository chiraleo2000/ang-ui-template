import { Component, ViewChild, type OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { DxFormComponent } from 'devextreme-angular';
import { ProvinceSettingComponent } from '../province-setting.component';
import { FormCommandEventType } from 'src/app/common/common-type';
import { showDialog } from 'src/app/common/dialog/dialog';
import { Subscription } from 'rxjs';
import { ProvinceService, IProvinceinfo } from 'src/app/services/province.service';
import { finalize } from 'rxjs/operators';
import { IAdmRoleInfo } from 'src/app/services/adm-role-info.service';

@Component({
    selector: 'app-province-edit',
    templateUrl: './province-edit.component.html',
    styleUrls: ['./province-edit.component.scss'],
})
export class ProvinceEditComponent implements OnInit, OnDestroy {

    @Output() initialized = new EventEmitter<ProvinceEditComponent>();
    @ViewChild(DxFormComponent) form: DxFormComponent;
    @Input() mainForm: ProvinceSettingComponent;
    formProvince: IProvinceinfo;
    radioActive: any = [{ id: "A", text: "ใช้งาน" }, { id: "I", text: "ไม่ใช้งาน" }];
    private _commandEventSubscription: Subscription
    constructor(
        private provinceServ: ProvinceService
    ) {
        this.formProvince = {} as any;
    }

    ngOnInit() {
        this._commandEventSubscription = this.mainForm.commandEvent.subscribe(c => {
            if (c.command === FormCommandEventType.add) {
                this.formProvince = {} as any;
            } else if (c.command === FormCommandEventType.update) {
                for (const key in c.data) {
                    if (c.data[key] === null) {
                        c.data[key] = undefined;
                    }
                }
                this.formProvince = c.data;
            }
        });
    }

    ngOnDestroy(): void {
        this._commandEventSubscription.unsubscribe();
    }

    save(e) {

        if (!this.form.instance.validate().isValid) {
            showDialog({
                type: "error",
                title: "เกิดข้อผิดพลาด!",
                message: "กรุณากรอกข้อมูลให้ครบถ้วน",
            });
            return;
        }

        e.startWait();
        if (this.formProvince.PROVINCE_ID) {
            this.provinceServ.update(this.formProvince.PROVINCE_ID, {
                PROVINCE_NAME_ENG: this.formProvince.PROVINCE_NAME_ENG,
                PROVINCE_NAME_THA: this.formProvince.PROVINCE_NAME_THA,
                RECORD_STATUS: this.formProvince.RECORD_STATUS,
            }).pipe(finalize(() => e.stopWait()))
                .subscribe(_ => {
                    this.mainForm.multiView.selectedIndex = 0;
                    this.mainForm.provinceSource.reload();
                    showDialog({
                        type: "info",
                        title: "สำเร็จ!",
                        message: "บันทึกเรียบร้อย",
                    });
                    this.clearForm();
                });
        } else {
            this.provinceServ.create({
                PROVINCE_NAME_ENG: this.formProvince.PROVINCE_NAME_ENG,
                PROVINCE_NAME_THA: this.formProvince.PROVINCE_NAME_THA,
                // REGION_ID: this.formprovince.REGION_ID,
                RECORD_STATUS: this.formProvince.RECORD_STATUS,
            }).pipe(finalize(() => e.stopWait()))
                .subscribe(_ => {
                    this.mainForm.multiView.selectedIndex = 0;
                    showDialog({
                        type: "info",
                        title: "สำเร็จ!",
                        message: "บันทึกเรียบร้อย",
                    });
                    this.mainForm.provinceSource.reload();
                    this.clearForm();
                });
        }
    }

    public clearForm() {
        this.form.instance.resetValues();
    }

    back() {
        this.clearForm();
        this.mainForm.multiView.selectedIndex = 0;
    }

}

export interface RoleEditDisplayConfig {
    appName: string;
    appId?: number;
    roleId?: number;
    data?: IAdmRoleInfo;
}
