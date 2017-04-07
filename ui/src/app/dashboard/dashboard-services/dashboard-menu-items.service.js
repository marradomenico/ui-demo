"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var menu_items_1 = require('./menu-items');
var DashboardMenuItemsService = (function () {
    function DashboardMenuItemsService() {
        this.menuItems = menu_items_1.MENUITEMS;
    }
    DashboardMenuItemsService.prototype.getItems = function () {
        return this.menuItems;
    };
    DashboardMenuItemsService.prototype.unselectAllItems = function () {
        for (var i = 0, iMax = this.menuItems.length; i < iMax; i++) {
            this.menuItems[i].selected = false;
            if (this.menuItems[i].subItems) {
                for (var ii = 0, iiMax = this.menuItems[i].subItems.length; ii < iiMax; ii++) {
                    this.menuItems[i].subItems[ii].selected = false;
                }
            }
        }
    };
    DashboardMenuItemsService = __decorate([
        core_1.Injectable()
    ], DashboardMenuItemsService);
    return DashboardMenuItemsService;
}());
exports.DashboardMenuItemsService = DashboardMenuItemsService;
