import { IPostcodeInfo, PostcodeService } from './../../../../services/postcode.service';
import { CommonModule } from '@angular/common';
import { Component, ViewChild, type OnInit, Input } from '@angular/core';
import { User } from 'src/app/services/user';
import DataSource from 'devextreme/data/data_source';
import { PersonalService } from 'src/app/services/personal.service';
import { IOrganizeInfo, IOrganizeInfoSend, OrganizeInfoService } from 'src/app/services/organize-info.service';
import { DxFormComponent, DxSelectBoxComponent } from 'devextreme-angular';
import { IProvinceinfo, ProvinceService } from 'src/app/services/province.service';
import { DistrictService, IDistrictInfo } from 'src/app/services/district.service';
import { ISubDistrictInfo, SubDistrictService } from 'src/app/services/sub-district.service';
import { finalize } from 'rxjs/operators';
import { showDialog } from 'src/app/common/dialog/dialog';
import { OrgSettingComponent } from '../org-setting.component';

@Component({
    selector: 'app-org-edit',
    templateUrl: './org-edit.component.html',
    styleUrls: ['./org-edit.component.scss'],
})
export class OrgEditComponent implements OnInit {

    @ViewChild(DxFormComponent, { static: true }) form: DxFormComponent;
    @ViewChild('select') select: DxSelectBoxComponent;
    @Input() formOrganize: IOrganizeInfo;
    formOrganizeSend: IOrganizeInfoSend;
    public mainForm: OrgSettingComponent;
    province: IProvinceinfo[];
    district: IDistrictInfo[];
    subdistrict: ISubDistrictInfo[];
    postcode: IPostcodeInfo[];
    organizeAll: DataSource;
    organizeLv1: IOrganizeInfo[] = <any>[];
    organizeLv2: IOrganizeInfo[] = <any>[];
    organizeLv3: IOrganizeInfo[] = <any>[];
    organizeLv4: IOrganizeInfo[] = <any>[];
    organizeLv5: IOrganizeInfo[] = <any>[];
    manager: DataSource;
    manager2: DataSource;
    imageFile: File;
    userImagePath: string | ArrayBuffer;
    isView = false;
    disableDistrict = true;
    disableSubDistrict = true;
    disablepostcode = true;
    radioActive: any = [{ id: "A", text: "ใช้งาน" }, { id: "I", text: "ไม่ใช้งาน" }];
    orgType: any = [{ id: 1, text: "ส่วนกลาง" }, { id: 2, text: "ภูมิภาค" }];
    orgLv: any = [{ id: 0, text: "0" }, { id: 1, text: "1" }, { id: 2, text: "2" }, { id: 3, text: "3" },
    { id: 4, text: "4" }];

    constructor(private ServiceOrganize: OrganizeInfoService,
        private serviceProvince: ProvinceService,
        private serviceDistrict: DistrictService,
        private serviceSubDistrict: SubDistrictService,
        private servicepostcode: PostcodeService,
        private servicePersonal: PersonalService) {
        this.formOrganize = {} as any;
        this.formOrganizeSend = {} as any
    }

    ngOnInit() {
        this.LoadDatasource();
        this.LoadDefualt();
    }

    LoadDefualt() {
        this.formOrganize.RECORD_STATUS = "A";
        this.formOrganize.ORGANIZE_SEQ = 9999;
    }

    LoadDatasource() {
        this.serviceProvince.getProvince().subscribe(_ => this.province = _);
        this.ServiceOrganize.gets({offset: 0, length: 1000}).subscribe(_ => {
            this.organizeLv1 = _.Data;
            this.organizeLv2 = _.Data;
            this.organizeLv3 = _.Data;
            this.organizeLv4 = _.Data;
            this.organizeLv5 = _.Data;
        });

        this.manager = new DataSource({
            pageSize: 10,
            byKey: (_) => undefined,
            load: (opt) => {
                if (!opt.searchValue) {
                    opt.searchValue = "";
                }
                return this.servicePersonal.gets({
                    personalFullName: opt.searchValue,
                    length: opt.take,
                    offset: opt.skip,
                    requireTotalCount: opt.requireTotalCount
                }).toPromise().then(_ => ({ data: _.Data, totalCount: _.TotalCount }))
            }
        });

        this.manager2 = new DataSource({
            pageSize: 10,
            byKey: (_) => undefined,
            load: (opt) => {
                if (!opt.searchValue) {
                    opt.searchValue = "";
                }
                return this.servicePersonal.gets({
                    personalFullName: opt.searchValue,
                    length: opt.take,
                    offset: opt.skip,
                    requireTotalCount: opt.requireTotalCount
                }).toPromise().then(_ => ({ data: _.Data, totalCount: _.TotalCount }))
            }
        });

        this.organizeAll = new DataSource({
            pageSize: 10,
            byKey: (_) => undefined,
            load: (opt) => {
                if (!opt.searchValue) {
                    opt.searchValue = "";
                }


                return this.ServiceOrganize.gets({
                    organizeName: opt.searchValue,
                    length: opt.take,
                    offset: opt.skip,
                    requireTotalCount: opt.requireTotalCount
                })
                    .toPromise()
                    .then(_ => ({ data: _.Data, totalCount: _.TotalCount }));
            }
        });
    }

    Load(e) {
        if (e) {
            console.log(e);
            this.mainForm._isLoading = true;
            // this.organizeAll.reload();
            this.ServiceOrganize.GetByOrganizeId(e).subscribe(_ => {
                if (_.ORGANIZE_ID) {
                    if (_?.ORGANIZE_ADDRESS_PROVINCE) {
                        this.disableDistrict = false;
                        // eslint-disable-next-line no-shadow
                        this.serviceProvince.getDistrictofProvince(_.ORGANIZE_ADDRESS_PROVINCE).subscribe(_ => this.district = _);
                    }

                    if (_?.ORGANIZE_ADDRESS_DISRICT) {
                        this.disableSubDistrict = false;
                        // eslint-disable-next-line no-shadow
                        this.serviceDistrict.GetSubDistrictOfDistrict(_.ORGANIZE_ADDRESS_DISRICT).subscribe(_ => this.subdistrict = _);
                    }

                    if (_?.ORGANIZE_ADDRESS_SUB_DISTRICT) {
                        this.disablepostcode = false;
                        // eslint-disable-next-line no-shadow
                        this.serviceSubDistrict.GetPostCode(_.ORGANIZE_ADDRESS_SUB_DISTRICT).subscribe(_ => this.postcode = _);
                    }

                    this.formOrganize = _;
                    this.formOrganize.ORGANIZE_LEVEL_ID = _.ORGANIZE_LEVEL;
                    if (_.MANAGER_ID) {
                        this.manager.items().push({
                            PERSONAL_ID: _.MANAGER_ID,
                            PERSONAL_FULL_NAME: _.MANAGER_FULL_NAME
                        });
                    }

                    if (_.MANAGER2_ID) {
                        this.manager2.items().push({
                            PERSONAL_ID: _.MANAGER2_ID,
                            PERSONAL_FULL_NAME: _.MANAGER2_FULL_NAME
                        });
                    }

                    this.form.instance.repaint();

                    // if (this.formOrganize.ORGANIZE_LOGO_PATH) {
                    //     this.userImagePath = environment.config.baseConfig.resourceBpm + this.formOrganize.ORGANIZE_LOGO_PATH;
                    // }

                    this.mainForm._isLoading = false;
                }
            });
        }
    }

    FormatData(): FormData {
        const formData = new FormData();
        for (const key in this.formOrganizeSend) {
            // eslint-disable-next-line eqeqeq
            if (this.formOrganizeSend[key] === "" || this.formOrganizeSend[key] === '' || this.formOrganizeSend[key] == undefined) {
                formData.append(key, "");
            } else if (this.formOrganizeSend[key] == null) {
                formData.append(key, null);
            }
            else if (this.formOrganizeSend[key]) {
                formData.append(key, this.formOrganizeSend[key]);
            }
        }

        if (this.imageFile) {
            formData.append("UPLOAD_LOGO", this.imageFile);
        }
        return formData;
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

        this.InputData();

        if (!this.formOrganize.ORGANIZE_ID) {
            e.startWait();
            this.ServiceOrganize.InsertOrganizeInfo(this.FormatData())
                .pipe(finalize(() => e.stopWait()))
                .subscribe(_ => {
                    this.Back();
                    showDialog({
                        type: "info",
                        title: "สำเร็จ!",
                        message: "บันทึกเรียบร้อย",
                    }).then(() => { });
                });
        } else {
            e.startWait();
            const organizeId = this.formOrganize.ORGANIZE_ID;
            this.ServiceOrganize.UpdateOrganizeInfo(organizeId, this.FormatData())
                .pipe(finalize(() => e.stopWait()))
                .subscribe(_ => {
                    this.Back();
                    showDialog({
                        type: "info",
                        title: "สำเร็จ!",
                        message: "บันทึกเรียบร้อย",
                    }).then(() => { });

                    // เรียกเพื่อเอาข้อมูลคน เพิ่อใช้ในการ อัพเดท logo image
                    // this.ServiceOrganize.GetByOrganizeId(organizeId)
                    //     .subscribe(_ => {
                    //         SidebarComponent.MainSidebar.SetLogoImage(_.ORGANIZE_LOGO_PATH);
                    //     });
                });
        }
    }

    InputData() {
        // Input type string
        this.formOrganizeSend.ORGANIZE_ARIA_CODE = this.formOrganize.ORGANIZE_ARIA_CODE;
        this.formOrganizeSend.ORGANIZE_NAME_DETAIL = this.formOrganize.ORGANIZE_NAME_DETAIL;
        this.formOrganizeSend.ORGANIZE_NAME_THA = this.formOrganize.ORGANIZE_NAME_THA;
        this.formOrganizeSend.ORGANIZE_NAME_ENG = this.formOrganize.ORGANIZE_NAME_ENG;
        this.formOrganizeSend.ORGANIZE_ABBR_THA = this.formOrganize.ORGANIZE_ABBR_THA;
        this.formOrganizeSend.ORGANIZE_ABBR_ENG = this.formOrganize.ORGANIZE_ABBR_ENG;
        this.formOrganizeSend.ORGANIZE_TELEPHONE = this.formOrganize.ORGANIZE_TELEPHONE;
        this.formOrganizeSend.ORGANIZE_FAX = this.formOrganize.ORGANIZE_FAX;
        this.formOrganizeSend.ORGANIZE_CONTACT = this.formOrganize.ORGANIZE_CONTACT;
        this.formOrganizeSend.ORGANIZE_EMAIL = this.formOrganize.ORGANIZE_EMAIL;
        this.formOrganizeSend.ORGANIZE_ADDRESS_NO = this.formOrganize.ORGANIZE_ADDRESS_NO;
        this.formOrganizeSend.ORGANIZE_ADDRESS_MOO = this.formOrganize.ORGANIZE_ADDRESS_MOO;
        this.formOrganizeSend.ORGANIZE_ADDRESS_BUILDING = this.formOrganize.ORGANIZE_ADDRESS_BUILDING;
        this.formOrganizeSend.ORGANIZE_ADDRESS_SOI = this.formOrganize.ORGANIZE_ADDRESS_SOI;
        this.formOrganizeSend.ORGANIZE_ADDRESS_STREET = this.formOrganize.ORGANIZE_ADDRESS_STREET;
        this.formOrganizeSend.ORGANIZE_URL_INTERNET = this.formOrganize.ORGANIZE_URL_INTERNET;
        this.formOrganizeSend.ORGANIZE_URL_INTRANET = this.formOrganize.ORGANIZE_URL_INTRANET;
        this.formOrganizeSend.ORGANIZE_URL_DM = this.formOrganize.ORGANIZE_URL_DM;
        this.formOrganizeSend.RECORD_STATUS = this.formOrganize.RECORD_STATUS;
        this.formOrganizeSend.DEL_FLAG = this.formOrganize.DEL_FLAG;
        // Input type number
        this.formOrganizeSend.ORGANIZE_CODE_LEV1 = this.formOrganize.ORGANIZE_CODE_LEV1;
        this.formOrganizeSend.ORGANIZE_CODE_LEV2 = this.formOrganize.ORGANIZE_CODE_LEV2;
        this.formOrganizeSend.ORGANIZE_CODE_LEV3 = this.formOrganize.ORGANIZE_CODE_LEV3;
        this.formOrganizeSend.ORGANIZE_CODE_LEV4 = this.formOrganize.ORGANIZE_CODE_LEV4;
        this.formOrganizeSend.ORGANIZE_CODE_LEV5 = this.formOrganize.ORGANIZE_CODE_LEV5;
        this.formOrganizeSend.ORGANIZE_ROOT_ID = this.formOrganize.ORGANIZE_ROOT_ID;
        // eslint-disable-next-line max-len
        this.formOrganizeSend.ORGANIZE_ADDRESS_PROVINCE = (this.formOrganize.ORGANIZE_ADDRESS_PROVINCE) ? this.formOrganize.ORGANIZE_ADDRESS_PROVINCE : null;
        // eslint-disable-next-line max-len
        this.formOrganizeSend.ORGANIZE_ADDRESS_DISRICT = (this.formOrganize.ORGANIZE_ADDRESS_DISRICT) ? this.formOrganize.ORGANIZE_ADDRESS_DISRICT : null;
        // eslint-disable-next-line max-len
        this.formOrganizeSend.ORGANIZE_ADDRESS_SUB_DISTRICT = (this.formOrganize.ORGANIZE_ADDRESS_SUB_DISTRICT) ? this.formOrganize.ORGANIZE_ADDRESS_SUB_DISTRICT : null;
        // eslint-disable-next-line max-len
        this.formOrganizeSend.ORGANIZE_ADDRESS_POSTCODE = (this.formOrganize.ORGANIZE_ADDRESS_POSTCODE) ? this.formOrganize.ORGANIZE_ADDRESS_POSTCODE : null;
        this.formOrganizeSend.ORGANIZE_TYPE_ID = this.formOrganize.ORGANIZE_TYPE_ID;
        this.formOrganizeSend.ORGANIZE_SEQ = this.formOrganize.ORGANIZE_SEQ;
        this.formOrganizeSend.GOVERNMENT_ID = this.formOrganize.GOVERNMENT_ID;
        this.formOrganizeSend.GOVERNMENT_TYPE_ID = this.formOrganize.GOVERNMENT_TYPE_ID;
        this.formOrganizeSend.MANAGER_ID = this.formOrganize.MANAGER_ID;
        this.formOrganizeSend.MANAGER2_ID = this.formOrganize.MANAGER2_ID;

        // Organize Level
        if (!this.formOrganize.ORGANIZE_ID) {
            if (this.formOrganize.ORGANIZE_LEVEL_ID > 0) {
                this.formOrganizeSend.ORGANIZE_LEVEL_ID = this.formOrganize.ORGANIZE_LEVEL_ID + 1;
            } else {
                this.formOrganizeSend.ORGANIZE_LEVEL_ID = null;
            }
        } else {
            let onChangeOrg = false;

            switch (this.formOrganize.ORGANIZE_LEVEL_ID) {
                case 1:
                    // eslint-disable-next-line eqeqeq
                    if (this.formOrganize.ORGANIZE_CODE_LEV1 != this.formOrganize.ORGANIZE_ID) { onChangeOrg = true; }
                    break;
                case 2:
                    // eslint-disable-next-line eqeqeq
                    if (this.formOrganize.ORGANIZE_CODE_LEV2 != this.formOrganize.ORGANIZE_ID) { onChangeOrg = true; }
                    break;
                case 3:
                    // eslint-disable-next-line eqeqeq
                    if (this.formOrganize.ORGANIZE_CODE_LEV3 != this.formOrganize.ORGANIZE_ID) { onChangeOrg = true; }
                    break;
                case 4:
                    // eslint-disable-next-line eqeqeq
                    if (this.formOrganize.ORGANIZE_CODE_LEV4 != this.formOrganize.ORGANIZE_ID) { onChangeOrg = true; }
                    break;
            }

            if (onChangeOrg) {
                this.formOrganizeSend.ORGANIZE_LEVEL_ID = this.formOrganize.ORGANIZE_LEVEL_ID + 1;
            } else {
                this.formOrganizeSend.ORGANIZE_LEVEL_ID = this.formOrganize.ORGANIZE_LEVEL_ID;
            }
        }
    }

    OnSelectProvice(e) {
        this.district = [];
        this.subdistrict = [];
        this.postcode = [];

        if (e.value) {
            this.formOrganize.ORGANIZE_ADDRESS_PROVINCE = e.value;
            this.disableDistrict = false;
            if (this.formOrganize.ORGANIZE_ADDRESS_PROVINCE) {
                this.serviceProvince.getDistrictofProvince(e.value).subscribe(_ => this.district = _);
            }
        }
    }

    OnSelectDistrict(e) {
        this.subdistrict = [];
        this.postcode = [];

        if (e.value) {
            this.formOrganize.ORGANIZE_ADDRESS_DISRICT = e.value;
            this.disableSubDistrict = false;
            if (this.formOrganize.ORGANIZE_ADDRESS_DISRICT) {
                this.serviceDistrict.GetSubDistrictOfDistrict(e.value).subscribe(_ => this.subdistrict = _);
            }
        }
    }

    OnSelectSubDistrict(e) {
        if (e.value) {
            this.formOrganize.ORGANIZE_ADDRESS_SUB_DISTRICT = e.value;
            this.disablepostcode = false;
            if (this.formOrganize.ORGANIZE_ADDRESS_SUB_DISTRICT) {
                this.serviceSubDistrict.GetPostCode(e.value).subscribe(_ => this.postcode = _);
            }
        }
    }

    OnSerectPostCode(e) {
        this.formOrganize.ORGANIZE_ADDRESS_POSTCODE = e.value;
    }


    OnSelectorg(e) {
        if (e) {
            let OrgId: number;
            if (e.data) {
                OrgId = e.data.ORGANIZE_ID;
                this.formOrganize.ORGANIZE_ROOT_ID = e.data.ORGANIZE_ID;
                if (this.organizeAll) {
                    this.organizeAll.items().push({
                        ORGANIZE_ID: e.data.ORGANIZE_ROOT_ID,
                        ORGANIZE_NAME_THA: e.data.ROOT_ORGANIZE_NAME_THA
                    });
                }

                this.form.instance.repaint();
            } else {
                OrgId = e.value;
            }
            if (OrgId) {
                this.ServiceOrganize.GetByOrganizeId(OrgId).subscribe(_ => {
                    // eslint-disable-next-line eqeqeq
                    this.formOrganize.ORGANIZE_ROOT_ID = (_.ORGANIZE_ROOT_ID != 0) ? _.ORGANIZE_ROOT_ID : null;
                    // eslint-disable-next-line eqeqeq
                    this.formOrganize.ORGANIZE_CODE_LEV1 = (_.ORGANIZE_CODE_LEV1 != 0) ? _.ORGANIZE_CODE_LEV1 : null;
                    // eslint-disable-next-line eqeqeq
                    this.formOrganize.ORGANIZE_CODE_LEV2 = (_.ORGANIZE_CODE_LEV2 != 0) ? _.ORGANIZE_CODE_LEV2 : null;
                    // eslint-disable-next-line eqeqeq
                    this.formOrganize.ORGANIZE_CODE_LEV3 = (_.ORGANIZE_CODE_LEV3 != 0) ? _.ORGANIZE_CODE_LEV3 : null;
                    // eslint-disable-next-line eqeqeq
                    this.formOrganize.ORGANIZE_CODE_LEV4 = (_.ORGANIZE_CODE_LEV4 != 0) ? _.ORGANIZE_CODE_LEV4 : null;
                    // eslint-disable-next-line eqeqeq
                    this.formOrganize.ORGANIZE_CODE_LEV5 = (_.ORGANIZE_CODE_LEV5 != 0) ? _.ORGANIZE_CODE_LEV5 : null;
                    this.formOrganize.ORGANIZE_LEVEL_ID = _.ORGANIZE_LEVEL;
                });
            } else {
                this.formOrganize.ORGANIZE_ROOT_ID = undefined;
                this.formOrganize.ORGANIZE_CODE_LEV1 = undefined;
                this.formOrganize.ORGANIZE_CODE_LEV2 = undefined;
                this.formOrganize.ORGANIZE_CODE_LEV3 = undefined;
                this.formOrganize.ORGANIZE_CODE_LEV4 = undefined;
                this.formOrganize.ORGANIZE_CODE_LEV5 = undefined;
                this.formOrganize.ORGANIZE_LEVEL_ID = undefined;
            }
        }
    }

    OpenFileDialog(e, uploadTag) {
        e.event.stopPropagation();
        uploadTag.click();
    }


    OnImageAdd(uploadTag, imageTag) {
        const files: FileList = uploadTag.files;
        let fileReader: FileReader;
        if (files.length > 0) {
            this.imageFile = files.item(0);
            fileReader = new FileReader();
            fileReader.readAsDataURL(this.imageFile);
            fileReader.onloadend = () => this.userImagePath = fileReader.result;
        }
    }


    Back() {
        this.mainForm.Load();
        this.mainForm.multiView.selectedIndex = 0;
        this.userImagePath = undefined;
        this.form.instance.resetValues();
        this.formOrganize.ORGANIZE_ID = undefined;
        this.formOrganize.ORGANIZE_LEVEL_ID = undefined;
        this.formOrganize.MANAGER_ID = undefined;
        this.formOrganize.MANAGER2_ID = undefined;

        this.formOrganize.ORGANIZE_ROOT_ID = undefined;
        this.formOrganize.ORGANIZE_CODE_LEV1 = undefined;
        this.formOrganize.ORGANIZE_CODE_LEV2 = undefined;
        this.formOrganize.ORGANIZE_CODE_LEV3 = undefined;
        this.formOrganize.ORGANIZE_CODE_LEV4 = undefined;
        this.formOrganize.ORGANIZE_CODE_LEV5 = undefined;

        this.formOrganize.ORGANIZE_ADDRESS_PROVINCE = undefined;
        this.formOrganize.ORGANIZE_ADDRESS_DISRICT = undefined;
        this.formOrganize.ORGANIZE_ADDRESS_SUB_DISTRICT = undefined;
        this.formOrganize.ORGANIZE_ADDRESS_POSTCODE = undefined;
        this.formOrganize.ORGANIZE_TYPE_ID = undefined;

        this.formOrganize.ORGANIZE_IMAGE_PATH = undefined;
        this.formOrganize.ORGANIZE_LOGO_PATH = undefined;
        this.formOrganize.ORGANIZE_FILE_PATH = undefined;
        this.formOrganize.ORGANIZE_URL_INTERNET = undefined;
        this.formOrganize.ORGANIZE_URL_INTRANET = undefined;
        this.formOrganize.ORGANIZE_URL_DM = undefined;
        // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
        this.formOrganizeSend = <any>{};
    }


}
