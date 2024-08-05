/* eslint-disable no-useless-escape */
import { HttpStatusResultValue } from "./common-type";

export function trimObject(obj: any): void {
    if (obj) {
        Object.keys(obj).forEach((k) => (obj[k] == null || obj[k] === undefined || obj[k] === "") && delete obj[k]);
    }
}

export function pathCombine(...args: string[]) {
    return args.map((part, i) => {
        if (!part) {
            return "";
        }

        if (i === 0) {
            return part.trim().replace(/[\/]*$/g, '');
        } else {
            return part.trim().replace(/(^[\/]*|[\/]*$)/g, '');
        }
    }).filter(x => x.length).join('/');
}

export function adjustTimezone(myDate, myTimezone) {
    const offset = isNaN(myTimezone) ? new Date().getTimezoneOffset() : parseFloat(myTimezone) * 60;
    return new Date(myDate.getTime() + offset * 60 * 1000);
}

export function parseIntStrict(num) {
    return (num !== null && num !== '' && !isNaN(parseInt(num, 10))) ? parseInt(num, 10) : null;
}

export function getMaxDate(month, year) {
    let res = 31;
    if (month != null) {
        if (month === 4 || month === 6 || month === 9 || month === 11) {
            res = 30;
        }
        if (year !== null && month === 2) {
            res = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0) ? 29 : 28;
        }
    }
    return res;
}

export function parseDate(myDate, myTimezone) {
    let res = null;
    if (myDate !== undefined && myDate !== null) {
        if (myDate instanceof Date) {
            res = myDate;
        } else {
            if (typeof myDate === 'number' || typeof myDate === 'string') {
                // Parse date.
                if (typeof myDate === 'number') {
                    res = new Date(parseInt(myDate.toString(), 10));
                } else {
                    res = new Date(myDate);
                }
                // Adjust timezone.
                res = adjustTimezone(res, myTimezone);
            }
        }
    }
    return res;
}


export function delayTimer(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export function IsHttpResult(obj: any): obj is HttpStatusResultValue<any> {
    return obj && "IsSuccess" in obj;
}

