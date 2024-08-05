import { showConfirmDialog } from './../../../../common/dialog/dialog';
import { Component, ViewChild, type OnInit, Input } from '@angular/core';
import { DxFormComponent, DxSelectBoxComponent } from 'devextreme-angular';
import { ModuleSettingComponent } from '../module-setting.component';
import { finalize } from 'rxjs/operators';
import { AdmModuleInfoService, IModuleInfo } from 'src/app/services/adm-module-info.service';
import { IPermission, PermissionInfoService } from 'src/app/services/adm-permission-info.service';
import { IAdmModulePriv, ModulePrivService } from 'src/app/services/adm-module-priv.service';
import { showDialog } from 'src/app/common/dialog/dialog';

@Component({
    selector: 'app-module-edit',
    // standalone: true,
    templateUrl: './module-edit.component.html',
    styleUrls: ['./module-edit.component.scss'],
})
export class ModuleEditComponent implements OnInit {
    @ViewChild(DxFormComponent, { static: true }) form: DxFormComponent;
    @ViewChild('select', { static: true }) select: DxSelectBoxComponent;
    @Input() formData: IModuleInfo;
    @Input() appName: string;
    public formDataModule: AdmModule;
    public mainForm: ModuleSettingComponent;
    disabled: boolean;
    disabledApprov = false;
    popupVisible = false;
    moduleIdform: number;
    level: any = [{ id: 1, text: "ระดับ 1" }, { id: 2, text: "ระดับ 2" }, { id: 3, text: "ระดับ 3" }];
    radioActive: any = [{ id: "A", text: "ใช้งาน" }, { id: "I", text: "ไม่ใช้งาน" }];
    radioMainFlag: any = [{ id: "Y", text: "ใช่" }, { id: "N", text: "ไม่ใช่" }];
    windowFlag: any = [{ id: "Y", text: "ใช่" }, { id: "N", text: "ไม่ใช่" }];
    moduleInfo: IModuleInfo[] = [];
    permission: IPermission[] = [];
    modulePriv = [];
    moduleId: number;
    permissionValue = 0;
    constructor(
        private service: AdmModuleInfoService,
        private servicePermission: PermissionInfoService,
        private serviceAdmModulePriv: ModulePrivService) {
        this.formData = {} as any;
        this.formDataModule = {} as any;

    }

    // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
    ngOnInit() {

    }

    LoadModule() {
        if (this.mainForm.formData.APP_ID) {
            this.service.GetMuduleInfo().subscribe(_ => {
                if (_) {

                    _.push({
                        APP_ID: this.mainForm.formData.APP_ID,
                        MODULE_ID: 0,
                        MODULE_SEQ: '',
                        MODULE_CODE: '',
                        MODULE_NAME: 'ไม่เลือกข้อมูล',
                        MODULE_REMARK: '',
                        MODULE_PARENT_ID: 0,
                        MODULE_LEVEL: 0,
                        MODULE_MAIN_FLAG: '',
                        MODULE_URL: '',
                        MODULE_ICON: '',
                        MODULE_NEW_WINDOW_FLAG: '',
                        RECORD_STATUS: '',
                    });
                    this.moduleInfo = _.sort(_ => _.MODULE_ID);

                } else {
                    this.moduleInfo = [{
                        APP_ID: this.mainForm.formData.APP_ID,
                        MODULE_ID: 0,
                        MODULE_SEQ: '',
                        MODULE_CODE: '',
                        MODULE_NAME: 'ไม่เลือกข้อมูล',
                        MODULE_REMARK: '',
                        MODULE_PARENT_ID: 0,
                        MODULE_LEVEL: 0,
                        MODULE_MAIN_FLAG: '',
                        MODULE_URL: '',
                        MODULE_ICON: '',
                        MODULE_NEW_WINDOW_FLAG: '',
                        RECORD_STATUS: '',
                    }];
                }
            });
            this.formData.MODULE_PARENT_ID = 0;
        }
    }

    public Load(e) {
        this.moduleIdform = e;
        this.disabled = true;
        this.modulePriv = [];


        this.servicePermission.Get().subscribe(_ => this.permission = _);
        if (e) {
            this.serviceAdmModulePriv.GetId(e).subscribe(_ => {
                this.modulePriv = [];
                this.modulePriv = _;
            });
        }
    }

    async Delete(e, d) {

        // eslint-disable-next-line prefer-const
        let confirm = await showConfirmDialog({ title: 'ยืนยัน', message: 'คุณต้องการลบข้อมูลนี้หรือไม่' })
        if (!confirm) {
            return;
        }

        // e.startWait();
        this.serviceAdmModulePriv.DelModulePriv(d.data.MODULE_PRIV_ID)
            // .pipe(finalize(() => e.stopWait()))
            .subscribe(_ => {
                showDialog({
                    type: "info",
                    title: "สำเร็จ!",
                    message: "ลบข้อมูลเรียบร้อย",
                }).then(() => {
                    this.ClearForm();
                    this.Load(this.formData.MODULE_ID);
                    this.popupVisible = false;
                });
            });

    }

    Edit(e) {
        this.moduleId = e.data.MODULE_PRIV_ID;
        this.popupVisible = true;
    }

    Appove(e) {
        // eslint-disable-next-line no-undef-init
        let check = undefined;
        if (this.formData.MODULE_ID) {
            if (!this.moduleId) {
                this.formDataModule.MODULE_ID = this.formData.MODULE_ID;
                if (this.modulePriv) {
                    check = this.modulePriv.some((x: IAdmModulePriv) => x.PERMISSION_ID === this.formDataModule.PERMISSION_ID);
                }

                if (!check) {
                    // e.startWait();
                    this.serviceAdmModulePriv.InsertModulePriv(this.formDataModule)
                        .subscribe(_ => {
                            this.popupVisible = false;
                            showDialog({
                                type: "info",
                                title: "สำเร็จ!",
                                message: "เพิ่มเรียบร้อย",
                            }).then(() => {
                                this.moduleId = undefined;
                                this.Load(this.formData.MODULE_ID);
                            });
                        });
                } else {
                    this.moduleId = undefined;
                    showDialog({
                        type: "warning",
                        title: "เกิดข้อผิดพลาด!",
                        message: "เพิ่มรายการซ้ำ",
                    }).then(() => { });
                }

            } else {
                this.formDataModule.MODULE_PRIV_ID = this.moduleId;
                this.formDataModule.MODULE_ID = this.formData.MODULE_ID;

                if (this.modulePriv) {
                    check = this.modulePriv.some((x: IAdmModulePriv) => x.PERMISSION_ID === this.formDataModule.PERMISSION_ID);
                }
                if (!check) {
                    // e.startWait();
                    this.serviceAdmModulePriv.EditModulePriv(this.moduleId, this.formDataModule)
                        // .pipe(finalize(() => e.stopWait()))
                        .subscribe(_ => {
                            showDialog({
                                type: "info",
                                title: "สำเร็จ!",
                                message: "แก้ไขเรียบร้อย",
                            }).then(() => {
                                this.moduleId = undefined;
                                this.Load(this.formData.MODULE_ID);
                                this.popupVisible = false;
                                this.mainForm.multiView.selectedIndex = 0;
                            });
                        });
                } else {
                    this.moduleId = undefined;
                    showDialog({
                        type: "warning",
                        title: "เกิดข้อผิดพลาด!",
                        message: "เพิ่มรายการซ้ำ",
                    }).then(() => { });
                }
            }

        } else {
            showDialog({
                type: "warning",
                title: "เกิดข้อผิดพลาด!",
                message: "กรุณาเลือกข้อมูล",
            }).then(() => { });
        }
    }

    NoAppove() {
        this.popupVisible = false;
    }

    OnSelect(e) {
        const data = this.select.instance.option("selectedItem");
        this.formDataModule.PERMISSION_ID = data.PERMISSION_ID;
    }

    public ClearForm() {
        this.disabled = false;
        this.form.instance.resetValues();
    }

    OnSelectParent(e) {
        this.formData.MODULE_PARENT_ID = e.value;
    }

    Add() {
        this.popupVisible = true;
    }

    Back() {
        this.ClearForm();
        this.mainForm.moduleInfo.reload();
        this.form.instance.resetValues();
        this.mainForm.multiView.selectedIndex = 0;
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

        this.formData.APP_ID = this.mainForm.formData.APP_ID;
        if (!this.formData.MODULE_ID) {
            if (this.formData.MODULE_LEVEL &&
                this.formData.MODULE_NEW_WINDOW_FLAG) {
                const data = <any>{};
                data.APP_ID = this.formData.APP_ID;
                data.MODULE_SEQ = this.formData.MODULE_SEQ;
                data.MODULE_CODE = this.formData.MODULE_CODE;
                data.MODULE_NAME = this.formData.MODULE_NAME;
                data.MODULE_REMARK = this.formData.MODULE_REMARK;
                data.MODULE_PARENT_ID = this.formData.MODULE_PARENT_ID;
                data.MODULE_LEVEL = this.formData.MODULE_LEVEL;
                data.MODULE_MAIN_FLAG = this.formData.MODULE_MAIN_FLAG;
                data.MODULE_URL = this.formData.MODULE_URL;
                data.MODULE_ICON = this.formData.MODULE_ICON;
                data.MODULE_NEW_WINDOW_FLAG = this.formData.MODULE_NEW_WINDOW_FLAG;
                data.RECORD_STATUS = this.formData.RECORD_STATUS;
                // e.startWait();
                this.service.InsertModuleInfo(data)
                    // .pipe(finalize(() => e.stopWait()))
                    .subscribe(_ => {
                        showDialog({
                            type: "info",
                            title: "สำเร็จ!",
                            message: "บันทึกเรียบร้อย",
                        }).then(() => {
                            this.mainForm.LoadApp();
                            this.mainForm.multiView.selectedIndex = 0;
                        });
                    });
            } else {
                showDialog({
                    type: "error",
                    title: "เกิดข้อผิดพลาด!",
                    message: "กรุณากรอกข้อมูลให้ครบถ้วน",
                }).then(() => { });
            }
        } else {
            const data = <any>{};
            data.APP_ID = this.formData.APP_ID;
            data.MODULE_SEQ = this.formData.MODULE_SEQ;
            data.MODULE_CODE = this.formData.MODULE_CODE;
            data.MODULE_NAME = this.formData.MODULE_NAME;
            data.MODULE_REMARK = this.formData.MODULE_REMARK;
            data.MODULE_PARENT_ID = this.formData.MODULE_PARENT_ID;
            data.MODULE_LEVEL = this.formData.MODULE_LEVEL;
            data.MODULE_MAIN_FLAG = this.formData.MODULE_MAIN_FLAG;
            data.MODULE_URL = this.formData.MODULE_URL;
            data.MODULE_ICON = this.formData.MODULE_ICON;
            data.MODULE_NEW_WINDOW_FLAG = this.formData.MODULE_NEW_WINDOW_FLAG;
            data.RECORD_STATUS = this.formData.RECORD_STATUS;
            e.startWait();
            this.service.EditModuleInfo(this.formData.MODULE_ID, data)
                .pipe(finalize(() => e.stopWait()))
                .subscribe(_ => {
                    showDialog({
                        type: "info",
                        title: "สำเร็จ!",
                        message: "บันทึกเรียบร้อย",
                    }).then(() => {
                        this.mainForm.LoadApp();
                        this.mainForm.multiView.selectedIndex = 0;
                    });
                });
        }

    }
}


interface AdmModule {
    MODULE_ID: number;
    PERMISSION_ID: number;
    MODULE_PRIV_ID: number;
}
