import { Injectable } from '@angular/core';
import { InternalCache } from '../common/cache';
import { User } from './user';

@Injectable({
    providedIn: 'root'
})
export class ClearDataService {

    constructor() { }

    public clearData() {
        User.Clear();
        InternalCache.DeleteAll();
    }
}
