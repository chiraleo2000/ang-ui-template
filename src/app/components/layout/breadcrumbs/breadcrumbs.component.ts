import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IMenu } from 'src/app/common/common-type';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent {
    @Input() items: IMenu[];
    constructor(private _router: Router) {}


    onBreadcrumbItemClick(item: IMenu) {
        if (item.MODULE_URL) {
            this._router.navigate([item.MODULE_URL]);
        }
    }
}
