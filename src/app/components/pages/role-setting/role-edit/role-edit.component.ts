import { CommonModule } from '@angular/common';
import { Component, ViewChild, type OnInit, Input, OnDestroy } from '@angular/core';
import { DxDataGridComponent, DxFormComponent } from 'devextreme-angular';
import { IAdmRoleInfoUserRole, IAdmRoleUser, RoleInfoService } from 'src/app/services/adm-role-info.service';
import { RoleSettingComponent } from '../role-setting.component';
import DataSource from 'devextreme/data/data_source';
import { UserRoleService } from 'src/app/services/user-role-info.service';
import { User } from 'src/app/services/user';
import { finalize } from 'rxjs/operators';
import { showConfirmDialog, showDialog } from 'src/app/common/dialog/dialog';
import { IAdmRoleInfoPriv, RoleInfoPrivService } from 'src/app/services/adm-role-info-priv.service';
import { IPersonal, PersonalService } from 'src/app/services/personal.service';
import { FormCommandEventType } from 'src/app/common/common-type';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-role-edit',
    templateUrl: './role-edit.component.html',
    styleUrls: ['./role-edit.component.scss'],
})
export class RoleEditComponent implements OnInit, OnDestroy {

    @ViewChild(DxFormComponent, { static: true }) form: DxFormComponent;
    @ViewChild("grid") grid: DxDataGridComponent;
    @Input() formData: IAdmRoleInfoUserRole;
    @Input() roolRoot = false;
    @Input() readonly = false;
    @Input() mainForm: RoleSettingComponent;
    userRoleSend: IAdmRoleUser = <any>{};
    radioActive: any = [{ id: "A", text: "ใช้งาน" }, { id: "I", text: "ไม่ใช้งาน" }];
    orgLv: any = [{ id: 0, text: "0" }, { id: 1, text: "1" }, { id: 2, text: "2" }, { id: 3, text: "3" },
    { id: 4, text: "4" }, { id: 5, text: "5" }];
    rolePriv = [];
    roleUser = [];
    tempUser = <any>[];
    disabled: boolean;
    persolnalAll: DataSource;
    @Input() appName: string;
    persolnalInRole: DataSource;
    searchConditionToPersonal: any;
    disabledApprov = false;
    disabledCreate = false;
    popupVisible = false;
    roleCode = null;
    private _commandEventSubscription: Subscription
    constructor(
        private service: RoleInfoService,
        private serviceUser: UserRoleService,
        private servicePriv: RoleInfoPrivService,
        private servicepersonal: PersonalService) {
        this.OnUserDeleteButtonClicked = this.OnUserDeleteButtonClicked.bind(this);
        this.searchConditionToPersonal = <any>{};
        this.formData = {};
    }

    ngOnInit() {
        this.userRoleSend.roleInfo = <any>{};
        this.roleCode = User.Current.Role.RoleCode;
        if (this.roleCode != "ROOT") {
            this.readonly = true;
        } else {
            this.roolRoot = true;
        }

        this._commandEventSubscription = this.mainForm.commandEvent.subscribe(c => {
            if (c.command === FormCommandEventType.add) {
                this.formData = {
                    RECORD_STATUS: "A",
                    ROLE_SEQ: 1
                } as any;
                this.disabledApprov = false;
                this.disabled = true;
                this.appName = c.data.appName;
                this.formData.USER_ROLE = [];
                this.LoadPersonalAll();

            } else if (c.command === FormCommandEventType.update) {
                if (c.data.roleId) {
                    const data = c.data;
                    this.service.GetById(data.roleId).subscribe(_ => {
                        this.formData = _;
                        this.disabledApprov = true;
                        this.disabledCreate = false;
                        this.Load(data.roleId, data.appId);
                    });
                    this.appName = data.appName;
                } else if (c.data.data) {
                    const data = c.data.data;
                    for (const key in c.data) {
                        if (c.data[key] === null) {
                            c.data[key] = undefined;
                        }
                    }
                    this.formData = data;
                    this.Load(data.ROLE_ID, data.APP_ID);
                } else {
                    throw new Error("Invalid command");
                }
            }
        });
    }

    ngOnDestroy(): void {
        this._commandEventSubscription.unsubscribe();
    }

    Add(e) {
        if (this.formData.ROLE_ID) {
            this.roleUser = [];
            e.startWait();
            this.service.Create(this.formData.ROLE_ID, this.formData.APP_ID)
                .pipe(finalize(() => e.stopWait()))
                .subscribe(i => {
                    this.Load(this.formData.ROLE_ID, this.formData.APP_ID);
                    this.disabledCreate = true;
                });
        }
    }

    public Load(e, x) {
        this.roleUser = [];
        this.userRoleSend.userRole = [];
        this.formData.USER_ROLE = [];
        this.disabled = true;
        if (e) {
            this.serviceUser.GetId(e, x).subscribe(_ => {
                this.roleUser = _;
                if (_.length > 0) {
                    this.disabledCreate = true;
                } else {
                    this.disabledCreate = false;
                }
            });

            // ดึง User in role
            this.serviceUser.GetPersonalByRoleId(User.Current.Role.RoleId, e, x).subscribe(_ => {
                _.forEach(r => {
                    this.formData.USER_ROLE.push(r);
                });
            });
        }
        this.LoadPersonalAll();
    }

    LoadPersonalAll() {
        // ดึง User ทั้งหมด
        this.persolnalAll = new DataSource({
            paginate: true,
            byKey: () => undefined,
            load: (opt) => this.servicepersonal.admSearchByName(User.Current.Role.RoleId, opt.searchValue, opt.skip, opt.take).toPromise()
                .then(_ => ({ data: _.Data, totalCount: _.TotalCount }))
        });


    }

    Loop(d, f, index) {
        let num = 0;
        for (const i of this.roleUser[d].PERMISSION) {
            if (i.PERMISSION_ID === index) {
                this.roleUser[d].PERMISSION[num].PRIV_FLAG = f;
            }
            num++;
        }
    }

    IsCheckVisible(e, n) {
        return e.data.PERMISSION.some((x: IAdmRoleInfoPriv) => x.PERMISSION_ID === n);
    }

    OnCheck(e, d, i) {
        let flag = "";
        if (e.value === true) {
            flag = "Y";
        } else {
            flag = "N";
        }
        const currentRolePermission = d.data.PERMISSION.filter(_ => _.PERMISSION_ID === i);
        currentRolePermission[0].PRIV_FLAG = flag;
    }

    OnUserRowInserting(e) {
        if (!e.data.USER_ID) {
            e.cancel = true;
            this.grid.instance.deleteRow(0);
        }
    }

    OnUserDeleteButtonClicked(e) {
        if (e.row.data.USER_ROLE_ID) {
            this.tempUser = {
                USER_ROLE_ID: e.row.data.USER_ROLE_ID,
                ROLE_ID: this.formData.ROLE_ID,
                USER_ID: e.row.data.USER_ID,
                DEL_FLAG: 'Y'
            };
            this.userRoleSend.userRole.push(this.tempUser);
        }
        e.event.preventDefault();
        e.component.deleteRow(e.row.rowIndex);
        e.component.instance().repaint();
    }

    OnUserValueChanged(e: any, cellInfo) {
        if (!e.value) {
            this.grid.instance.deleteRow(cellInfo.rowIndex);
            return;
        }

        const personalInfo: IPersonal = e.value;
        // ตรวจสอบการเพิ่ม User ซ้ำ
        for (let i = 0; i < this.formData.USER_ROLE.length; i++) {
            // eslint-disable-next-line eqeqeq
            if (personalInfo.USER_ID == this.formData.USER_ROLE[i].USER_ID) {
                showDialog({
                    type: "error",
                    title: "เกิดข้อผิดพลาด!",
                    message: "มีผู้ใช้นี้แล้ว",
                }).then(() => { });
                cellInfo.setValue("", e.component.instance().option("text"));
                return;
            }
        }

        if (personalInfo.USER_ID) {
            cellInfo.setValue(personalInfo.USER_ID, personalInfo.PERSONAL_FULL_NAME);
            this.grid.instance.cellValue(cellInfo.rowIndex, 'PERSONAL_FULL_NAME', personalInfo.PERSONAL_FULL_NAME);
            this.grid.instance.cellValue(cellInfo.rowIndex, 'POSITION_NAME', personalInfo.POSITION_NAME);
            this.grid.instance.cellValue(cellInfo.rowIndex, 'ORG_NAME', personalInfo.ORG_NAME);
        } else {
            cellInfo.setValue(Math.random(), e.value);
        }

        this.grid.instance.saveEditData().then(_ => {
            const index = cellInfo.text ? cellInfo.rowIndex : this.formData.USER_ROLE.length - 1;
            if (personalInfo.USER_ID) {
                this.formData.USER_ROLE[index].PERSONAL_FULL_NAME = personalInfo.PERSONAL_FULL_NAME;
                this.formData.USER_ROLE[index].POSITION_NAME = personalInfo.POSITION_NAME;
                this.formData.USER_ROLE[index].ORG_NAME = personalInfo.ORG_NAME;
                this.grid.instance.repaintRows([index]);
            }
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

        // ข้อมูลสิทธิ์
        if (this.formData.ROLE_ID) {
            this.userRoleSend.roleInfo.ROLE_ID = this.formData.ROLE_ID;
        }
        this.userRoleSend.roleInfo.APP_ID = this.formData.APP_ID;
        this.userRoleSend.roleInfo.ROLE_SEQ = this.formData.ROLE_SEQ;
        this.userRoleSend.roleInfo.ROLE_CODE = this.formData.ROLE_CODE;
        this.userRoleSend.roleInfo.ROLE_NAME = this.formData.ROLE_NAME;
        this.userRoleSend.roleInfo.ORG_LV = this.formData.ORG_LV;
        this.userRoleSend.roleInfo.RECORD_STATUS = this.formData.RECORD_STATUS;

        // ข้อมูลผู้ใช้
        if (!this.userRoleSend.userRole) {
            this.userRoleSend.userRole = [];
        }
        if (this.formData.USER_ROLE) {
            for (let i = 0; i < this.formData.USER_ROLE.length; i++) {
                if (!this.formData.USER_ROLE[i].USER_ROLE_ID) {
                    this.tempUser = {
                        ROLE_ID: this.formData.ROLE_ID,
                        USER_ID: this.formData.USER_ROLE[i].USER_ID
                    };
                    this.userRoleSend.userRole.push(this.tempUser);
                }
            }
        }

        if (!this.formData.ROLE_ID) {
            e.startWait();
            this.service.InsertRoleInfo(this.userRoleSend)
                .pipe(finalize(() => e.stopWait()))
                .subscribe(_ => {
                    showDialog({
                        type: "info",
                        title: "สำเร็จ!",
                        message: "บันทึกสำเร็จ",
                    }).then(() => {
                        this.disabled = false;
                        this.Back();
                    });
                });
        } else {
            e.startWait();
            this.service.EditRoleInfo(this.formData.ROLE_ID, this.userRoleSend)
                .pipe(finalize(() => e.stopWait()))
                .subscribe(_ => {
                    showDialog({
                        type: "info",
                        title: "สำเร็จ!",
                        message: "แก้ไขเรียบร้อย",
                    }).then(() => {
                        this.Back();
                    });
                });
        }
    }

    IsIconStatus(d) {
        const icon = 'fa ' + d.data.MODULE_ICON;
        return icon
    }

    IsNameStatus(d) {
        let icon;
        return icon = d.data.MODULE_NAME;
    }

    async SavePermission(e) {
        const confirm = await showConfirmDialog({ title: 'ยืนยัน', message: 'คุณต้องการบันทึกข้อมูลนี้หรือไม่' })

        if (!confirm) {
            return;
        }

        const data = [];
        const roleData: any = [];
        this.rolePriv = this.roleUser;
        let j = 0;
        const t = 1;
        for (const o of this.roleUser) {
            for (const i of this.rolePriv[j].PERMISSION) {
                roleData.ROLE_ID = o.ROLE_ID;
                roleData.MODULE_PRIV_ID = i.MODULE_PRIV_ID;
                roleData.PRIV_FLAG = i.PRIV_FLAG;
                roleData.ROLE_PRIV_ID = i.ROLE_PRIV_ID;
                const clone = Object.assign({}, roleData);
                data.push(clone);
            }
            j++;
        }
        e.startWait();
        this.servicePriv.UpdateRolePrive(data)
            .pipe(finalize(() => e.stopWait()))
            .subscribe(_ => {
                showDialog({
                    type: "info",
                    title: "สำเร็จ!",
                    message: "บันทึกสำเร็จ",
                }).then(() => {
                    this.mainForm.Load(this.formData.APP_ID);
                });
            });
    }


    Back() {
        this.mainForm.Load(this.formData.APP_ID);
        this.mainForm.multiView.selectedIndex = 0;
        this.formData = {} as any;
    }

    OnValueCheck(e, n) {
        for (const i of e.data.PERMISSION) {
            if (i.PERMISSION_ID === n) {
                if (i.PRIV_FLAG === 'Y') {
                    return true;
                } else {
                    return false;
                }
            }
        }
    }

}
