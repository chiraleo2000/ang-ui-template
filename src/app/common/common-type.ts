import { HttpHeaders, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";

export interface IHttpRequest {
    get<T>(endpoint: string, options: RequestOptions): Observable<T>;
    post<T>(endpoint: string, body: any, options: RequestOptions): Observable<T>;
    patch<T>(endpoint: string, body: any, options: RequestOptions): Observable<T>;
    put<T>(endpoint: string, body: any, options: RequestOptions): Observable<T>;
    delete<T>(endpoint: string, options: RequestOptions): Observable<T>;
}

export interface RequestOptions {
    headers?: HttpHeaders | { [header: string]: string | string[] };
    observe?: "body"; params?: HttpParams | { [param: string]: string | string[] };
    reportProgress?: boolean;
    responseType?: "json";
    withCredentials?: boolean;
}

export interface HttpStatusResult {
    Message: string;
    StatusCode: number;
    IsSuccess: boolean;
}

export interface HttpStatusResultValue<T> extends HttpStatusResult {
    Value: T;
}

export interface SubmissionMongo {
    backendId: number;
}

export interface IFormResultInfo {
    TACKING_CODE?: string;
    INST_ID?: number;
    RQ_MAIN_ID?: number;
    INVOICE_ID?: number;
}

export interface IMenu {
    MODULE_ID: number;
    MODULE_SEQ: string;
    MODULE_CODE: string;
    MODULE_NAME: string;
    MODULE_URL: string;
    MODULE_ICON: string;
    MODULE_NEW_WINDOW_FLAG: string;
    MODULE_PARENT_ID: number;
    MODULE_LEVEL: number;
    MODULE_MAIN_FLAG: string;
    PERMISSION: IMenuPermission;
}

export interface IMenuPermission {
    ADD: boolean;
    EDIT: boolean;
    DELETE: boolean;
    VIEW: boolean;
    UPLOAD: boolean;
    DOWNLOAD: boolean;
}

export interface FilterParam {
    recordStatus?: boolean;
    deleteFlag?: boolean;
}

export interface OffsetFilterParam extends FilterParam {
    offset?: number;
    length?: number;
    requireTotalCount?: boolean;
}


export interface IPagingResult<T> {
    TotalCount: number;
    Data: T[];
}

export interface FormCommandEvent<T> {
    command: FormCommandEventType;
    data?: T;
}

export enum FormCommandEventType {
    add,
    update
}

export interface LoadMenuParam {
    roleId: number;
    renew?: boolean;
}
