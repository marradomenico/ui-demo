import { Injectable } from '@angular/core';
import { UiItem }  from './ui-item';
import { SIDEBARITEMS } from './sidebar-items';

@Injectable()
export class DashboardSidebarItemsService {
    sidebarItems: UiItem[];

    constructor() {
        this.sidebarItems = SIDEBARITEMS;
    }

    getItems(): UiItem[] {
        return this.sidebarItems;
    }
    
    unselectAllItems(): void {
        for(let i=0, iMax=this.sidebarItems.length;i<iMax;i++) {
            this.sidebarItems[i].selected = false;
        }
    }

}
