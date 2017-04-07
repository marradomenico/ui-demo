"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var authentication_service_1 = require('../../authentication.service');
var dashboard_sidebar_items_service_1 = require('../dashboard-services/dashboard-sidebar-items.service');
var dashboard_menu_items_service_1 = require('../dashboard-services/dashboard-menu-items.service');
var DashboardMenuComponent = (function () {
    function DashboardMenuComponent(router, authenticationService, SidebarItemsServ, MenuItemsSevr) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.SidebarItemsServ = SidebarItemsServ;
        this.MenuItemsSevr = MenuItemsSevr;
    }
    DashboardMenuComponent.prototype.ngOnInit = function () {
    };
    DashboardMenuComponent.prototype.selectMenuItem = function (ItemIn) {
        this.SidebarItemsServ.unselectAllItems();
        this.MenuItemsSevr.unselectAllItems();
        ItemIn.selected = true;
    };
    DashboardMenuComponent.prototype.unselectAllItemsSidebar = function () {
        this.SidebarItemsServ.unselectAllItems();
    };
    DashboardMenuComponent.prototype.unselectAllItemsMenu = function () {
        this.MenuItemsSevr.unselectAllItems();
    };
    DashboardMenuComponent.prototype.goLogout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/login']);
    };
    DashboardMenuComponent = __decorate([
        core_1.Component({
            //selector: 'app-dashboard-menu',
            templateUrl: './dashboard-menu.component.html',
            styleUrls: ['./dashboard-menu.component.css'],
            providers: [authentication_service_1.AuthenticationService, dashboard_sidebar_items_service_1.DashboardSidebarItemsService, dashboard_menu_items_service_1.DashboardMenuItemsService]
        })
    ], DashboardMenuComponent);
    return DashboardMenuComponent;
}());
exports.DashboardMenuComponent = DashboardMenuComponent;
