/* eslint-disable @typescript-eslint/unbound-method */
import { Pipe, PipeTransform } from '@angular/core';
import 'dayjs/plugin/duration'
import * as duration from 'dayjs/plugin/duration'
import * as dayjs from 'dayjs'
@Pipe({
    name: 'durationFormat'
})
export class DurationFormatPipe implements PipeTransform {

    constructor() {
        dayjs.extend(duration);
    }

    transform(duration: number, unit: duration.DurationUnitType = "millisecond"): any {
        const momentDuration: any = dayjs.duration(duration, unit);
        return momentDuration.format(this.customFormat);
    }

    customFormat() {
        const self: any = this;
        if (self.duration.asYears() >= 1 && self.duration.months() < 1) {
            return "y [ปี] d [วัน]";
        }

        if (self.duration.asYears() >= 1 && self.duration.days() < 1) {
            return "y [ปี] M [เดือน]";
        }

        return self.duration.asDays() >= 1 ? "y [ปี] M [เดือน] d [วัน]" : "h [ชั่วโมง] m [นาที]";
    }
}
