import { Injectable } from '@angular/core';
import { Dialog } from './dialog';
import { custom } from 'devextreme/ui/dialog';
import { Subject } from 'rxjs';

@Injectable()
export class DevExtreamDialog extends Dialog {
    private _dialogQueue: DialogQueue[];
    private _isCreateStack = false;

    constructor() {
        super();
        this._dialogQueue = [];
    }

    info(title: string, message?: string, btnText?: string): Promise<void> {
        return this._runDialog({
            title,
            message,
            type: DialogType.Info,
            buttons: [
                {
                    text: btnText || "ตกลง"
                }
            ]
        });
    }

    error(title: string, message?: string, btnText?: string): Promise<void> {
        console.error(message);
        return this._runDialog({
            title,
            message,
            type: DialogType.Error,
            buttons: [
                {
                    text: btnText || "ตกลง"
                }
            ]
        });
    }

    warning(title: string, message?: string, btnText?: string): Promise<void> {
        return this._runDialog({
            title,
            message,
            type: DialogType.Warning,
            buttons: [
                {
                    text: btnText || "ตกลง"
                }
            ]
        });
    }

    confirm(title: string, message?: string, okText?: string, cancelText?: string): Promise<boolean> {
        return new Promise(r => {
            custom({
                title,
                messageHtml: `<div class="text-center"></div><br><h4>${message}</h4>`,
                buttons: [
                    {
                        icon: "check", text: okText || "ใช่", type: "success", focusStateEnabled: false,
                        onClick: () => r(true)
                    },
                    {
                        icon: "close", text: cancelText || "ไม่", type: "danger",
                        onClick: () => r(false)
                    }
                ]
            }).show();
        });
    }

    private _runDialog(structure: DialogStructure): Promise<void> {
        let dialog: InternalDevExtreamDialog;
        const resolver: Subject<void> = new Subject<void>();

        if (this._dialogQueue.length > 0) {
            this._dialogQueue.push({
                structure,
                resolver
            });
            this._stackDialog();

        } else {
            dialog = this._createDialog(structure);
            dialog.show();
            this._dialogQueue.push({
                structure,
                intenralDialog: dialog,
                resolver
            });
        }

        this._updateStack();
        return resolver.toPromise();
    }

    private _createDialog(structure: DialogStructure): InternalDevExtreamDialog {
        const button = [...structure.buttons];

        button[0].onClick = () => {
            let dialogQueue = this._dialogQueue[0];
            dialogQueue.resolver.complete();
            this._dialogQueue.shift();
            if (this._dialogQueue.length > 1) {
                dialogQueue = this._dialogQueue[0];
                dialogQueue.intenralDialog = this._createDialog(dialogQueue.structure);
                dialogQueue.intenralDialog.show();
            } else {
                this._unstackDialog();
            }
        };

        if (this._isCreateStack) {
            button.push({
                text: `ปิด (${this._dialogQueue.length - 1})`,
                onClick: () => {
                    this._dialogQueue.forEach(d => d.resolver.complete());
                    this._dialogQueue.length = 0;
                    this._isCreateStack = false;
                },
                elementAttr: { id: "stackBtn" }
            });
        }

        const dialog: InternalDevExtreamDialog = custom({
            title: structure.title,
            messageHtml: structure.message,
            buttons: button
        });

        return dialog;
    }

    private _stackDialog(): void {
        if (this._dialogQueue.length === 0 || this._isCreateStack) {
            return;
        }

        const openDialog = this._dialogQueue[0];
        openDialog.intenralDialog.hide();
        this._isCreateStack = true;
        setTimeout(() => {
            openDialog.intenralDialog = this._createDialog(openDialog.structure);
            openDialog.intenralDialog.show();
        });
    }

    private _updateStack(): void {
        if (!this._isCreateStack) {
            return;
        }

        const stackBtn = document.querySelectorAll("#stackBtn .dx-button-text").item(0);
        if (stackBtn) {
            stackBtn.textContent = `ปิด (${this._dialogQueue.length - 1})`;
        }
    }

    private _unstackDialog(): void {
        if (this._dialogQueue.length <= 0 || !this._isCreateStack) {
            return;
        }

        const openDialog = this._dialogQueue[0];
        this._isCreateStack = false;
        openDialog.intenralDialog = this._createDialog(openDialog.structure);
        openDialog.intenralDialog.show();
    }
}

enum DialogType {
    Info,
    Warning,
    Error
}

interface InternalDevExtreamDialog {
    show(): Promise<any>;
    hide(value?): Promise<any>;
}

interface DialogStructure {
    title?: string;
    message?: string;
    type?: DialogType;
    buttons?: Partial<{
        text?: string;
        icon?: string;
        elementAttr?: Record<string, any>;
        onClick(): any;
    }>[];
}

interface DialogQueue {
    structure: DialogStructure;
    intenralDialog?: InternalDevExtreamDialog;
    resolver: Subject<void>;
}
