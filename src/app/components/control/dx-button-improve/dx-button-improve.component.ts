/* eslint-disable @angular-eslint/component-selector */
import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectorRef } from '@angular/core';
import dxButton from 'devextreme/ui/button';

@Component({
    // tslint:disable-next-line: component-selector
    selector: 'dx-button-improve',
    templateUrl: './dx-button-improve.component.html'
})
export class DxButtonImproveComponent {
    @Input() widgetClass: string;
    @Input() text: string;
    @Input() type: string;
    @Input() icon: string;
    @Input() height: number | string;
    @Input() hint: string;
    @Input() width: number | string;
    @Input() disabled: boolean;
    @Input() visible = true;
    @Input() waitIcon = "fas fa-spinner fa-pulse";
    @Input() waitText: string;
    @Input() stylingMode: string;
    @Input() disableOnWait = false;
    @Output() clicked = new EventEmitter<DxButtonImproveEvent>();
    isWait = false;

    private _oldIcon: string;
    private _oldText: string;
    private _widget: dxButton;

    constructor(private cd: ChangeDetectorRef) { }

    onInitialized(e) {
        this._widget = e.component;
    }

    onClicked(e) {
        if (this.isWait) {
            return;
        }

        this.clicked.emit({
            event: e,
            startWait: () => this.startWait(),
            stopWait: () => this.stopWait()
        });
    }

    public click(): void {
        (this._widget.element() as any).click();
    }

    public startWait() {
        this.isWait = true;
        this._oldIcon = this.icon;
        this.icon = this.waitIcon;

        if (this.waitText) {
            this._oldIcon = this.text;
            this.text = this.waitText;
        }
        this.disabled = this.disableOnWait;
    }

    public stopWait() {
        this.isWait = false;
        this.icon = this._oldIcon;
        this.disabled = false;

        if (this.waitText) {
            this.text = this._oldIcon;
        }
        this.cd.markForCheck();
    }
}

export interface DxButtonImproveEvent {
    event: any;
    startWait: () => void;
    stopWait: () => void;
}
