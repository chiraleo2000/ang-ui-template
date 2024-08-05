/* eslint-disable object-shorthand */
import { locale } from 'devextreme/localization';
import dateLocalization from 'devextreme/localization/date';
import dxIntlDate from 'devextreme/localization/intl/date';

const customFormats = {
    datethai: {year:"numeric", month:"short", day:"numeric" },
    dateshorttimethai: {year:"numeric", month:"short", day:"numeric", hour: 'numeric', minute: 'numeric' },
    yyyy: { year: 'numeric' }
};

const CustomDevExtreamDate = {
    ...dxIntlDate,
    format: function(date, format) {
        if(!date) {
            return;
        }

        if(!format) {
            return date;
        }

        let intlFormat = undefined;
        if (typeof(format) === "string") {
            intlFormat = customFormats[format.toLowerCase()];
        } else if (typeof(format) === "object") {
            intlFormat = customFormats[format.type.toLowerCase()];
        }


        if (intlFormat) {
            return date.toLocaleString(locale(), intlFormat);
        }

        return dxIntlDate.format.apply(this, [date, format]);
    }
};


export class BetimesDevExtreamDateProvider {
    static register(): void {
        const root: any = dateLocalization;
        root.resetInjection();
        root.inject(CustomDevExtreamDate);
    }
}
