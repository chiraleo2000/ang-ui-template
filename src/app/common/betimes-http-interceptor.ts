/* eslint-disable no-case-declarations */
import { HttpInterceptor, HttpHandler, HttpEvent, HttpErrorResponse, HttpResponse }
    from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, filter } from 'rxjs/operators';
import { custom } from 'devextreme/ui/dialog';
import { Injectable } from '@angular/core';
import { InternalCache } from './cache';
import { HttpStatusResult, HttpStatusResultValue } from './common-type';
import { IsHttpResult } from './helper';
import { BetimesHttpResultError, BetimesRequest } from './betimes-http-request';
import { Dialog } from './dialog/dialog';

@Injectable()
export class BetimesHttpInterceptor implements HttpInterceptor {
    constructor(private _dialog: Dialog) { }

    intercept(req: BetimesRequest, next: HttpHandler): Observable<HttpEvent<any>> {
        if (!(req instanceof BetimesRequest)) {
            return next.handle(req);
        }

        const cacheName = `req:${req.urlWithParams}`;
        if (req.useCacheInvalidate) {
            InternalCache.Delete(cacheName);
        }
        else if (req.useCache) {
            const cache = InternalCache.Get(cacheName);
            if (cache) {
                return of(cache) as any;
            }
        }

        return next.handle(req).pipe(
            filter((event: HttpEvent<any>) => event.type === 1 || (event as any).type === 4),
            map(_ => {
                if (_.type === 1) {
                    return _;
                }
                const respone = _ as HttpResponse<any>;
                switch (req.responseType) {
                case "blob":
                    if (respone.body !== null && !(respone.body instanceof Blob)) {
                        if (req.displayCriticalError) {
                            this._dialog.error("เกิดข้อผิดพลาด", "ผลลัพธ์ไม่ได้อยู่ในรูปแบบ Blob", "ปิด");
                        }
                        throw new Error('ผลลัพธ์ไม่ได้อยู่ในรูปแบบ Blob');
                    }

                    /*
                            กรณีนี้จะเกิดขึ้นเมื่อ api ได้การตรวจสอบแล้วพบว่ามีข้อผิดพลาดเกิดขึ้น
                            จึงได้ส่งค่ากลับมาเป็นในรูปแบบ StatusResult
                        */
                    if (respone.body.type === "application/json") {
                        this.readJsonAsync(respone.body).then(r => {
                            if (IsHttpResult(r) && req.displayError) {
                                this._dialog.error("เกิดข้อผิดพลาด", r.Message, "ปิด");
                            }
                        });
                        throw new Error('ผลลัพธ์ไม่ได้อยู่ในรูปแบบที่ประมวลผลเป็น binary');
                    }
                    return respone.body;
                case "json":
                    this.checkError(respone.body, req);
                    const body = respone.body as HttpStatusResultValue<any>;
                    if (body.IsSuccess && req.useOnlyValue) {
                        if (req.method.toLowerCase() === "get" && req.useCache) {
                            InternalCache.Set(cacheName, JSON.stringify(body.Value));
                        }
                        return body.Value;
                    }
                    return body;
                }
                return respone;
            }),
            catchError(async (error) => {
                if (error instanceof HttpErrorResponse && req.displayCriticalError && error.status !== 401) {
                    let errorMessage = "เกิดปัญหาทางเซิฟเวอร์ไม่สามารถดำเนินการต่อได้";

                    switch (error.status) {
                    case 400:
                        errorMessage = "การส่งข้อมูลผิดรูปแบบ";
                        break;
                    case 404:
                        if (IsHttpResult(error.error)) {
                            errorMessage = error.error.Message;
                        } else if (error.error instanceof Blob && error.error.type === "application/json") {
                            const readReult = await this.readJsonAsync(error.error);
                            if (IsHttpResult(readReult)) {
                                errorMessage = readReult.Message;
                            }
                        } else {
                            errorMessage = "ไม่พบ URL ที่ร้องขอ";
                        }
                        break;
                    case 500:
                        if (IsHttpResult(error.error)) {
                            errorMessage = error.error.Message;
                        } else if (error.error instanceof Blob && error.error.type === "application/json") {
                            const readReult = await this.readJsonAsync(error.error);
                            if (IsHttpResult(readReult)) {
                                errorMessage = readReult.Message;
                            }
                        }
                        break;
                    }
                    this._dialog.error("เกิดข้อผิดพลาด", errorMessage, "ปิด");
                }

                InternalCache.Delete(cacheName);
                throw error;
            })
        );
    }

    checkError(httpResult: HttpStatusResult | any, req: BetimesRequest) {
        if (req.useOnlyValue) {
            if (!IsHttpResult(httpResult)) {
                if (req.displayCriticalError) {
                    this._dialog.error("เกิดข้อผิดพลาด", "ผลลัพธ์ไม่ได้อยู่ในรูปแบบ StatusResult", "ปิด");
                }
                throw new Error("ผลลัพธ์ไม่ได้อยู่ในรูปแบบ StatusResult");
            }

            if (!httpResult.IsSuccess) {
                if (req.displayError) {
                    this._dialog.error(`เกิดข้อผิดพลาด: ${httpResult.StatusCode}`, httpResult.Message, "ปิด");
                }
                throw new BetimesHttpResultError(httpResult);
            }
        }
    }

    readJsonAsync(blob: Blob): Promise<any> {
        return Observable.create(obs => {
            const blobReader = new FileReader();
            blobReader.readAsText(blob);
            blobReader.onload = () => {
                obs.next(JSON.parse(blobReader.result as string));
                obs.complete();
            };
        }).toPromise();
    }
}
