import { EventEmitter } from '@angular/core';

export class EventNotificationCenter {
    private static _eventBag: Map<string, EventEmitter<any>> = new Map();

    public static on(eventName: string): EventEmitter<any> {
        let event = EventNotificationCenter._eventBag.get(eventName);
        if (!event) {
            event = new EventEmitter<any>();
            EventNotificationCenter._eventBag.set(eventName, event);
        }
        return event;
    }

    public static clear() {
        this._eventBag.forEach(_ => _.unsubscribe());
        this._eventBag.clear();
    }

}

export enum StandardEventName {
    RoleChanged = "RoleChanged"
}
