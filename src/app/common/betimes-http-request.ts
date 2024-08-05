import { HttpClient, HttpHeaders, HttpRequest, HttpParams, HttpProgressEvent } from '@angular/common/http';
import { HttpStatusResult, HttpStatusResultValue } from './common-type';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { pathCombine } from './helper';
import { AppComponent } from '../app.component';

class BetimesHttpRequest<T> implements IRequestBuilder<T> {
    _url: string;
    _param: { [p: string]: string | number };
    _header: HttpHeaders;
    _responseType = "json";
    _reportProgress = false;
    _useSystemReulst: boolean;
    _criticalErrorDialog = true;
    _errorDialog = true;
    _method: string;
    _useCache: boolean;
    _useCacheInvalidate: boolean;
    _body: { [b: string]: any};
    _host: string;

    constructor(private http: HttpClient) {
        // this._header = new HttpHeaders({ 'Content-Type': 'application/json' });
    }

    public host(url: string): IRequestBuilder<T> {
        this._host = url;
        return this;
    }

    public api(url: string): IRequestBuilder<T> {
        this._url = url;
        return this;
    }
    public body(body: { [b: string]: any}): IRequestBuilder<T> {
        this._body = body;
        return this;
    }
    public queryString(param: { [p: string]: string | number }): IRequestBuilder<T> {
        this._param = param;
        return this;
    }
    public header(head: HttpHeaders | { [header: string]: string | string[] }): IRequestBuilder<T> {
        if (!(head instanceof HttpHeaders)) {
            this._header = new HttpHeaders(head);
        } else {
            this._header = head;
        }

        return this;
    }
    public responseType(r: "arraybuffer" | "blob" | "json"): IRequestBuilder<T> {
        this._responseType = r;
        return this;
    }

    public result<TResult>(): IRequestBuilder<TResult> {
        return this as unknown as IRequestBuilder<TResult>;
    }

    public useSystemResult(): IRequestBuilder<HttpStatusResult | HttpStatusResultValue<T>> {
        this._useSystemReulst = true;
        return this as any;
    }

    public reportProgress(): IRequestBuilder<HttpProgressEvent | HttpStatusResult> {
        this._reportProgress = true;
        this._useSystemReulst = true;
        return this as any;
    }

    public disableCriticalDialogError(): IRequestBuilder<T> {
        this._criticalErrorDialog = false;
        return this;
    }

    public disableDialogError(): IRequestBuilder<T> {
        this._errorDialog = false;
        return this;
    }

    public cache(): IRequestBuilder<T> {
        this._useCache = true;
        return this;
    }

    public invalidate(): IRequestBuilder<T> {
        this._useCacheInvalidate = true;
        return this;
    }

    public post(): Observable<T> {
        this._method = "POST";
        return this.send();
    }
    public get(): Observable<T> {
        this._method = "GET";
        return this.send();
    }
    public patch(): Observable<T> {
        this._method = "PATCH";
        return this.send();
    }
    public put(): Observable<T> {
        this._method = "PUT";
        return this.send();
    }
    public delete(): Observable<T> {
        this._method = "DELETE";
        return this.send();
    }

    private send(): Observable<T> {
        const urlWithbase = pathCombine(this._host ?? environment.config.baseConfig.apiUrl, this._url);
        let header = this._header;

        if (!header) {
            const contentType = new HttpRequest("POST", "", this._body).detectContentTypeHeader();
            if (contentType) {
                header = new HttpHeaders({ 'Content-Type': contentType });
            }
        }

        const request: BetimesRequest = new BetimesRequest(
            this._method,
            urlWithbase,
            this._body as any,
            {
                headers: header,
                responseType: this._responseType as any,
                reportProgress: this._reportProgress,
                params: this._param ? new HttpParams({ fromObject: <any>this._param }) : undefined
            }
        );

        request.displayError = this._errorDialog;
        request.useOnlyValue = this._useCache || !this._useSystemReulst;
        request.displayCriticalError = this._criticalErrorDialog;
        request.useCacheInvalidate = this._useCacheInvalidate;
        request.useCache = this._useCache;
        return this.http.request(request) as any;
    }
}

export class BetimesRequest extends HttpRequest<HttpStatusResult> {
    displayError: boolean;
    displayCriticalError: boolean;
    useOnlyValue: boolean;
    useCache: boolean;
    useCacheInvalidate: boolean;
    clone(update?: {
        headers?: HttpHeaders;
        reportProgress?: boolean;
        params?: HttpParams;
        responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
        withCredentials?: boolean;
        body?: any;
        method?: string;
        url?: string;
        setHeaders?: { [name: string]: string | string[] };
        setParams?: { [param: string]: string };
    }): BetimesRequest {
        const method = update.method || this.method;
        const url = update.url || this.url;
        const responseType = update.responseType || this.responseType;
        const body = (update.body !== undefined) ? update.body : this.body;
        const withCredentials =
            (update.withCredentials !== undefined) ? update.withCredentials : this.withCredentials;
        const reportProgress =
            (update.reportProgress !== undefined) ? update.reportProgress : this.reportProgress;
        let headers = update.headers || this.headers;
        let params = update.params || this.params;
        if (update.setHeaders !== undefined) {
            headers =
                Object.keys(update.setHeaders)
                    // tslint:disable-next-line: no-shadowed-variable
                    .reduce((headers, name) => headers.set(name, update.setHeaders[name]), headers);
        }
        if (update.setParams) {
            params = Object.keys(update.setParams)
                // tslint:disable-next-line: no-shadowed-variable
                .reduce((params, param) => params.set(param, update.setParams[param]), params);
        }
        const request = new BetimesRequest(
            method, url, body,
            {
                params, headers, reportProgress, responseType, withCredentials,
            }
        );
        request.displayCriticalError = this.displayCriticalError;
        request.displayError = this.displayError;
        request.useOnlyValue = this.useOnlyValue;
        request.useCache = this.useCache;
        request.useCacheInvalidate = this.useCacheInvalidate;
        return request;
    }
}

export class BetimesHttpResultError extends Error {
    constructor(private err: HttpStatusResult) {
        super(err.Message);
        const actualProto = new.target.prototype;
        if (Object.setPrototypeOf) {
            Object.setPrototypeOf(this, actualProto);
        } else {
            (this as any).__proto__ = actualProto;
        }
    }

    public get HttpResult(): HttpStatusResult {
        return this.err;
    }
}

interface IRequestBuilder<T> {
    api(url: string): IRequestBuilder<T>;
    host(url: string): IRequestBuilder<T>;
    body(body: { [b: string]: any }): IRequestBuilder<T>;
    queryString(param: { [p: string]: string | number }): IRequestBuilder<T>;
    header(head: HttpHeaders | { [header: string]: string | string[] }): IRequestBuilder<T>;
    responseType(r: "arraybuffer" | "blob" | "json" | "text"): IRequestBuilder<T>;
    reportProgress(): IRequestBuilder<HttpProgressEvent | HttpStatusResult>;
    result<TResult>(): IRequestBuilder<TResult>;
    useSystemResult(): IRequestBuilder<HttpStatusResult | HttpStatusResultValue<T>>;
    disableCriticalDialogError(): IRequestBuilder<T>;
    disableDialogError(): IRequestBuilder<T>;
    invalidate(): IRequestBuilder<T>;
    cache(): IRequestBuilder<T>;
    post(): Observable<T>;
    get(): Observable<T>;
    patch(): Observable<T>;
    put(): Observable<T>;
    delete(): Observable<T>;
}

export function req<T>(api?: string): IRequestBuilder<T> {
    return new BetimesHttpRequest(
        AppComponent.InjectorInstance.get(HttpClient)
    )
        .api(api)
        .result<T>();
}
