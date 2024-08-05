import { Component, ViewChild, type OnInit, OnDestroy } from '@angular/core';
import { DxDataGridComponent, DxMultiViewComponent } from 'devextreme-angular';
import DataSource from 'devextreme/data/data_source';
import { IProvinceinfo, ProvinceService } from 'src/app/services/province.service';
import { FormCommandEvent, FormCommandEventType } from 'src/app/common/common-type';
import { Observable, Subject } from 'rxjs';

@Component({
    selector: 'app-province-setting',
    // standalone: true,
    templateUrl: './province-setting.component.html',
    styleUrls: ['./province-setting.component.scss'],
})
export class ProvinceSettingComponent implements OnInit, OnDestroy {

    @ViewChild(DxMultiViewComponent) multiView: DxMultiViewComponent;
    @ViewChild(DxDataGridComponent) _grid: DxDataGridComponent;

    provinceSource: DataSource;
    _filter: IProvinceinfo = {};
    _index = 0;
    status = [{ id: "A", txt: "ใช้งาน" }, { id: "I", txt: "ไม่ใช้งาน" }];
    _listData = [{ txt: "ใบอนุญาต", status: "ใช้งาน" }, { txt: "เอกสารแนบ", status: "ใช้งาน" }, { txt: "ใบคำขอ", status: "ไม่ใช้งาน" }, { txt: "อื่น ๆ ", status: "ไม่ใช้งาน" }];
    commandEvent: Observable<FormCommandEvent<IProvinceinfo>>

    private _commandEvent$ = new Subject<FormCommandEvent<IProvinceinfo>>();
    constructor(
        private provinceServ: ProvinceService
    ) {
        this._filter = {};
        this.commandEvent = this._commandEvent$.asObservable();
    }

    ngOnInit() {
        this.provinceSource = new DataSource({
            load: () => this.provinceServ.getProvince(false).toPromise()
                .then(_ => ({ data: _ }))
        });
    }

    ngOnDestroy(): void {
        this._commandEvent$.complete();
    }

    add() {
        this.multiView.selectedIndex = 1;
        this._commandEvent$.next({ command: FormCommandEventType.add});
    }

    edit(e) {
        this.multiView.selectedIndex = 1;
        this._commandEvent$.next({ command: FormCommandEventType.update, data: Object.assign({}, e.data)});
    }

    getStatus(Status) {
        let data;
        if (Status.RECORD_STATUS === "A") {
            data = "ใช้งาน";
        } else if (Status.RECORD_STATUS === "I") { data = "ไม่ใช้งาน"; }
        return data;
    }


    search(e) {
        // let tempFilter = [];
        // let param = this._filter;
        // if (param.PROVINCE_NAME_THA) {
        //     tempFilter.push([
        //         "PROVINCE_NAME_THA",
        //         "=",
        //         param.PROVINCE_NAME_THA,
        //     ]);
        // }
        // if (param.PROVINCE_NAME_ENG) {
        //     tempFilter.push([
        //         "PROVINCE_NAME_ENG",
        //         "=",
        //         param.PROVINCE_NAME_ENG,
        //     ]);
        // }
        // if (param.RECORD_STATUS) {
        //     tempFilter.push([
        //         "RECORD_STATUS",
        //         "=",
        //         param.RECORD_STATUS,
        //     ]);
        // }
        // this._grid.instance.filter(tempFilter);
    }

    clearSearch(e) {
        // let param = this._filter;
        // param.PROVINCE_NAME_THA = undefined;
        // param.PROVINCE_NAME_ENG = undefined;
        // param.RECORD_STATUS = undefined;
        // this._grid.instance.clearFilter();
    }
}
