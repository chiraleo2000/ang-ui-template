import { Routes } from "@angular/router";
import { N10ListviewComponent } from '../components/pages/n10-listview/n10-listview.component';
import { RegistrationNumberSendComponent } from '../components/pages/registration-number-send/registration-number-send.component';
import { RegistrationNumberComponent } from '../components/pages/registration-number/registration-number.component';
import { RegistrationNumber2Component } from '../components/pages/registration-number2/registration-number2.component';
import { ReportWaterworksRequestComponent } from '../components/pages/report-waterworks-request/report-waterworks-request.component';
import { ReportPublicWayRequestComponent } from '../components/pages/report-public-way-request/report-public-way-request.component';
import { ReportRoadRegistrationComponent } from '../components/pages/report-road-registration/report-road-registration.component';
import { ReportLandOwnershipComponent } from '../components/pages/report-land-ownership/report-land-ownership.component';
import { ReportPerformanceFollowupComponent } from '../components/pages/report-performance-followup/report-performance-followup.component';
import { ReportConstructionRequestComponent } from '../components/pages/report-construction-request/report-construction-request.component';
import { CpMainComponent } from '../components/pages/cp-main/cp-main.component';
import { CpListviewComponent } from '../components/pages/cp-listview/cp-listview.component';
import { N4ListviewComponent } from '../components/pages/n4-listview/n4-listview.component';
import { N4MainComponent } from '../components/pages/n4-main/n4-main.component';
import { ReceiptMainComponent } from '../components/pages/receipt-main/receipt-main.component';
import { EfMainComponent } from '../components/pages/ef-main/ef-main.component';
import { EfListComponent } from '../components/pages/ef-list/ef-list.component';
import { PanelTaskComponent } from '../components/pages/panel-task/panel-task.component';
import { AppointmentComponent } from '../components/pages/appointment/appointment.component';
import { GroupTaskComponent } from '../components/pages/group-task/group-task.component';
import { HistoryTaskViewComponent } from '../components/pages/history-task-view/history-task-view.component';
import { MyGroupTaskListViewComponent } from '../components/pages/my-group-task-list-view/my-group-task-list-view.component';
import { MyHistoryListViewComponent } from '../components/pages/my-history-list-view/my-history-list-view.component';
import { monitortaskListViewComponent } from '../components/pages/monitor-task/monitor-task.component';
import { MyHistoryViewComponent } from '../components/pages/my-history-view/my-history-view.component';
import { MyTaskListViewComponent } from '../components/pages/my-task-list-view/my-task-list-view.component';
import { ApproveRegisterComponent } from '../components/pages/approve-register/approve-register.component';
import { ProfileComponent } from '../components/pages/profile/profile.component';
import { TaskContainerComponent } from '../components/pages/task-container/task-container.component';
import { NotificationListComponent } from '../components/pages/notification-list/notification-list.component';
import { NotifyDataComponent } from '../components/pages/notify-data/notify-data.component';
import { LicenseLegacySystemComponent, } from '../components/pages/license-legacy-system/license-legacy-system.component';
import {
    IListReportRouteData,
} from '../common/@type/rount-data';
import { Ch2MainListviewComponent } from '../components/pages/ch2-main-listview/ch2-main-listview.component';

import { Ch1MainComponent } from '../components/pages/ch1-main/ch1-main.component';
import { Ch1MainListviewComponent } from '../components/pages/ch1-main-listview/ch1-main-listview.component';
import { EdListviewComponent } from '../components/pages/ed-listview/ed-listview.component';
import { EdAddComponent } from '../components/pages/ed-add/ed-add.component';
import { DaListComponent } from '../components/pages/da-list/da-list.component';
import { DaMainAddComponent } from '../components/pages/da-main-add/da-main-add.component';
import { EdkidsListComponent } from '../components/pages/edkids-list/edkids-list.component';
import { EdkidsMainComponent } from '../components/pages/edkids-main/edkids-main.component';
import { EdcopyListComponent } from '../components/pages/edcopy-list/edcopy-list.component';
import { EdcopyMainComponent } from '../components/pages/edcopy-main/edcopy-main.component';
import { EduseListComponent } from '../components/pages/eduse-list/eduse-list.component';
import { EduseMainComponent } from '../components/pages/eduse-main/eduse-main.component';
import { At4MainComponent } from '../components/pages/at4-main/at4-main.component';
import { At4ListviewComponent } from '../components/pages/at4-listview/at4-listview.component';
import { At27MainComponent } from '../components/pages/at27-main/at27-main.component';
import { At26MainComponent } from '../components/pages/at26-main/at26-main.component';
import { At27ListviewComponent } from '../components/pages/at27-listview/at27-listview.component';
import { At26ListviewComponent } from '../components/pages/at26-listview/at26-listview.component';
import { At25MainComponent } from '../components/pages/at25-main/at25-main.component';
import { At21ListviewComponent } from '../components/pages/at21-listview/at21-listview.component';
import { At21MainComponent } from '../components/pages/at21-main/at21-main.component';
import { At22ListviewComponent } from '../components/pages/at22-listview/at22-listview.component';
import { At22MainComponent } from '../components/pages/at22-main/at22-main.component';
import { At23ListviewComponent } from '../components/pages/at23-listview/at23-listview.component';
import { At23MainComponent } from '../components/pages/at23-main/at23-main.component';
import { At24ListviewComponent } from '../components/pages/at24-listview/at24-listview.component';
import { At24MainComponent } from '../components/pages/at24-main/at24-main.component';
import { At25ListviewComponent } from '../components/pages/at25-listview/at25-listview.component';
import { At10ListviewComponent } from '../components/pages/at10-listview/at10-listview.component';
import { At10MainComponent } from '../components/pages/at10-main/at10-main.component';
import { At11ListviewComponent } from '../components/pages/at11-listview/at11-listview.component';
import { At11MainComponent } from '../components/pages/at11-main/at11-main.component';
import { At12ListviewComponent } from '../components/pages/at12-listview/at12-listview.component';
import { At12MainComponent } from '../components/pages/at12-main/at12-main.component';
import { At13ListviewComponent } from '../components/pages/at13-listview/at13-listview.component';
import { At13MainComponent } from '../components/pages/at13-main/at13-main.component';
import { At14ListviewComponent } from '../components/pages/at14-listview/at14-listview.component';
import { At14MainComponent } from '../components/pages/at14-main/at14-main.component';
import { At15ListviewComponent } from '../components/pages/at15-listview/at15-listview.component';
import { At15MainComponent } from '../components/pages/at15-main/at15-main.component';
import { At16ListviewComponent } from '../components/pages/at16-listview/at16-listview.component';
import { At16MainComponent } from '../components/pages/at16-main/at16-main.component';
import { At17ListviewComponent } from '../components/pages/at17-listview/at17-listview.component';
import { At17MainComponent } from '../components/pages/at17-main/at17-main.component';
import { At18ListviewComponent } from '../components/pages/at18-listview/at18-listview.component';
import { At18MainComponent } from '../components/pages/at18-main/at18-main.component';
import { At19ListviewComponent } from '../components/pages/at19-listview/at19-listview.component';
import { At19MainComponent } from '../components/pages/at19-main/at19-main.component';
import { At20ListviewComponent } from '../components/pages/at20-listview/at20-listview.component';
import { At20MainComponent } from '../components/pages/at20-main/at20-main.component';
import { At5ListviewComponent } from '../components/pages/at5-listview/at5-listview.component';
import { At5MainComponent } from '../components/pages/at5-main/at5-main.component';
import { At6ListviewComponent } from '../components/pages/at6-listview/at6-listview.component';
import { At6MainComponent } from '../components/pages/at6-main/at6-main.component';
import { At7ListviewComponent } from '../components/pages/at7-listview/at7-listview.component';
import { At7MainComponent } from '../components/pages/at7-main/at7-main.component';
import { At8ListviewComponent } from '../components/pages/at8-listview/at8-listview.component';
import { At8MainComponent } from '../components/pages/at8-main/at8-main.component';
import { At9ListviewComponent } from '../components/pages/at9-listview/at9-listview.component';
import { At9MainComponent } from '../components/pages/at9-main/at9-main.component';
import { Bo2ListviewComponent } from '../components/pages/bo2-listview/bo2-listview.component';
import { Bo2MainComponent } from '../components/pages/bo2-main/bo2-main.component';
import { Mn1ListviewComponent } from '../components/pages/mn1-listview/mn1-listview.component';
import { Mn1MainComponent } from '../components/pages/mn1-main/mn1-main.component';
import { Mn2ListviewComponent } from '../components/pages/mn2-listview/mn2-listview.component';
import { Mn2MainComponent } from '../components/pages/mn2-main/mn2-main.component';
import { Mn6ListviewComponent } from '../components/pages/mn6-listview/mn6-listview.component';
import { Mn6MainComponent } from '../components/pages/mn6-main/mn6-main.component';
import { Pc1ListviewComponent } from '../components/pages/pc1-listview/pc1-listview.component';
import { Pc1MainComponent } from '../components/pages/pc1-main/pc1-main.component';
import { Pc2ListviewComponent } from '../components/pages/pc2-listview/pc2-listview.component';
import { Pc2MainComponent } from '../components/pages/pc2-main/pc2-main.component';
import { Sc2ListviewComponent } from '../components/pages/sc2-listview/sc2-listview.component';
import { Sc2MainComponent } from '../components/pages/sc2-main/sc2-main.component';
import { Sc1ListviewComponent } from '../components/pages/sc1-listview/sc1-listview.component';
import { Sc1MainComponent } from '../components/pages/sc1-main/sc1-main.component';
import { Sc3ListviewComponent } from '../components/pages/sc3-listview/sc3-listview.component';
import { Sc3MainComponent } from '../components/pages/sc3-main/sc3-main.component';
import { SccListviewComponent } from '../components/pages/scc-listview/scc-listview.component';
import { SccMainComponent } from '../components/pages/scc-main/scc-main.component';
import { Sf1ListviewComponent } from '../components/pages/sf1-listview/sf1-listview.component';
import { Sf1MainComponent } from '../components/pages/sf1-main/sf1-main.component';
import { Sf10ListviewComponent } from '../components/pages/sf10-listview/sf10-listview.component';
import { Sf10MainComponent } from '../components/pages/sf10-main/sf10-main.component';
import { Sf4ListviewComponent } from '../components/pages/sf4-listview/sf4-listview.component';
import { Sf4MainComponent } from '../components/pages/sf4-main/sf4-main.component';
import { Sf6ListviewComponent } from '../components/pages/sf6-listview/sf6-listview.component';
import { Sf6MainComponent } from '../components/pages/sf6-main/sf6-main.component';
import { TpCListviewComponent } from '../components/pages/tp-c-listview/tp-c-listview.component';
import { TpCMainComponent } from '../components/pages/tp-c-main/tp-c-main.component';
import { TpCcListviewComponent } from '../components/pages/tp-cc-listview/tp-cc-listview.component';
import { TpCcMainComponent } from '../components/pages/tp-cc-main/tp-cc-main.component';
import { TpListviewComponent } from '../components/pages/tp-listview/tp-listview.component';
import { TpMainComponent } from '../components/pages/tp-main/tp-main.component';
import { K1MainComponent } from '../components/pages/k1-main/k1-main.component';
import { K1ListviewComponent } from '../components/pages/k1-listview/k1-listview.component';

import { Kh4MainComponent } from '../components/pages/kh4-main/kh4-main.component';
import { Kh4ListviewComponent } from '../components/pages/kh4-listview/kh4-listview.component';
import { Kh2MainComponent } from '../components/pages/kh2-main/kh2-main.component';
import { Kh2ListviewComponent } from '../components/pages/kh2-listview/kh2-listview.component';
import { Kh3MainComponent } from '../components/pages/kh3-main/kh3-main.component';
import { Kh3ListviewComponent } from '../components/pages/kh3-listview/kh3-listview.component';
import { Kh5ListviewComponent } from '../components/pages/kh5-listview/kh5-listview.component';
import { Kh5MainComponent } from '../components/pages/kh5-main/kh5-main.component';
import { Kh7MainComponent } from '../components/pages/kh7-main/kh7-main.component';
import { Kh7ListviewComponent } from '../components/pages/kh7-listview/kh7-listview.component';
import { Khr1MainComponent } from '../components/pages/khr1-main/khr1-main.component';
import { Khr1ListviewComponent } from '../components/pages/khr1-listview/khr1-listview.component';
import { RgcttMainComponent } from '../components/pages/rgctt-main/rgctt-main.component';
import { RgcttListviewComponent } from '../components/pages/rgctt-listview/rgctt-listview.component';
import { Civil9MainComponent } from '../components/pages/civil9-main/civil9-main.component';
import { Civil9ListviewComponent } from '../components/pages/civil9-listview/civil9-listview.component';
import { Civil1MainComponent } from '../components/pages/civil1-main/civil1-main.component';
import { Civil1ListviewComponent } from '../components/pages/civil1-listview/civil1-listview.component';
import { Civil2MainComponent } from '../components/pages/civil2-main/civil2-main.component';
import { Civil2ListviewComponent } from '../components/pages/civil2-listview/civil2-listview.component';
import { Civil3MainComponent } from '../components/pages/civil3-main/civil3-main.component';
import { Civil3ListviewComponent } from '../components/pages/civil3-listview/civil3-listview.component';
import { Civil4MainComponent } from '../components/pages/civil4-main/civil4-main.component';
import { Civil4ListviewComponent } from '../components/pages/civil4-listview/civil4-listview.component';
import { Civil5MainComponent } from '../components/pages/civil5-main/civil5-main.component';
import { Civil5ListviewComponent } from '../components/pages/civil5-listview/civil5-listview.component';
import { Civil6MainComponent } from '../components/pages/civil6-main/civil6-main.component';
import { Civil6ListviewComponent } from '../components/pages/civil6-listview/civil6-listview.component';
import { Civil7MainComponent } from '../components/pages/civil7-main/civil7-main.component';
import { Civil7ListviewComponent } from '../components/pages/civil7-listview/civil7-listview.component';
import { Civil8MainComponent } from '../components/pages/civil8-main/civil8-main.component';
import { Civil8ListviewComponent } from '../components/pages/civil8-listview/civil8-listview.component';
import { D1MainComponent } from '../components/pages/d1-main/d1-main.component';
import { D1ListviewComponent } from '../components/pages/d1-listview/d1-listview.component';
import { Bkk1MainComponent } from '../components/pages/bkk1-main/bkk1-main.component';
import { Bkk1ListviewComponent } from '../components/pages/bkk1-listview/bkk1-listview.component';
import { Bkk4MainComponent } from '../components/pages/bkk4-main/bkk4-main.component';
import { Bkk4ListviewComponent } from '../components/pages/bkk4-listview/bkk4-listview.component';
import { N3MainComponent } from '../components/pages/n3-main/n3-main.component';
import { N3ListviewComponent } from '../components/pages/n3-listview/n3-listview.component';
import { N5MainComponent } from '../components/pages/n5-main/n5-main.component';
import { N5ListviewComponent } from '../components/pages/n5-listview/n5-listview.component';
import { N6MainComponent } from '../components/pages/n6-main/n6-main.component';
import { N6ListviewComponent } from '../components/pages/n6-listview/n6-listview.component';
import { N7MainComponent } from '../components/pages/n7-main/n7-main.component';
import { N7ListviewComponent } from '../components/pages/n7-listview/n7-listview.component';
import { Pc5MainComponent } from '../components/pages/pc5-main/pc5-main.component';
import { Pc5ListviewComponent } from '../components/pages/pc5-listview/pc5-listview.component';
import { Pc6MainComponent } from '../components/pages/pc6-main/pc6-main.component';
import { Pc6ListviewComponent } from '../components/pages/pc6-listview/pc6-listview.component';
import { Pc8MainComponent } from '../components/pages/pc8-main/pc8-main.component';
import { Pc8ListviewComponent } from '../components/pages/pc8-listview/pc8-listview.component';
import { Pc11MainComponent } from '../components/pages/pc11-main/pc11-main.component';
import { Pc11ListviewComponent } from '../components/pages/pc11-listview/pc11-listview.component';
import { Pc12MainComponent } from '../components/pages/pc12-main/pc12-main.component';
import { Pc12ListviewComponent } from '../components/pages/pc12-listview/pc12-listview.component';
import { Pc13MainComponent } from '../components/pages/pc13-main/pc13-main.component';
import { Pc13ListviewComponent } from '../components/pages/pc13-listview/pc13-listview.component';
import { Pc14MainComponent } from '../components/pages/pc14-main/pc14-main.component';
import { Pc14ListviewComponent } from '../components/pages/pc14-listview/pc14-listview.component';
import { Pc15MainComponent } from '../components/pages/pc15-main/pc15-main.component';
import { Pc15ListviewComponent } from '../components/pages/pc15-listview/pc15-listview.component';
import { EpMainComponent } from '../components/pages/ep-main/ep-main.component';
import { EpListviewComponent } from '../components/pages/ep-listview/ep-listview.component';
import { Rs1MainComponent } from '../components/pages/rs1-main/rs1-main.component';
import { Rs1ListviewComponent } from '../components/pages/rs1-listview/rs1-listview.component';
import { At29MainComponent } from '../components/pages/at29-main/at29-main.component';
import { At29ListviewComponent } from '../components/pages/at29-listview/at29-listview.component';
import { CivilKo1MainComponent } from '../components/pages/civil-ko1-main/civil-ko1-main.component';
import { CivilKo1ListviewComponent } from '../components/pages/civil-ko1-listview/civil-ko1-listview.component';
import { CivilKo2MainComponent } from '../components/pages/civil-ko2-main/civil-ko2-main.component';
import { CivilKo2ListviewComponent } from '../components/pages/civil-ko2-listview/civil-ko2-listview.component';
import { CivilKo3MainComponent } from '../components/pages/civil-ko3-main/civil-ko3-main.component';
import { CivilKo3ListviewComponent } from '../components/pages/civil-ko3-listview/civil-ko3-listview.component';
import { CivilKo4MainComponent } from '../components/pages/civil-ko4-main/civil-ko4-main.component';
import { CivilKo4ListviewComponent } from '../components/pages/civil-ko4-listview/civil-ko4-listview.component';
import { CivilKo5MainComponent } from '../components/pages/civil-ko5-main/civil-ko5-main.component';
import { CivilKo5ListviewComponent } from '../components/pages/civil-ko5-listview/civil-ko5-listview.component';
import { CivilKo6MainComponent } from '../components/pages/civil-ko6-main/civil-ko6-main.component';
import { CivilKo6ListviewComponent } from '../components/pages/civil-ko6-listview/civil-ko6-listview.component';
import { CivilKo7MainComponent } from '../components/pages/civil-ko7-main/civil-ko7-main.component';
import { CivilKo7ListviewComponent } from '../components/pages/civil-ko7-listview/civil-ko7-listview.component';
import { CivilKo8MainComponent } from '../components/pages/civil-ko8-main/civil-ko8-main.component';
import { CivilKo8ListviewComponent } from '../components/pages/civil-ko8-listview/civil-ko8-listview.component';
import { CivilKo9MainComponent } from '../components/pages/civil-ko9-main/civil-ko9-main.component';
import { CivilKo9ListviewComponent } from '../components/pages/civil-ko9-listview/civil-ko9-listview.component';
import { CivilKo10MainComponent } from '../components/pages/civil-ko10-main/civil-ko10-main.component';
import { CivilKo10ListviewComponent } from '../components/pages/civil-ko10-listview/civil-ko10-listview.component';
import { CivilKo11MainComponent } from '../components/pages/civil-ko11-main/civil-ko11-main.component';
import { CivilKo11ListviewComponent } from '../components/pages/civil-ko11-listview/civil-ko11-listview.component';
import { CivilKo12MainComponent } from '../components/pages/civil-ko12-main/civil-ko12-main.component';
import { CivilKo12ListviewComponent } from '../components/pages/civil-ko12-listview/civil-ko12-listview.component';
import { CivilKo13MainComponent } from '../components/pages/civil-ko13-main/civil-ko13-main.component';
import { CivilKo13ListviewComponent } from '../components/pages/civil-ko13-listview/civil-ko13-listview.component';
import { CivilKo14MainComponent } from '../components/pages/civil-ko14-main/civil-ko14-main.component';
import { CivilKo14ListviewComponent } from '../components/pages/civil-ko14-listview/civil-ko14-listview.component';
import { CivilKo15MainComponent } from '../components/pages/civil-ko15-main/civil-ko15-main.component';
import { CivilKo15ListviewComponent } from '../components/pages/civil-ko15-listview/civil-ko15-listview.component';
import { FormGeneralComponent } from '../components/pages/form-general/form-general.component';
import { FormGrneralAddComponent } from '../components/pages/form-grneral-add/form-grneral-add.component';
import { FormGrneralRecieveComponent } from '../components/pages/form-grneral-recieve/form-grneral-recieve.component';
import { FormGeneralViewComponent } from '../components/pages/form-general-view/form-general-view.component';
import { Ts1ListviewComponent } from '../components/pages/ts1-listview/ts1-listview.component';
import { Ts2ListviewComponent } from '../components/pages/ts2-listview/ts2-listview.component';
import { Ts1MainComponent } from '../components/pages/ts1-main/ts1-main.component';
import { Ts2MainComponent } from '../components/pages/ts2-main/ts2-main.component';
import { Yp1ListviewComponent } from '../components/pages/yp1-listview/yp1-listview.component';
import { Yp1MainComponent } from '../components/pages/yp1-main/yp1-main.component';
import { Yp2ListviewComponent } from '../components/pages/yp2-listview/yp2-listview.component';
import { Yp2MaimComponent } from '../components/pages/yp2-maim/yp2-maim.component';
import { Yp3ListviewComponent } from '../components/pages/yp3-listview/yp3-listview.component';
import { Yp3MainComponent } from '../components/pages/yp3-main/yp3-main.component';
import { D2ListviewComponent } from '../components/pages/d2-listview/d2-listview.component';
import { D2MainComponent } from '../components/pages/d2-main/d2-main.component';
import { D3ListviewComponent } from '../components/pages/d3-listview/d3-listview.component';
import { D3MainComponent } from '../components/pages/d3-main/d3-main.component';
import { D5MainComponent } from '../components/pages/d5-main/d5-main.component';
import { D5ListviewComponent } from '../components/pages/d5-listview/d5-listview.component';
import { D4MainComponent } from '../components/pages/d4-main/d4-main.component';
import { D4ListviewComponent } from '../components/pages/d4-listview/d4-listview.component';
import { RbMainComponent } from '../components/pages/rb-main/rb-main.component';
import { RbListviewComponent } from '../components/pages/rb-listview/rb-listview.component';
import { SgMainComponent } from '../components/pages/sg-main/sg-main.component';
import { SgListviewComponent } from '../components/pages/sg-listview/sg-listview.component';
import { TcMainComponent } from '../components/pages/tc-main/tc-main.component';
import { TcListviewComponent } from '../components/pages/tc-listview/tc-listview.component';
import { TwMainComponent } from '../components/pages/tw-main/tw-main.component';
import { TwListviewComponent } from '../components/pages/tw-listview/tw-listview.component';
import { IwMainComponent } from '../components/pages/iw-main/iw-main.component';
import { IwListviewComponent } from '../components/pages/iw-listview/iw-listview.component';
import { N10MainComponent } from '../components/pages/n10-main/n10-main.component';
import { N11MainComponent } from '../components/pages/n11-main/n11-main.component';
import { N11ListviewComponent } from '../components/pages/n11-listview/n11-listview.component';
import { BuildingUtilizationComponent, } from '../components/pages/building-utilization/building-utilization.component';
import { ReportYotaTypeOfBuilding1Component } from '../components/pages/report-yota-type-of-building1/report-yota-type-of-building1.component';
import { ReportYotaPavementTypeComponent } from '../components/pages/report-yota-pavement-type/report-yota-pavement-type.component';
import { ReportYotaBuildingUsageComponent } from '../components/pages/report-yota-building-usage/report-yota-building-usage.component';
import { ReportYotaRequestTypeOfBuildingComponent } from '../components/pages/report-yota-request-type-of-building/report-yota-request-type-of-building.component';
import { ReportYotaLitigationFollowUpComponent } from '../components/pages/report-yota-litigation-follow-up/report-yota-litigation-follow-up.component';
import { ReportYotaBuildingStatusSurveyComponent } from '../components/pages/report-yota-building-status-survey/report-yota-building-status-survey.component';
import { ReportYotaCountRequestTypeOfBuildingComponent } from '../components/pages/report-yota-count-request-type-of-building/report-yota-count-request-type-of-building.component';
import { ReportYotaLandUseTypeComponent } from '../components/pages/report-yota-land-use-type/report-yota-land-use-type.component';
import { ReportYotaKhuKlongLamrangRegistrationComponent } from '../components/pages/report-yota-khu-klong-lamrang-registration/report-yota-khu-klong-lamrang-registration.component';
import { ReportYotaEncroachPlublicPlaceComponent } from '../components/pages/report-yota-encroach-plublic-place/report-yota-encroach-plublic-place.component';
import { ReportYotaDataPublicLandComponent } from '../components/pages/report-yota-data-public-land/report-yota-data-public-land.component';
import { ReportYotaDataBkkLandComponent } from '../components/pages/report-yota-data-bkk-land/report-yota-data-bkk-land.component';
import { ReportYotaTotalDataBkkLandComponent } from '../components/pages/report-yota-total-data-bkk-land/report-yota-total-data-bkk-land.component';
import { So1MainComponent } from '../components/pages/so1-main/so1-main.component';
import { So1ListviewComponent } from '../components/pages/so1-listview/so1-listview.component';
import { EpaymentListComponent } from '../components/pages/epayment-list/epayment-list.component';
import { FormBfcV2ListComponent } from '../components/pages/form-bfc-v2-list/form-bfc-v2-list.component';
import { Kh1ContainerComponent } from '../components/pages/BFC/KH1/kh1-container/kh1-container.component';
import { Ch1ContainerRenderComponent } from '../components/pages/BFC/CH1/ch1-container-render/ch1-container-render.component';
import { BFCRecieveComponentComponent } from '../components/pages/BFC/Receive/bfcrecieve-component/bfcrecieve-component.component';
import { To1MainComponent } from '../components/pages/to1-main/to1-main.component';
import { To1ListviewComponent } from '../components/pages/to1-listview/to1-listview.component';
import { Ch3MainListviewComponent } from '../components/pages/ch3-main-listview/ch3-main-listview.component';
import { Ch4MainListviewComponent } from '../components/pages/ch4-main-listview/ch4-main-listview.component';
import { Ch6MainListviewComponent } from '../components/pages/ch6-main-listview/ch6-main-listview.component';
import { Ch9MainListviewComponent } from '../components/pages/ch9-main-listview/ch9-main-listview.component';
import { Ch3MainComponent } from '../components/pages/ch3-main/ch3-main.component';
import { Ch4MainComponent } from '../components/pages/ch4-main/ch4-main.component';
import { Ch6MainComponent } from '../components/pages/ch6-main/ch6-main.component';
import { Ch9MainComponent } from '../components/pages/ch9-main/ch9-main.component';
import { Cls2MainComponent } from '../components/pages/cls2-main/cls2-main.component';
import { Cls2ListviewComponent } from '../components/pages/cls2-listview/cls2-listview.component';
import { So2ListviewComponent } from '../components/pages/so2-listview/so2-listview.component';
import { So2MainComponent } from '../components/pages/so2-main/so2-main.component';
import { So6ListviewComponent } from '../components/pages/so6-listview/so6-listview.component';
import { So6MainComponent } from '../components/pages/so6-main/so6-main.component';
import { So7ListviewComponent } from '../components/pages/so7-listview/so7-listview.component';
import { So7MainComponent } from '../components/pages/so7-main/so7-main.component';
import { So9ListviewComponent } from '../components/pages/so9-listview/so9-listview.component';
import { So9MainComponent } from '../components/pages/so9-main/so9-main.component';
import { So11ListviewComponent } from '../components/pages/so11-listview/so11-listview.component';
import { So11MainComponent } from '../components/pages/so11-main/so11-main.component';
import { So12ListviewComponent } from '../components/pages/so12-listview/so12-listview.component';
import { So12MainComponent } from '../components/pages/so12-main/so12-main.component';
import { So13ListviewComponent } from '../components/pages/so13-listview/so13-listview.component';
import { So13MainComponent } from '../components/pages/so13-main/so13-main.component';
import { So14ListviewComponent } from '../components/pages/so14-listview/so14-listview.component';
import { So14MainComponent } from '../components/pages/so14-main/so14-main.component';
import { To3ListviewComponent } from '../components/pages/to3-listview/to3-listview.component';
import { To3MainComponent } from '../components/pages/to3-main/to3-main.component';
import { To4ListviewComponent } from '../components/pages/to4-listview/to4-listview.component';
import { To4MainComponent } from '../components/pages/to4-main/to4-main.component';
import { To5ListviewComponent } from '../components/pages/to5-listview/to5-listview.component';
import { To5MainComponent } from '../components/pages/to5-main/to5-main.component';
import { To7MainComponent } from '../components/pages/to7-main/to7-main.component';
import { To7ListviewComponent } from '../components/pages/to7-listview/to7-listview.component';
import { Sn1ListviewComponent } from '../components/pages/sn1-listview/sn1-listview.component';
import { Sn1MainComponent } from '../components/pages/sn1-main/sn1-main.component';
import { Sn5ListviewComponent } from '../components/pages/sn5-listview/sn5-listview.component';
import { Sn5MainComponent } from '../components/pages/sn5-main/sn5-main.component';
import { Sn6ListviewComponent } from '../components/pages/sn6-listview/sn6-listview.component';
import { Sn6MainComponent } from '../components/pages/sn6-main/sn6-main.component';
import { Sn8ListviewComponent } from '../components/pages/sn8-listview/sn8-listview.component';
import { Sn8MainComponent } from '../components/pages/sn8-main/sn8-main.component';
import { Sn9ListviewComponent } from '../components/pages/sn9-listview/sn9-listview.component';
import { Sn9MainComponent } from '../components/pages/sn9-main/sn9-main.component';
import { Sn10ListviewComponent } from '../components/pages/sn10-listview/sn10-listview.component';
import { Sn10MainComponent } from '../components/pages/sn10-main/sn10-main.component';
import { Sg1ListviewComponent } from '../components/pages/sg1-listview/sg1-listview.component';
import { Sg1MainComponent } from '../components/pages/sg1-main/sg1-main.component';
import { Sg3ListviewComponent } from '../components/pages/sg3-listview/sg3-listview.component';
import { Sg3MainComponent } from '../components/pages/sg3-main/sg3-main.component';
import { Sg5ListviewComponent } from '../components/pages/sg5-listview/sg5-listview.component';
import { Sg5MainComponent } from '../components/pages/sg5-main/sg5-main.component';
import { Sg6ListviewComponent } from '../components/pages/sg6-listview/sg6-listview.component';
import { Sg6MainComponent } from '../components/pages/sg6-main/sg6-main.component';
import { Ks1ListviewComponent } from '../components/pages/ks1-listview/ks1-listview.component';
import { Ks1MainComponent } from '../components/pages/ks1-main/ks1-main.component';
import { BfcrecieveListComponent } from '../components/pages/BFC/Receive/bfcrecieve-list/bfcrecieve-list.component';
import { Kh6MainComponent } from '../components/pages/kh6-main/kh6-main.component';
import { Kh6ListviewComponent } from '../components/pages/kh6-listview/kh6-listview.component';
import { Ch3BfcComponent } from '../components/pages/ch3-bfc/ch3-bfc.component';
import { Civil11MainComponent } from '../components/pages/civil11-main/civil11-main.component';
import { Civil11ListviewComponent } from '../components/pages/civil11-listview/civil11-listview.component';
import { To3bfcComponent } from '../components/pages/to3-bfc/to3-bfc.component';
import { So6bfcComponent } from '../components/pages/so6-bfc/so6-bfc.component';
import { So14bfcComponent } from '../components/pages/so14-bfc/so14-bfc.component';
import { HistorySectionViewComponent } from "../components/pages/history-section-view/history-section-view.component";

export const BfcRoutes: Routes = [
    {
        path: 'formbfc',
        component: FormBfcV2ListComponent,
    },

    {
        path: 'license-legacy-system',
        component: LicenseLegacySystemComponent
    },
    {
        path: 'building-utilization',
        component: BuildingUtilizationComponent
    },
    {
        path: 'profile', component: ProfileComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' }
    },
    {
        path: 'registration-number', component: RegistrationNumberComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' }
    },
    {
        path: 'registration-number2', component: RegistrationNumber2Component,
        data: { AppCode: 'BMA', mainUrl: 'bfc' }
    },
    {
        path: 'registration-number-send', component: RegistrationNumberSendComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' }
    },
    {
        path: 'form-general',
        component: FormGeneralComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'form-general-view/:id',
        component: FormGeneralViewComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'form-general-add',
        component: FormGrneralAddComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'general-receipt-main',
        component: FormGrneralRecieveComponent,
    },
    {
        path: 'general-receipt-main/:id',
        component: FormGrneralRecieveComponent,
    },
    {
        path: 'bfc-receive',

        component: BfcrecieveListComponent,
    },
    {
        path: 'bfc-receive-new',
        component: BFCRecieveComponentComponent,
    },
    {
        path: 'bfc-receive-new/:receiveId',
        component: BFCRecieveComponentComponent,
    },
    {
        path: 'tasks/:taskId',
        component: PanelTaskComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    { path: 'appointment', component: AppointmentComponent },
    { path: 'appointment/:taskId', component: AppointmentComponent },
    { path: 'group-task', component: GroupTaskComponent },
    {
        path: 'my-task',
        component: MyTaskListViewComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    // report
    {
        path: 'report-construction-request',
        component: ReportConstructionRequestComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-performance-followup',
        component: ReportPerformanceFollowupComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-land-ownership',
        component: ReportLandOwnershipComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-road-registration',
        component: ReportRoadRegistrationComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-public-way-request',
        component: ReportPublicWayRequestComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-waterworks-request',
        component: ReportWaterworksRequestComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    // new report by name
    {
        path: 'report-yota-type-of-building1',
        component: ReportYotaTypeOfBuilding1Component,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-yota-pavement-type',
        component: ReportYotaPavementTypeComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-yota-building-usage',
        component: ReportYotaBuildingUsageComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-yota-request-type-of-building',
        component: ReportYotaRequestTypeOfBuildingComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-yota-litigation-follow-up',
        component: ReportYotaLitigationFollowUpComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-yota-building-status-survey',
        component: ReportYotaBuildingStatusSurveyComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-yota-count-request-type-of-building',
        component: ReportYotaCountRequestTypeOfBuildingComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-yota-land-use-type',
        component: ReportYotaLandUseTypeComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-yota-khu-klong-lamrang-registration',
        component: ReportYotaKhuKlongLamrangRegistrationComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-yota-encroach-plublic-place',
        component: ReportYotaEncroachPlublicPlaceComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-yota-data-public-land',
        component: ReportYotaDataPublicLandComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-yota-data-bkk-land',
        component: ReportYotaDataBkkLandComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'report-yota-total-data-bkk-land',
        component: ReportYotaTotalDataBkkLandComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    // end new report

    // end report
    { path: 'my-group-task', component: MyGroupTaskListViewComponent },
    {
        path: 'my-history-task',
        component: MyHistoryListViewComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'monitor-task',
        component: monitortaskListViewComponent,
        data: { AppCode: 'OfficerHome', mainUrl: 'officer' },
    },
    {
        path: 'my-history/:bpmId',
        component: MyHistoryViewComponent,
        data: { onlyMeHistory: true },
    },
    {
        path: 'my-history/log/:bpmLogId',
        component: HistoryTaskViewComponent,
        data: { onlyMeHistory: true },
    },
    {
        path: 'task/:taskId',
        component: TaskContainerComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    {
        path: 'epayment',
        component: EpaymentListComponent,
        data: { AppCode: 'BMA', mainUrl: 'bfc' },
    },
    { path: 'approve-register', component: ApproveRegisterComponent },
    { path: 'notification-list', component: NotificationListComponent },
    { path: 'notify-data/:id', component: NotifyDataComponent },
    { path: 'ch1', component: Ch1ContainerRenderComponent },
    { path: 'Kh1', component: Kh1ContainerComponent },
    { path: 'k1-main/:id/:form_io_id/:document_id', component: K1MainComponent },
    { path: 'k1-main', component: K1MainComponent },
    {
        path: 'k1-listview',
        component: K1ListviewComponent,
        data: {
            formCodeView: 'KH1',
            formCode: 'KH1&offset=0&length=10',
            linkCaseView: 'k1-main',
        } as IListReportRouteData,
    },
    { path: 'kh2-main/:id/:form_io_id/:document_id', component: Kh2MainComponent },
    { path: 'kh2-main', component: Kh2MainComponent },
    {
        path: 'kh2-listview',
        component: Kh2ListviewComponent,
        data: {
            formCodeView: 'KH2',
            formCode: 'KH2&offset=0&length=10',
            linkCaseView: 'kh2-main',
        } as IListReportRouteData,
    },
    { path: 'kh4-main/:id/:form_io_id/:document_id', component: Kh4MainComponent },
    { path: 'kh4-main', component: Kh4MainComponent },
    {
        path: 'kh4-listview',
        component: Kh4ListviewComponent,
        data: {
            formCodeView: 'KH4',
            formCode: 'KH4&offset=0&length=10',
            linkCaseView: 'kh4-main',
        } as IListReportRouteData,
    },
    { path: 'kh3-main/:id/:form_io_id/:document_id', component: Kh3MainComponent },
    { path: 'kh3-main', component: Kh3MainComponent },
    {
        path: 'kh3-listview',
        component: Kh3ListviewComponent,
        data: {
            formCodeView: 'KH3',
            formCode: 'KH3&offset=0&length=10',
            linkCaseView: 'kh3-main',
        } as IListReportRouteData,
    },
    { path: 'kh5-main/:id/:form_io_id/:document_id', component: Kh5MainComponent },
    { path: 'kh5-main', component: Kh5MainComponent },
    {
        path: 'kh5-listview',
        component: Kh5ListviewComponent,
        data: {
            formCodeView: 'KH5',
            formCode: 'KH5&offset=0&length=10',
            linkCaseView: 'kh5-main',
        } as IListReportRouteData,
    },
    // kh6
    { path: 'kh6-main/:id/:form_io_id/:document_id', component: Kh6MainComponent },
    { path: 'kh6-main', component: Kh6MainComponent },
    {
        path: 'kh6-listview',
        component: Kh6ListviewComponent,
        data: {
            formCodeView: 'KH6',
            formCode: 'KH6&offset=0&length=10',
            linkCaseView: 'kh6-main',
        } as IListReportRouteData,
    },
    { path: 'kh7-main/:id/:form_io_id/:document_id', component: Kh7MainComponent },
    { path: 'kh7-main', component: Kh7MainComponent },
    {
        path: 'kh7-listview',
        component: Kh7ListviewComponent,
        data: {
            formCodeView: 'KH7',
            formCode: 'KH7&offset=0&length=10',
            linkCaseView: 'kh7-main',
        } as IListReportRouteData,
    },
    { path: 'khr1-main/:id/:form_io_id/:document_id', component: Khr1MainComponent },
    { path: 'khr1-main', component: Khr1MainComponent },
    {
        path: 'khr1-listview',
        component: Khr1ListviewComponent,
        data: {
            formCodeView: 'KHR1',
            formCode: 'KHR1&offset=0&length=10',
            linkCaseView: 'khr1-main',
        } as IListReportRouteData,
    },
    { path: 'rgctt-main/:id', component: RgcttMainComponent },
    { path: 'rgctt-main', component: RgcttMainComponent },
    {
        path: 'rgctt-listview',
        component: RgcttListviewComponent,
        data: {
            formCodeView: 'RGCTT',
            formCode: 'RGCTT&offset=0&length=10',
            linkCaseView: 'rgctt-main',
        } as IListReportRouteData,
    },
    { path: 'civil9-main/:id/:form_io_id/:document_id', component: Civil9MainComponent },
    { path: 'civil9-main', component: Civil9MainComponent },
    {
        path: 'civil9-listview',
        component: Civil9ListviewComponent,
        data: {
            formCodeView: 'CIVIL9',
            formCode: 'CIVIL9&offset=0&length=10',
            linkCaseView: 'civil9-main',
        } as IListReportRouteData,
    },
    { path: 'civil1-main/:id', component: Civil1MainComponent },
    { path: 'civil1-main', component: Civil1MainComponent },
    {
        path: 'civil1-listview',
        component: Civil1ListviewComponent,
        data: {
            formCodeView: 'TP',
            formCode: 'TP&offset=0&length=10',
            linkCaseView: 'civil1-main',
        } as IListReportRouteData,
    },
    { path: 'civil2-main/:id', component: Civil2MainComponent },
    { path: 'civil2-main', component: Civil2MainComponent },
    {
        path: 'civil2-listview',
        component: Civil2ListviewComponent,
        data: {
            formCodeView: 'TP',
            formCode: 'TP&offset=0&length=10',
            linkCaseView: 'civil2-main',
        } as IListReportRouteData,
    },
    { path: 'civil3-main/:id', component: Civil3MainComponent },
    { path: 'civil3-main', component: Civil3MainComponent },
    {
        path: 'civil3-listview',
        component: Civil3ListviewComponent,
        data: {
            formCodeView: 'TP',
            formCode: 'TP&offset=0&length=10',
            linkCaseView: 'civil3-main',
        } as IListReportRouteData,
    },
    { path: 'civil4-main/:id', component: Civil4MainComponent },
    { path: 'civil4-main', component: Civil4MainComponent },
    {
        path: 'civil4-listview',
        component: Civil4ListviewComponent,
        data: {
            formCodeView: 'TP',
            formCode: 'TP&offset=0&length=10',
            linkCaseView: 'civil4-main',
        } as IListReportRouteData,
    },
    { path: 'civil5-main/:id/:form_io_id/:document_id', component: Civil5MainComponent },
    { path: 'civil5-main', component: Civil5MainComponent },
    {
        path: 'civil5-listview',
        component: Civil5ListviewComponent,
        data: {
            formCodeView: 'CIVIL5',
            formCode: 'CIVIL5&offset=0&length=10',
            linkCaseView: 'civil5-main',
        } as IListReportRouteData,
    },
    { path: 'civil6-main/:id/:form_io_id/:document_id', component: Civil6MainComponent },
    { path: 'civil6-main', component: Civil6MainComponent },
    {
        path: 'civil6-listview',
        component: Civil6ListviewComponent,
        data: {
            formCodeView: 'CIVIL6',
            formCode: 'CIVIL6&offset=0&length=10',
            linkCaseView: 'civil6-main',
        } as IListReportRouteData,
    },
    { path: 'civil7-main/:id/:form_io_id/:document_id', component: Civil7MainComponent },
    { path: 'civil7-main', component: Civil7MainComponent },
    {
        path: 'civil7-listview',
        component: Civil7ListviewComponent,
        data: {
            formCodeView: 'CIVIL7',
            formCode: 'CIVIL7&offset=0&length=10',
            linkCaseView: 'civil7-main',
        } as IListReportRouteData,
    },
    { path: 'civil8-main/:id/:form_io_id/:document_id', component: Civil8MainComponent },
    { path: 'civil8-main', component: Civil8MainComponent },
    {
        path: 'civil8-listview',
        component: Civil8ListviewComponent,
        data: {
            formCodeView: 'CIVIL8',
            formCode: 'CIVIL8&offset=0&length=10',
            linkCaseView: 'civil8-main',
        } as IListReportRouteData,
    },
    { path: 'civil11-main/:id/:form_io_id/:document_id', component: Civil11MainComponent },
    { path: 'civil11-main', component: Civil11MainComponent },
    {
        path: 'civil11-listview',
        component: Civil11ListviewComponent,
        data: {
            formCodeView: 'CIVIL11',
            formCode: 'CIVIL11&offset=0&length=10',
            linkCaseView: 'civil11-main',
        } as IListReportRouteData,
    },
    { path: 'd1-main/:id/:form_io_id/:document_id', component: D1MainComponent },
    { path: 'd1-main', component: D1MainComponent },
    {
        path: 'd1-listview',
        component: D1ListviewComponent,
        data: {
            formCodeView: 'D1',
            formCode: 'D1&offset=0&length=10',
            linkCaseView: 'd1-main',
        } as IListReportRouteData,
    },
    { path: 'bkk1-main/:id/:form_io_id/:document_id', component: Bkk1MainComponent },
    { path: 'bkk1-main', component: Bkk1MainComponent },
    {
        path: 'bkk1-listview',
        component: Bkk1ListviewComponent,
        data: {
            formCodeView: 'BKK1',
            formCode: 'BKK1&offset=0&length=10',
            linkCaseView: 'bkk1-main',
        } as IListReportRouteData,
    },
    { path: 'bkk4-main/:id/:form_io_id/:document_id', component: Bkk4MainComponent },
    { path: 'bkk4-main', component: Bkk4MainComponent },
    {
        path: 'bkk4-listview',
        component: Bkk4ListviewComponent,
        data: {
            formCodeView: 'BKK4',
            formCode: 'BKK4&offset=0&length=10',
            linkCaseView: 'bkk4-main',
        } as IListReportRouteData,
    },
    { path: 'n3-main/:id/:form_io_id/:document_id', component: N3MainComponent },
    { path: 'n3-main', component: N3MainComponent },
    {
        path: 'n3-listview',
        component: N3ListviewComponent,
        data: {
            formCodeView: 'N3',
            formCode: 'N3&offset=0&length=10',
            linkCaseView: 'n3-main',
        } as IListReportRouteData,
    },
    { path: 'n4-main/:id/:form_io_id/:document_id', component: N4MainComponent },
    { path: 'n4-main', component: N4MainComponent },
    {
        path: 'n4-listview',
        component: N4ListviewComponent,
        data: {
            formCodeView: 'N4',
            formCode: 'N4&offset=0&length=10',
            linkCaseView: 'n4-main',
        } as IListReportRouteData,
    },
    { path: 'n5-main/:id/:form_io_id/:document_id', component: N5MainComponent },
    { path: 'n5-main', component: N5MainComponent },
    {
        path: 'n5-listview',
        component: N5ListviewComponent,
        data: {
            formCodeView: 'N5',
            formCode: 'N5&offset=0&length=10',
            linkCaseView: 'n5-main',
        } as IListReportRouteData,
    },
    { path: 'n6-main/:id/:form_io_id/:document_id', component: N6MainComponent },
    { path: 'n6-main', component: N6MainComponent },
    {
        path: 'n6-listview',
        component: N6ListviewComponent,
        data: {
            formCodeView: 'N6',
            formCode: 'N6&offset=0&length=10',
            linkCaseView: 'n6-main',
        } as IListReportRouteData,
    },
    { path: 'n7-main/:id/:form_io_id/:document_id', component: N7MainComponent },
    { path: 'n7-main', component: N7MainComponent },
    {
        path: 'n7-listview',
        component: N7ListviewComponent,
        data: {
            formCodeView: 'N7',
            formCode: 'N7&offset=0&length=10',
            linkCaseView: 'n7-main',
        } as IListReportRouteData,
    },
    { path: 'n10-main', component: N10MainComponent },
    { path: 'n10-main-add/:id/:form_io_id/:document_id', component: N10MainComponent },
    {
        path: 'n10-listview',
        component: N10ListviewComponent,
        data: {
            formCodeView: 'N10',
            formCode: 'N10&offset=0&length=10',
            linkCaseView: 'n10-main',
        } as IListReportRouteData,
    },
    { path: 'n11-main', component: N11MainComponent },
    { path: 'n11-main-add/:id/:form_io_id/:document_id', component: N11MainComponent },
    {
        path: 'n11-listview',
        component: N11ListviewComponent,
        data: {
            formCodeView: 'N11',
            formCode: 'N11&offset=0&length=10',
            linkCaseView: 'n11-main',
        } as IListReportRouteData,
    },

    { path: 'receipt-main', component: ReceiptMainComponent },
    { path: 'receipt-main/:id', component: ReceiptMainComponent },

    // ค.1
    {
        path: 'ko1-main/:id/:form_io_id/:document_id',
        component: CivilKo1MainComponent,
    },
    { path: 'ko1-main', component: CivilKo1MainComponent },
    {
        path: 'ko1-listview',
        component: CivilKo1ListviewComponent,
        data: {
            formCodeView: 'KO1',
            formCode: 'KO1&offset=0&length=10',
            linkCaseView: 'ko1-main',
        } as IListReportRouteData,
    },
    // ค.2
    {
        path: 'ko2-main/:id/:form_io_id/:document_id',
        component: CivilKo2MainComponent,
    },
    { path: 'ko2-main', component: CivilKo2MainComponent },
    {
        path: 'ko2-listview',
        component: CivilKo2ListviewComponent,
        data: {
            formCodeView: 'KO2',
            formCode: 'KO2&offset=0&length=10',
            linkCaseView: 'ko2-main',
        } as IListReportRouteData,
    },
    // ค.3
    {
        path: 'ko3-main/:id/:form_io_id/:document_id',
        component: CivilKo3MainComponent,
    },
    { path: 'ko3-main', component: CivilKo3MainComponent },
    {
        path: 'ko3-listview',
        component: CivilKo3ListviewComponent,
        data: {
            formCodeView: 'KO3',
            formCode: 'KO3&offset=0&length=10',
            linkCaseView: 'ko3-main',
        } as IListReportRouteData,
    },
    // ค.4
    {
        path: 'ko4-main/:id/:form_io_id/:document_id',
        component: CivilKo4MainComponent,
    },
    { path: 'ko4-main', component: CivilKo4MainComponent },
    {
        path: 'ko4-listview',
        component: CivilKo4ListviewComponent,
        data: {
            formCodeView: 'KO4',
            formCode: 'KO4&offset=0&length=10',
            linkCaseView: 'ko4-main',
        } as IListReportRouteData,
    },
    // ค.5
    {
        path: 'ko5-main/:id/:form_io_id/:document_id',
        component: CivilKo5MainComponent,
    },
    { path: 'ko5-main', component: CivilKo5MainComponent },
    {
        path: 'ko5-listview',
        component: CivilKo5ListviewComponent,
        data: {
            formCodeView: 'KO5',
            formCode: 'KO5&offset=0&length=10',
            linkCaseView: 'ko5-main',
        } as IListReportRouteData,
    },
    // ค.6
    {
        path: 'ko6-main/:id/:form_io_id/:document_id',
        component: CivilKo6MainComponent,
    },
    { path: 'ko6-main', component: CivilKo6MainComponent },
    {
        path: 'ko6-listview',
        component: CivilKo6ListviewComponent,
        data: {
            formCodeView: 'KO6',
            formCode: 'KO6&offset=0&length=10',
            linkCaseView: 'ko6-main',
        } as IListReportRouteData,
    },
    // ค.7
    {
        path: 'ko7-main/:id/:form_io_id/:document_id',
        component: CivilKo7MainComponent,
    },
    { path: 'ko7-main', component: CivilKo7MainComponent },
    {
        path: 'ko7-listview',
        component: CivilKo7ListviewComponent,
        data: {
            formCodeView: 'KO7',
            formCode: 'KO7&offset=0&length=10',
            linkCaseView: 'ko7-main',
        } as IListReportRouteData,
    },
    // ค.8
    {
        path: 'ko8-main/:id/:form_io_id/:document_id',
        component: CivilKo8MainComponent,
    },
    { path: 'ko8-main', component: CivilKo8MainComponent },
    {
        path: 'ko8-listview',
        component: CivilKo8ListviewComponent,
        data: {
            formCodeView: 'KO8',
            formCode: 'KO8&offset=0&length=10',
            linkCaseView: 'ko8-main',
        } as IListReportRouteData,
    },
    // ค.9
    {
        path: 'ko9-main/:id/:form_io_id/:document_id',
        component: CivilKo9MainComponent,
    },
    { path: 'ko9-main', component: CivilKo9MainComponent },
    {
        path: 'ko9-listview',
        component: CivilKo9ListviewComponent,
        data: {
            formCodeView: 'KO9',
            formCode: 'KO9&offset=0&length=10',
            linkCaseView: 'ko9-main',
        } as IListReportRouteData,
    },
    // ค.10
    {
        path: 'ko10-main/:id/:form_io_id/:document_id',
        component: CivilKo10MainComponent,
    },
    { path: 'ko10-main', component: CivilKo10MainComponent },
    {
        path: 'ko10-listview',
        component: CivilKo10ListviewComponent,
        data: {
            formCodeView: 'KO10',
            formCode: 'KO10&offset=0&length=10',
            linkCaseView: 'ko10-main',
        } as IListReportRouteData,
    },
    // ค.11
    {
        path: 'ko11-main/:id/:form_io_id/:document_id',
        component: CivilKo11MainComponent,
    },
    { path: 'ko11-main', component: CivilKo11MainComponent },
    {
        path: 'ko11-listview',
        component: CivilKo11ListviewComponent,
        data: {
            formCodeView: 'KO11',
            formCode: 'KO11&offset=0&length=10',
            linkCaseView: 'ko11-main',
        } as IListReportRouteData,
    },
    // ค.12
    {
        path: 'ko12-main/:id/:form_io_id/:document_id',
        component: CivilKo12MainComponent,
    },
    { path: 'ko12-main', component: CivilKo12MainComponent },
    {
        path: 'ko12-listview',
        component: CivilKo12ListviewComponent,
        data: {
            formCodeView: 'KO12',
            formCode: 'KO12&offset=0&length=10',
            linkCaseView: 'ko12-main',
        } as IListReportRouteData,
    },
    // ค.13
    {
        path: 'ko13-main/:id/:form_io_id/:document_id',
        component: CivilKo13MainComponent,
    },
    { path: 'ko13-main', component: CivilKo13MainComponent },
    {
        path: 'ko13-listview',
        component: CivilKo13ListviewComponent,
        data: {
            formCodeView: 'KO13',
            formCode: 'KO13&offset=0&length=10',
            linkCaseView: 'ko13-main',
        } as IListReportRouteData,
    },
    // ค.14
    {
        path: 'ko14-main/:id/:form_io_id/:document_id',
        component: CivilKo14MainComponent,
    },
    { path: 'ko14-main', component: CivilKo14MainComponent },
    {
        path: 'ko14-listview',
        component: CivilKo14ListviewComponent,
        data: {
            formCodeView: 'KO14',
            formCode: 'KO14&offset=0&length=10',
            linkCaseView: 'ko14-main',
        } as IListReportRouteData,
    },
    // ค.15
    {
        path: 'ko15-main/:id/:form_io_id/:document_id',
        component: CivilKo15MainComponent,
    },
    { path: 'ko15-main', component: CivilKo15MainComponent },
    {
        path: 'ko15-listview',
        component: CivilKo15ListviewComponent,
        data: {
            formCodeView: 'KO15',
            formCode: 'KO15&offset=0&length=10',
            linkCaseView: 'ko15-main',
        } as IListReportRouteData,
    },
    // ยผ.1
    { path: 'yp1-main/:id/:form_io_id/:document_id', component: Yp1MainComponent },
    { path: 'yp1-main', component: Yp1MainComponent },
    {
        path: 'yp1-listview',
        component: Yp1ListviewComponent,
        data: {
            formCodeView: 'YP1',
            formCode: 'YP1&offset=0&length=10',
            linkCaseView: 'yp1-main',
        } as IListReportRouteData,
    },
    // ตส
    { path: 'ts1-main/:id/:form_io_id/:document_id', component: Ts1MainComponent },
    { path: 'ts1-main', component: Ts1MainComponent },
    {
        path: 'ts1-listview',
        component: Ts1ListviewComponent,
        data: {
            formCodeView: 'TS1',
            formCode: 'TS1&offset=0&length=10',
            linkCaseView: 'ts1-main',
        } as IListReportRouteData,
    },
    { path: 'ts2-main/:id/:form_io_id/:document_id', component: Ts2MainComponent },
    { path: 'ts2-main', component: Ts2MainComponent },
    {
        path: 'ts2-listview', component: Ts2ListviewComponent,
        data: {
            formCodeView: 'TS2',
            formCode: 'TS2&offset=0&length=10',
            linkCaseView: 'ts2-main',
        } as IListReportRouteData,
    },
    // ยผ.2
    { path: 'yp2-main/:id/:form_io_id/:document_id', component: Yp2MaimComponent },
    { path: 'yp2-main', component: Yp2MaimComponent },
    {
        path: 'yp2-listview', component: Yp2ListviewComponent,
        data: {
            formCodeView: 'YP2',
            formCode: 'YP2&offset=0&length=10',
            linkCaseView: 'yp2-main',
        } as IListReportRouteData
    },
    // ยผ.3
    { path: 'yp3-main/:id', component: Yp3MainComponent },
    { path: 'yp3-main', component: Yp3MainComponent },
    {
        path: 'yp3-listview', component: Yp3ListviewComponent,
        data: {
            formCodeView: 'YP3',
            formCode: 'YP3&offset=0&length=10',
            linkCaseView: 'yp3-main',
        } as IListReportRouteData
    },

    {
        path: 'ef-list',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'EF',
            formCode: 'EF&offset=0&length=10',
            linkCaseView: 'ef-main',
        } as IListReportRouteData,
    },
    { path: 'ef-main/:id/:form_io_id/:document_id', component: EfMainComponent },
    { path: 'ef-main', component: EfMainComponent },

    {
        path: 'ed-list',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'ED',
            formCode: 'ED&offset=0&length=10',
            linkCaseView: 'ed-main',
        } as IListReportRouteData,
    },
    { path: 'ed-main/:id/:form_io_id/:document_id', component: EdAddComponent },
    { path: 'ed-main', component: EdAddComponent },

    {
        path: 'da-list',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'DA',
            formCode: 'DA&offset=0&length=10',
            linkCaseView: 'da-main',
        } as IListReportRouteData,
    },
    { path: 'da-main/:id/:form_io_id/:document_id', component: DaMainAddComponent },
    { path: 'da-main', component: DaMainAddComponent },

    { path: 'mn1-main', component: Mn1MainComponent },
    { path: 'mn2-main', component: Mn2MainComponent },
    { path: 'mn6-main', component: Mn6MainComponent },
    { path: 'sf1-main', component: Sf1MainComponent },
    { path: 'sf4-main', component: Sf4MainComponent },
    { path: 'sf6-main', component: Sf6MainComponent },
    { path: 'sc1-main', component: Sc1MainComponent },
    { path: 'sc2-main', component: Sc2MainComponent },
    { path: 'sc3-main', component: Sc3MainComponent },

    { path: 'at25-main', component: At25MainComponent }, // AT3
    { path: 'at4-main', component: At4MainComponent },
    { path: 'at5-main', component: At5MainComponent },
    { path: 'at6-main', component: At6MainComponent },
    { path: 'at7-main', component: At7MainComponent },
    { path: 'at8-main', component: At8MainComponent },
    { path: 'at9-main', component: At9MainComponent },
    { path: 'at10-main', component: At10MainComponent },
    { path: 'at11-main', component: At11MainComponent },
    { path: 'at12-main', component: At12MainComponent },
    { path: 'at13-main', component: At13MainComponent },
    { path: 'at14-main', component: At14MainComponent },
    { path: 'at15-main', component: At15MainComponent },
    { path: 'at16-main', component: At16MainComponent },
    { path: 'at17-main', component: At17MainComponent },
    { path: 'at18-main', component: At18MainComponent },
    { path: 'at19-main', component: At19MainComponent },
    { path: 'at20-main', component: At20MainComponent },
    { path: 'at21-main', component: At21MainComponent },
    { path: 'at22-main', component: At22MainComponent },
    { path: 'at23-main', component: At23MainComponent },
    { path: 'at24-main', component: At24MainComponent },
    { path: 'at25-main', component: At25MainComponent },
    { path: 'at26-main', component: At26MainComponent },
    { path: 'at27-main', component: At27MainComponent },
    { path: 'at29-main', component: At29MainComponent },
    { path: 'scc-main', component: SccMainComponent },
    { path: 'bo2-main', component: Bo2MainComponent },
    { path: 'tpmain', component: TpMainComponent },
    { path: 'tp-c-main', component: TpCMainComponent },
    { path: 'tp-cc-main', component: TpCcMainComponent },
    { path: 'pc1-main', component: Pc1MainComponent },
    { path: 'pc2-main', component: Pc2MainComponent },

    { path: 'pc5-main', component: Pc5MainComponent },
    { path: 'pc6-main', component: Pc6MainComponent },
    { path: 'pc8-main', component: Pc8MainComponent },
    { path: 'pc11-main', component: Pc11MainComponent },
    { path: 'pc12-main', component: Pc12MainComponent },
    { path: 'pc13-main', component: Pc13MainComponent },
    { path: 'pc14-main', component: Pc14MainComponent },
    { path: 'pc15-main', component: Pc15MainComponent },
    { path: 'iw-main', component: IwMainComponent },
    { path: 'rb-main', component: RbMainComponent },
    { path: 'tw-main', component: TwMainComponent },
    { path: 'tc-main', component: TcMainComponent },
    { path: 'ep-main', component: EpMainComponent },
    { path: 'ep-main/:id/:form_io_id/:document_id', component: EpMainComponent },
    { path: 'ep-main', component: EpMainComponent },
    {
        path: 'ep-listview',
        component: EpListviewComponent,
        data: {
            formCodeView: 'EP',
            formCode: 'EP&offset=0&length=10',
            linkCaseView: 'ep-main',
        } as IListReportRouteData,
    },
    { path: 'rs1-main', component: Rs1MainComponent },
    { path: 'rs1-main/:id/:form_io_id/:document_id', component: Rs1MainComponent },
    { path: 'rs1-main', component: Rs1MainComponent },
    {
        path: 'rs1-listview',
        component: Rs1ListviewComponent,
        data: {
            formCodeView: 'RS1',
            formCode: 'RS1&offset=0&length=10',
            linkCaseView: 'rs1-main',
        } as IListReportRouteData,
    },
    { path: 'edkids-main', component: EdkidsMainComponent },
    { path: 'eduse-main', component: EduseMainComponent },
    { path: 'edcopy-main', component: EdcopyMainComponent },

    // ด.2
    { path: 'd2-main/:id/:form_io_id/:document_id', component: D2MainComponent },
    { path: 'd2-main', component: D2MainComponent },
    {
        path: 'd2-listview', component: D2ListviewComponent,
        data: {
            formCodeView: 'D2',
            formCode: 'D2&offset=0&length=10',
            linkCaseView: 'd2-main',
        } as IListReportRouteData
    },
    // ด.3
    { path: 'd3-main/:id/:form_io_id/:document_id', component: D3MainComponent },
    { path: 'd3-main', component: D3MainComponent },
    {
        path: 'd3-listview', component: D3ListviewComponent,
        data: {
            formCodeView: 'D3',
            formCode: 'D3&offset=0&length=10',
            linkCaseView: 'd3-main',
        } as IListReportRouteData
    },
    // ด4
    { path: 'd4-main/:id/:form_io_id/:document_id', component: D4MainComponent },
    { path: 'd4-main', component: D4MainComponent },
    {
        path: 'd4-listview',
        component: D4ListviewComponent,
        data: {
            formCodeView: 'D4',
            formCode: 'D4&offset=0&length=10',
            linkCaseView: 'd4-main',
        } as IListReportRouteData,
    },

    // ด5
    { path: 'd5-main/:id/:form_io_id/:document_id', component: D5MainComponent },
    { path: 'd5-main', component: D5MainComponent },
    {
        path: 'd5-listview',
        component: D5ListviewComponent,
        data: {
            formCodeView: 'D5',
            formCode: 'D5&offset=0&length=10',
            linkCaseView: 'd5-main',
        } as IListReportRouteData,
    },
    {
        path: 'list-report-1',
        component: HistorySectionViewComponent,
        data: {
            // formCodeView: 'BMA_TXN_FORM_CH1_MAIN_ADMIN',
            // formCode: 'BMA_TXN_FORM_CH1_MAIN_ADMIN',
            // linkC
            formCodeView: 'CH1', aseView: 'case-view-report-1',
            formCode: 'CH1',
            linkCaseView: 'CH1&offset=0&length=10',
        } as IListReportRouteData,
    },
    { path: 'ch1-main/:id/:form_io_id/:document_id', component: Ch1MainComponent },
    { path: 'ch1-main', component: Ch1MainComponent },
    {
        path: 'list-report-2',
        component: Ch2MainListviewComponent,
        data: {
            formCodeView: 'BMA_TXN_FORM_CH2_MAIN',
            formCode: 'BMA_TXN_FORM_CH2_MAIN',
            linkCaseView: 'case-view-report-1',
        } as IListReportRouteData,
    },
    {
        path: 'list-report-3',
        component: Ch3MainListviewComponent,
        // component: HistorySectionViewComponent,
        data: {
            formCodeView: 'BMA_TXN_FORM_CH3_v2',
            formCode: 'BMA_TXN_FORM_CH3_v2',
            linkCaseView: 'case-view-report-3',
        } as IListReportRouteData,
    },
    {
        path: 'list-report-3',
        component: Ch3MainListviewComponent,
        data: {
            formCodeView: 'BMA_TXN_FORM_CH3_v2',
            formCode: 'BMA_TXN_FORM_CH3_v2',
            linkCaseView: 'case-view-report-3',
        } as IListReportRouteData,
    },

    {
        path: 'list-report-4',
        component: Ch4MainListviewComponent,
        data: {
            formCodeView: 'BMA_TXN_FORM_CH4_MAIN_v2',
            formCode: 'BMA_TXN_FORM_CH4_MAIN_v2',
            linkCaseView: 'case-view-report-4',
        } as IListReportRouteData,
    },
    {
        path: 'list-report-6',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'BMA_TXN_FORM_CH6',
            formCode: 'BMA_TXN_FORM_CH6',
            linkCaseView: 'case-view-report-6',
        } as IListReportRouteData,
    },
    {
        path: 'list-report-9',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'BMA_TXN_FORM_CH9',
            formCode: 'BMA_TXN_FORM_CH9',
            linkCaseView: 'case-view-report-9',
        } as IListReportRouteData,
    },
    { path: 'ch3-main/:id/:form_io_id/:document_id', component: Ch3MainComponent },
    { path: 'ch3-main', component: Ch3MainComponent },
    { path: 'ch3-bfc/:dataId/:invoiceId', component: Ch3BfcComponent },
    { path: 'ch3-bfc', component: Ch3BfcComponent },
    {
        path: 'ch3-listview',
        component: Ch3MainListviewComponent,
        data: {
            formCodeView: 'CH3',
            formCode: 'CH3&offset=0&length=10',
            linkCaseView: 'ch3-main',
        } as IListReportRouteData,
    },
    { path: 'ch4-main/:id/:form_io_id/:document_id', component: Ch4MainComponent },
    { path: 'ch4-main', component: Ch4MainComponent },
    { path: 'ch6-main/:id/:form_io_id/:document_id', component: Ch6MainComponent },
    { path: 'ch6-main', component: Ch6MainComponent },
    { path: 'ch9-main/:id/:form_io_id/:document_id', component: Ch9MainComponent },
    { path: 'ch9-main', component: Ch9MainComponent },

    {
        path: 'cls2-listview',
        component: Cls2ListviewComponent,
        data: {
            formCodeView: 'CLS2',
            formCode: 'CLS2&offset=0&length=10',
            linkCaseView: 'cls2-main',
        } as IListReportRouteData,
    },
    { path: 'cls2-main/:id/:form_io_id/:document_id', component: Cls2MainComponent },
    { path: 'cls2-main', component: Cls2MainComponent },
    {
        path: 'so1-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SO1',
            formCode: 'SO1&offset=0&length=10',
            linkCaseView: 'so1-main',
        } as IListReportRouteData,
    },
    { path: 'so1-main/:id/:form_io_id/:document_id', component: So1MainComponent },
    { path: 'so1-main', component: So1MainComponent },
    {
        path: 'so2-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SO2',
            formCode: 'SO2&offset=0&length=10',
            linkCaseView: 'so2-main',
        } as IListReportRouteData,
    },
    { path: 'so2-main/:id/:form_io_id/:document_id', component: So2MainComponent },
    { path: 'so2-main', component: So2MainComponent },

    {
        path: 'so6-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SO6',
            formCode: 'SO6&offset=0&length=10',
            linkCaseView: 'so6-main',
        } as IListReportRouteData,
    },
    { path: 'so6-main/:id/:form_io_id/:document_id', component: So6MainComponent },
    { path: 'so6-main', component: So6MainComponent },
    { path: 'so6-bfc', component: So6bfcComponent },

    {
        path: 'so7-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SO7',
            formCode: 'SO7&offset=0&length=10',
            linkCaseView: 'so7-main',
        } as IListReportRouteData,
    },
    { path: 'so7-main/:id/:form_io_id/:document_id', component: So7MainComponent },
    { path: 'so7-main', component: So7MainComponent },

    {
        path: 'so9-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SO9',
            formCode: 'SO9&offset=0&length=10',
            linkCaseView: 'so9-main',
        } as IListReportRouteData,
    },
    { path: 'so9-main/:id/:form_io_id/:document_id', component: So9MainComponent },
    { path: 'so9-main', component: So9MainComponent },

    {
        path: 'so11-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SO11',
            formCode: 'SO11&offset=0&length=10',
            linkCaseView: 'so11-main',
        } as IListReportRouteData,
    },
    { path: 'so11-main/:id/:form_io_id/:document_id', component: So11MainComponent },
    { path: 'so11-main', component: So11MainComponent },

    {
        path: 'so12-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SO12',
            formCode: 'SO12&offset=0&length=10',
            linkCaseView: 'so12-main',
        } as IListReportRouteData,
    },
    { path: 'so12-main/:id/:form_io_id/:document_id', component: So12MainComponent },
    { path: 'so12-main', component: So12MainComponent },

    {
        path: 'so13-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SO13',
            formCode: 'SO13&offset=0&length=10',
            linkCaseView: 'so13-main',
        } as IListReportRouteData,
    },
    { path: 'so13-main/:id/:form_io_id/:document_id', component: So13MainComponent },
    { path: 'so13-main', component: So13MainComponent },

    {
        path: 'so14-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SO14',
            formCode: 'SO14&offset=0&length=10',
            linkCaseView: 'so14-main',
        } as IListReportRouteData,
    },
    { path: 'so14-main/:id/:form_io_id/:document_id', component: So14MainComponent },
    { path: 'so14-main', component: So14MainComponent },
    { path: 'so14-bfc', component: So14bfcComponent },

    {
        path: 'to1-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'TO1',
            formCode: 'TO1&offset=0&length=10',
            linkCaseView: 'to1-main',
        } as IListReportRouteData,
    },
    { path: 'to1-main/:id/:form_io_id/:document_id', component: To1MainComponent },
    { path: 'to1-main', component: To1MainComponent },

    {
        path: 'to3-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'TO3',
            formCode: 'TO3&offset=0&length=10',
            linkCaseView: 'to3-main',
        } as IListReportRouteData,
    },
    { path: 'to3-main/:id/:form_io_id/:document_id', component: To3MainComponent },
    { path: 'to3-main', component: To3MainComponent },
    { path: 'to3-bfc', component: To3bfcComponent },

    {
        path: 'to4-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'TO4',
            formCode: 'TO4&offset=0&length=10',
            linkCaseView: 'to4-main',
        } as IListReportRouteData,
    },
    { path: 'to4-main/:id/:form_io_id/:document_id', component: To4MainComponent },
    { path: 'to4-main', component: To4MainComponent },

    {
        path: 'to5-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'TO5',
            formCode: 'TO5&offset=0&length=10',
            linkCaseView: 'to5-main',
        } as IListReportRouteData,
    },
    { path: 'to5-main/:id/:form_io_id/:document_id', component: To5MainComponent },
    { path: 'to5-main', component: To5MainComponent },

    {
        path: 'to7-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'TO7',
            formCode: 'TO7&offset=0&length=10',
            linkCaseView: 'to7-main',
        } as IListReportRouteData,
    },
    { path: 'to7-main/:id/:form_io_id/:document_id', component: To7MainComponent },
    { path: 'to7-main', component: To7MainComponent },

    {
        path: 'sn1-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SN1',
            formCode: 'SN1&offset=0&length=10',
            linkCaseView: 'sn1-main',
        } as IListReportRouteData,
    },
    { path: 'sn1-main/:id/:form_io_id/:document_id', component: Sn1MainComponent },
    { path: 'sn1-main', component: Sn1MainComponent },

    {
        path: 'sn5-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SN5',
            formCode: 'SN5&offset=0&length=10',
            linkCaseView: 'sn5-main',
        } as IListReportRouteData,
    },
    { path: 'sn5-main/:id/:form_io_id/:document_id', component: Sn5MainComponent },
    { path: 'sn5-main', component: Sn5MainComponent },

    {
        path: 'sn6-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SN6',
            formCode: 'SN6&offset=0&length=10',
            linkCaseView: 'sn6-main',
        } as IListReportRouteData,
    },
    { path: 'sn6-main/:id/:form_io_id/:document_id', component: Sn6MainComponent },
    { path: 'sn6-main', component: Sn6MainComponent },

    {
        path: 'sn8-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SN8',
            formCode: 'SN8&offset=0&length=10',
            linkCaseView: 'sn8-main',
        } as IListReportRouteData,
    },
    { path: 'sn8-main/:id/:form_io_id/:document_id', component: Sn8MainComponent },
    { path: 'sn8-main', component: Sn8MainComponent },

    {
        path: 'sn9-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SN9',
            formCode: 'SN9&offset=0&length=10',
            linkCaseView: 'sn9-main',
        } as IListReportRouteData,
    },
    { path: 'sn9-main/:id/:form_io_id/:document_id', component: Sn9MainComponent },
    { path: 'sn9-main', component: Sn9MainComponent },

    {
        path: 'sn10-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SN10',
            formCode: 'SN10&offset=0&length=10',
            linkCaseView: 'sn10-main',
        } as IListReportRouteData,
    },
    { path: 'sn10-main/:id/:form_io_id/:document_id', component: Sn10MainComponent },
    { path: 'sn10-main', component: Sn10MainComponent },

    {
        path: 'sg1-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SG1',
            formCode: 'SG1&offset=0&length=10',
            linkCaseView: 'sg1-main',
        } as IListReportRouteData,
    },
    { path: 'sg1-main/:id/:form_io_id/:document_id', component: Sg1MainComponent },
    { path: 'sg1-main', component: Sg1MainComponent },

    {
        path: 'sg3-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SG3',
            formCode: 'SG3&offset=0&length=10',
            linkCaseView: 'sg3-main',
        } as IListReportRouteData,
    },
    { path: 'sg3-main/:id/:form_io_id/:document_id', component: Sg3MainComponent },
    { path: 'sg3-main', component: Sg3MainComponent },

    {
        path: 'sg5-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SG5',
            formCode: 'SG5&offset=0&length=10',
            linkCaseView: 'sg5-main',
        } as IListReportRouteData,
    },
    { path: 'sg5-main/:id/:form_io_id/:document_id', component: Sg5MainComponent },
    { path: 'sg5-main', component: Sg5MainComponent },

    {
        path: 'sg6-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SG6',
            formCode: 'SG6&offset=0&length=10',
            linkCaseView: 'sg6-main',
        } as IListReportRouteData,
    },
    { path: 'sg6-main/:id/:form_io_id/:document_id', component: Sg6MainComponent },
    { path: 'sg6-main', component: Sg6MainComponent },

    {
        path: 'ks1-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'KS1',
            formCode: 'KS1&offset=0&length=10',
            linkCaseView: 'ks1-main',
        } as IListReportRouteData,
    },
    { path: 'ks1-main/:id/:form_io_id/:document_id', component: Ks1MainComponent },
    { path: 'ks1-main', component: Ks1MainComponent },

    // ปกครอง
    {
        path: 'at4-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT4',
            formCode: 'AT4&offset=0&length=10',
            linkCaseView: 'at4-main',
        } as IListReportRouteData,
    },
    { path: 'at4-main/:id', component: At4MainComponent },
    { path: 'at4-main', component: At4MainComponent },
    {
        path: 'at5-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT5',
            formCode: 'AT5&offset=0&length=10',
            linkCaseView: 'at5-main',
        } as IListReportRouteData,
    },
    { path: 'at5-main/:id', component: At5MainComponent },
    { path: 'at5-main', component: At5MainComponent },
    {
        path: 'at6-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT6',
            formCode: 'AT6&offset=0&length=10',
            linkCaseView: 'at6-main',
        } as IListReportRouteData,
    },
    { path: 'at6-main/:id', component: At6MainComponent },
    { path: 'at6-main', component: At6MainComponent },
    {
        path: 'at7-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT7',
            formCode: 'AT7&offset=0&length=10',
            linkCaseView: 'at7-main',
        } as IListReportRouteData,
    },
    { path: 'at7-main/:id', component: At7MainComponent },
    { path: 'at7-main', component: At7MainComponent },
    {
        path: 'at8-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT8',
            formCode: 'AT8&offset=0&length=10',
            linkCaseView: 'at8-main',
        } as IListReportRouteData,
    },
    { path: 'at8-main/:id', component: At8MainComponent },
    { path: 'at8-main', component: At8MainComponent },
    {
        path: 'at9-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT9',
            formCode: 'AT9&offset=0&length=10',
            linkCaseView: 'at9-main',
        } as IListReportRouteData,
    },
    { path: 'at9-main/:id', component: At9MainComponent },
    { path: 'at9-main', component: At9MainComponent },
    {
        path: 'at10-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT10',
            formCode: 'AT10&offset=0&length=10',
            linkCaseView: 'at10-main',
        } as IListReportRouteData,
    },
    { path: 'at10-main/:id', component: At10MainComponent },
    { path: 'at10-main', component: At10MainComponent },
    {
        path: 'at11-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT11',
            formCode: 'AT11&offset=0&length=10',
            linkCaseView: 'at11-main',
        } as IListReportRouteData,
    },
    { path: 'at11-main', component: At11MainComponent },
    { path: 'at11-main/:id', component: At11MainComponent },
    {
        path: 'at12-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT12',
            formCode: 'AT12&offset=0&length=10',
            linkCaseView: 'at12-main',
        } as IListReportRouteData,
    },
    { path: 'at12-main/:id', component: At12MainComponent },
    { path: 'at12-main', component: At12MainComponent },
    {
        path: 'at13-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT13',
            formCode: 'AT13&offset=0&length=10',
            linkCaseView: 'at13-main',
        } as IListReportRouteData,
    },
    { path: 'at13-main/:id', component: At13MainComponent },
    { path: 'at13-main', component: At13MainComponent },
    {
        path: 'at14-listview',
        component: At14ListviewComponent,
        data: {
            formCodeView: 'AT14',
            formCode: 'AT14&offset=0&length=10',
            linkCaseView: 'at14-main',
        } as IListReportRouteData,
    },
    { path: 'at14-main/:id', component: At14MainComponent },
    { path: 'at14-main', component: At14MainComponent },
    {
        path: 'at15-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT15',
            formCode: 'AT15&offset=0&length=10',
            linkCaseView: 'at15-main',
        } as IListReportRouteData,
    },
    { path: 'at15-main/:id', component: At15MainComponent },
    { path: 'at15-main', component: At15MainComponent },
    {
        path: 'at16-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT16',
            formCode: 'AT16&offset=0&length=10',
            linkCaseView: 'at16-main',
        } as IListReportRouteData,
    },
    { path: 'at16-main/:id', component: At16MainComponent },
    { path: 'at16-main', component: At16MainComponent },
    {
        path: 'at17-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT17',
            formCode: 'AT17&offset=0&length=10',
            linkCaseView: 'at17-main',
        } as IListReportRouteData,
    },
    { path: 'at17-main/:id', component: At17MainComponent },
    { path: 'at17-main', component: At17MainComponent },
    {
        path: 'at18-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT18',
            formCode: 'AT18&offset=0&length=10',
            linkCaseView: 'at18-main',
        } as IListReportRouteData,
    },
    { path: 'at18-main/:id', component: At18MainComponent },
    { path: 'at18-main', component: At18MainComponent },
    {
        path: 'at19-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT19',
            formCode: 'AT19&offset=0&length=10',
            linkCaseView: 'at19-main',
        } as IListReportRouteData,
    },
    { path: 'at19-main/:id', component: At19MainComponent },
    { path: 'at19-main', component: At19MainComponent },
    {
        path: 'at20-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT20',
            formCode: 'AT20&offset=0&length=10',
            linkCaseView: 'at20-main',
        } as IListReportRouteData,
    },
    { path: 'at20-main/:id', component: At20MainComponent },
    { path: 'at20-main', component: At20MainComponent },
    {
        path: 'at20-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT20',
            formCode: 'AT20&offset=0&length=10',
            linkCaseView: 'at20-main',
        } as IListReportRouteData,
    },
    { path: 'at20-main/:id', component: At20MainComponent },
    { path: 'at20-main', component: At20MainComponent },
    {
        path: 'at21-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT21',
            formCode: 'AT21&offset=0&length=10',
            linkCaseView: 'at21-main',
        } as IListReportRouteData,
    },
    { path: 'at21-main/:id', component: At21MainComponent },
    { path: 'at21-main', component: At21MainComponent },
    {
        path: 'at22-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT22',
            formCode: 'AT22&offset=0&length=10',
            linkCaseView: 'at22-main',
        } as IListReportRouteData,
    },
    { path: 'at22-main/:id', component: At22MainComponent },
    { path: 'at22-main', component: At22MainComponent },
    {
        path: 'at23-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT23',
            formCode: 'AT23&offset=0&length=10',
            linkCaseView: 'at23-main',
        } as IListReportRouteData,
    },
    { path: 'at23-main/:id', component: At23MainComponent },
    { path: 'at23-main', component: At23MainComponent },
    {
        path: 'at24-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT24',
            formCode: 'AT24&offset=0&length=10',
            linkCaseView: 'at24-main',
        } as IListReportRouteData,
    },
    { path: 'at24-main/:id', component: At24MainComponent },
    { path: 'at24-main', component: At24MainComponent },
    {
        path: 'at25-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT25',
            formCode: 'AT25&offset=0&length=10',
            linkCaseView: 'at25-main',
        } as IListReportRouteData,
    },
    { path: 'at25-main/:id', component: At25MainComponent },
    { path: 'at25-main', component: At25MainComponent },
    {
        path: 'at26-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT26',
            formCode: 'AT26&offset=0&length=10',
            linkCaseView: 'at26-main',
        } as IListReportRouteData,
    },
    { path: 'at26-main/:id', component: At26MainComponent },
    { path: 'at26-main', component: At26MainComponent },
    {
        path: 'at27-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'AT27',
            formCode: 'AT27&offset=0&length=10',
            linkCaseView: 'at27-main',
        } as IListReportRouteData,
    },
    { path: 'at27-main/:id', component: At27MainComponent },
    { path: 'at27-main', component: At27MainComponent },
    {
        path: 'at29-listview',
        component: At29ListviewComponent,
        data: {
            formCodeView: 'AT29',
            formCode: 'AT29&offset=0&length=10',
            linkCaseView: 'at29-main',
        } as IListReportRouteData,
    },
    { path: 'at29-main/:id', component: At29MainComponent },
    { path: 'at29-main', component: At29MainComponent },
    {
        path: 'bo2-listview',
        component: Bo2ListviewComponent,
        data: {
            formCodeView: 'BO2',
            formCode: 'BO2&offset=0&length=10',
            linkCaseView: 'bo2-main',
        } as IListReportRouteData,
    },
    { path: 'bo2-main/:id', component: Bo2MainComponent },
    { path: 'bo2-main', component: Bo2MainComponent },
    {
        path: 'mn1-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'MN1',
            formCode: 'MN1&offset=0&length=10',
            linkCaseView: 'mn1-main',
        } as IListReportRouteData,
    },
    { path: 'mn1-main/:id', component: Mn1MainComponent },
    { path: 'mn1-main', component: Mn1MainComponent },
    {
        path: 'mn2-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'MN2',
            formCode: 'MN2&offset=0&length=10',
            linkCaseView: 'mn2-main',
        } as IListReportRouteData,
    },
    { path: 'mn2-main/:id', component: Mn2MainComponent },
    { path: 'mn2-main', component: Mn2MainComponent },
    {
        path: 'mn6-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'MN6',
            formCode: 'MN6&offset=0&length=10',
            linkCaseView: 'mn6-main',
        } as IListReportRouteData,
    },
    { path: 'mn6-main/:id', component: Mn6MainComponent },
    { path: 'mn6-main', component: Mn6MainComponent },
    {
        path: 'pc1-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'PC1',
            formCode: 'PC1&offset=0&length=10',
            linkCaseView: 'pc1-main',
        } as IListReportRouteData,
    },
    { path: 'pc1-main/:id', component: Pc1MainComponent },
    { path: 'pc1-main', component: Pc1MainComponent },
    {
        path: 'pc2-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'PC2',
            formCode: 'PC2&offset=0&length=10',
            linkCaseView: 'pc2-main',
        } as IListReportRouteData,
    },
    { path: 'pc2-main/:id', component: Pc2MainComponent },
    { path: 'pc2-main', component: Pc2MainComponent },
    {
        path: 'sc1-listview',
        component: Sc1ListviewComponent,
        data: {
            formCodeView: 'SC1',
            formCode: 'SC1&offset=0&length=10',
            linkCaseView: 'sc1-main',
        } as IListReportRouteData,
    },
    { path: 'sc1-main/:id', component: Sc1MainComponent },
    { path: 'sc1-main', component: Sc1MainComponent },
    {
        path: 'sc2-listview',
        component: Sc2ListviewComponent,
        data: {
            formCodeView: 'SC2',
            formCode: 'SC2&offset=0&length=10',
            linkCaseView: 'sc2-main',
        } as IListReportRouteData,
    },
    { path: 'sc2-main/:id', component: Sc2MainComponent },
    { path: 'sc2-main', component: Sc2MainComponent },
    {
        path: 'sc3-listview',
        component: Sc3ListviewComponent,
        data: {
            formCodeView: 'SC3',
            formCode: 'SC3&offset=0&length=10',
            linkCaseView: 'sc3-main',
        } as IListReportRouteData,
    },
    { path: 'sc3-main/:id', component: Sc3MainComponent },
    { path: 'sc3-main', component: Sc3MainComponent },
    {
        path: 'scc-listview',
        component: SccListviewComponent,
        data: {
            formCodeView: 'SCc',
            formCode: 'SCc&offset=0&length=10',
            linkCaseView: 'scc-main',
        } as IListReportRouteData,
    },
    { path: 'scc-main/:id', component: SccMainComponent },
    { path: 'scc-main', component: SccMainComponent },
    {
        path: 'sf1-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SF1',
            formCode: 'SF1&offset=0&length=10',
            linkCaseView: 'sf1-main',
        } as IListReportRouteData,
    },
    { path: 'sf1-main/:id', component: Sf1MainComponent },
    { path: 'sf1-main', component: Sf1MainComponent },
    {
        path: 'sf4-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SF4',
            formCode: 'SF4&offset=0&length=10',
            linkCaseView: 'sf4-main',
        } as IListReportRouteData,
    },
    { path: 'sf4-main/:id', component: Sf4MainComponent },
    { path: 'sf4-main', component: Sf4MainComponent },
    {
        path: 'sf6-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SF6',
            formCode: 'SF6&offset=0&length=10',
            linkCaseView: 'sf6-main',
        } as IListReportRouteData,
    },
    { path: 'sf6-main/:id', component: Sf6MainComponent },
    { path: 'sf6-main', component: Sf6MainComponent },
    {
        path: 'sf10-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SF10',
            formCode: 'SF10&offset=0&length=10',
            linkCaseView: 'sf10-main',
        } as IListReportRouteData,
    },
    { path: 'sf10-main/:id', component: Sf10MainComponent },
    { path: 'sf10-main', component: Sf10MainComponent },
    {
        path: 'tp-c-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'TP-C',
            formCode: 'TP-C&offset=0&length=10',
            linkCaseView: 'tp-c-main',
        } as IListReportRouteData,
    },
    { path: 'tp-c-main/:id', component: TpCMainComponent },
    { path: 'tp-c-main', component: TpCMainComponent },
    {
        path: 'tp-cc-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'TP-CC',
            formCode: 'TP-CC&offset=0&length=10',
            linkCaseView: 'tp-cc-main',
        } as IListReportRouteData,
    },
    { path: 'tp-cc-main/:id', component: TpCcMainComponent },
    { path: 'tp-cc-main', component: TpCcMainComponent },
    {
        path: 'tp-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'TP',
            formCode: 'TP&offset=0&length=10',
            linkCaseView: 'tp-main',
        } as IListReportRouteData,
    },
    { path: 'tp-main/:id', component: TpMainComponent },
    { path: 'tp-main', component: TpMainComponent },

    // แจ้งเหตุรำคาญ
    {
        path: 'cp-listview',
        component: HistorySectionViewComponent,
        data: {
            formCodeView: 'CP',
            formCode: 'CP&offset=0&length=10',
            linkCaseView: 'cp-main',
        } as IListReportRouteData,
    },
    { path: 'cp-main/:id/:form_io_id/:document_id', component: CpMainComponent },
    { path: 'cp-main', component: CpMainComponent },

    { path: 'rb-main/:id/:form_io_id/:document_id', component: RbMainComponent },
    { path: 'rb-main', component: RbMainComponent },
    {
        path: 'rb-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'RB',
            formCode: 'RB&offset=0&length=10',
            linkCaseView: 'rb-main',
        } as IListReportRouteData
    },

    { path: 'sg-main/:id/:form_io_id/:document_id', component: SgMainComponent },
    { path: 'sg-main', component: SgMainComponent },
    {
        path: 'sg-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'SG',
            formCode: 'SG&offset=0&length=10',
            linkCaseView: 'sg-main',
        } as IListReportRouteData
    },
    { path: 'pc15-main/:id/:form_io_id/:document_id', component: Pc15MainComponent },
    { path: 'pc15-main', component: Pc15MainComponent },
    {
        path: 'pc15-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'PC15',
            formCode: 'PC15&offset=0&length=10',
            linkCaseView: 'pc15-main',
        } as IListReportRouteData
    },
    { path: 'pc5-main/:id/:form_io_id/:document_id', component: Pc5MainComponent },
    { path: 'pc5-main', component: Pc5MainComponent },
    {
        path: 'pc5-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'PC5',
            formCode: 'PC5&offset=0&length=10',
            linkCaseView: 'pc5-main',
        } as IListReportRouteData
    },
    { path: 'pc6-main/:id/:form_io_id/:document_id', component: Pc6MainComponent },
    { path: 'pc6-main', component: Pc6MainComponent },
    {
        path: 'pc6-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'PC6',
            formCode: 'PC6&offset=0&length=10',
            linkCaseView: 'pc6-main',
        } as IListReportRouteData
    },
    { path: 'iw-main/:id/:form_io_id/:document_id', component: IwMainComponent },
    { path: 'iw-main', component: IwMainComponent },
    {
        path: 'iw-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'IW',
            formCode: 'IW&offset=0&length=10',
            linkCaseView: 'iw-main',
        } as IListReportRouteData
    },
    { path: 'pc8-main/:id/:form_io_id/:document_id', component: Pc8MainComponent },
    { path: 'pc8-main', component: Pc8MainComponent },
    {
        path: 'pc8-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'PC8',
            formCode: 'PC8&offset=0&length=10',
            linkCaseView: 'pc8-main',
        } as IListReportRouteData
    },
    { path: 'tc-main/:id/:form_io_id/:document_id', component: TcMainComponent },
    { path: 'tc-main', component: TcMainComponent },
    {
        path: 'tc-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'TC',
            formCode: 'TC&offset=0&length=10',
            linkCaseView: 'tc-main',
        } as IListReportRouteData
    },
    { path: 'tw-main/:id/:form_io_id/:document_id', component: TwMainComponent },
    { path: 'tw-main', component: TwMainComponent },
    {
        path: 'tw-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'TW',
            formCode: 'TW&offset=0&length=10',
            linkCaseView: 'tw-main',
        } as IListReportRouteData
    },
    { path: 'pc11-main/:id/:form_io_id/:document_id', component: Pc11MainComponent },
    { path: 'pc11-main', component: Pc11MainComponent },
    {
        path: 'pc11-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'PC11',
            formCode: 'PC11&offset=0&length=10',
            linkCaseView: 'pc11-main',
        } as IListReportRouteData
    },
    { path: 'pc12-main/:id/:form_io_id/:document_id', component: Pc12MainComponent },
    { path: 'pc12-main', component: Pc12MainComponent },
    {
        path: 'pc12-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'PC12',
            formCode: 'PC12&offset=0&length=10',
            linkCaseView: 'pc12-main',
        } as IListReportRouteData
    },
    { path: 'pc13-main/:id/:form_io_id/:document_id', component: Pc13MainComponent },
    { path: 'pc13-main', component: Pc13MainComponent },
    {
        path: 'pc13-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'PC13',
            formCode: 'PC13&offset=0&length=10',
            linkCaseView: 'pc13-main',
        } as IListReportRouteData
    },
    { path: 'pc14-main/:id/:form_io_id/:document_id', component: Pc14MainComponent },
    { path: 'pc14-main', component: Pc14MainComponent },
    {
        path: 'pc14-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'PC14',
            formCode: 'PC14&offset=0&length=10',
            linkCaseView: 'pc14-main',
        } as IListReportRouteData
    },

    { path: 'edkids-main/:id/:form_io_id/:document_id', component: EdkidsMainComponent },
    { path: 'edkids-main', component: EdkidsMainComponent },
    {
        path: 'edkids-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'KIDS',
            formCode: 'KIDS&offset=0&length=10',
            linkCaseView: 'edkids-main',
        } as IListReportRouteData
    },
    { path: 'eduse-main/:id/:form_io_id/:document_id', component: EduseMainComponent },
    { path: 'eduse-main', component: EduseMainComponent },
    {
        path: 'eduse-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'USE',
            formCode: 'USE&offset=0&length=10',
            linkCaseView: 'eduse-main',
        } as IListReportRouteData
    },
    { path: 'edcopy-main/:id/:form_io_id/:document_id', component: EdcopyMainComponent },
    { path: 'edcopy-main', component: EdcopyMainComponent },
    {
        path: 'edcopy-listview', component: HistorySectionViewComponent,
        data: {
            formCodeView: 'COPY',
            formCode: 'COPY&offset=0&length=10',
            linkCaseView: 'edcopy-main',
        } as IListReportRouteData
    },

];
