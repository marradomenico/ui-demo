"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var dashboard_sidebar_items_service_1 = require('../dashboard-services/dashboard-sidebar-items.service');
var DashboardSidebarComponent = (function () {
    function DashboardSidebarComponent(SidebarItemsServ) {
        this.SidebarItemsServ = SidebarItemsServ;
    }
    DashboardSidebarComponent.prototype.ngOnInit = function () {
        this.sidebarItems = this.sidebarItems.sidebarItems;
    };
    DashboardSidebarComponent.prototype.selectItem = function (ItemIn) {
        this.unselectAllItems();
        ItemIn.selected = true;
    };
    DashboardSidebarComponent.prototype.unselectAllItems = function () {
        for (var i = 0, iMax = this.sidebarItems.length; i < iMax; i++) {
            this.sidebarItems[i].selected = false;
        }
    };
    DashboardSidebarComponent = __decorate([
        core_1.Component({
            //selector: 'app-dashboard-sidebar',
            templateUrl: './dashboard-sidebar.component.html',
            styleUrls: ['./dashboard-sidebar.component.css'],
            providers: [dashboard_sidebar_items_service_1.DashboardSidebarItemsService]
        })
    ], DashboardSidebarComponent);
    return DashboardSidebarComponent;
}());
exports.DashboardSidebarComponent = DashboardSidebarComponent;
