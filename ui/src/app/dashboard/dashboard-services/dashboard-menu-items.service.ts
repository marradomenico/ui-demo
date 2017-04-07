import { Injectable } from '@angular/core';
import { UiMenuItem, MENUITEMS } from './menu-items';

@Injectable()
export class DashboardMenuItemsService {
    menuItems: UiMenuItem[];

    constructor() {
        this.menuItems = MENUITEMS;
    }
    
    getItems(): UiMenuItem[] {
        return this.menuItems;
    }
    
    unselectAllItems(): void {
        for(let i=0,iMax=this.menuItems.length;i<iMax;i++) {
            this.menuItems[i].selected = false;
            if(this.menuItems[i].subItems) {
                for(let ii=0,iiMax=this.menuItems[i].subItems.length;ii<iiMax;ii++) {
                    this.menuItems[i].subItems[ii].selected = false;
                }
            }
        }
    }

}