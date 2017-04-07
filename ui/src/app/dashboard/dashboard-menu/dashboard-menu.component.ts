import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../authentication.service';
import { DashboardSidebarItemsService } from '../dashboard-services/dashboard-sidebar-items.service';
import { DashboardMenuItemsService } from '../dashboard-services/dashboard-menu-items.service';
import { UiItem } from '../dashboard-services/ui-item';
import { UiMenuItem } from '../dashboard-services/menu-items';

@Component({
  //selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css'],
  providers: [ AuthenticationService, DashboardSidebarItemsService, DashboardMenuItemsService ]
})
export class DashboardMenuComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private SidebarItemsServ: DashboardSidebarItemsService,
    private MenuItemsSevr: DashboardMenuItemsService
  ) { }

  ngOnInit() {
  }
  
  selectMenuItem(ItemIn: UiMenuItem): void {
    this.SidebarItemsServ.unselectAllItems();
    this.MenuItemsSevr.unselectAllItems();
    ItemIn.selected = true;
    if(ItemIn.component) {
      this.router.navigate(['/dashboard', {outlets: {'content': [ItemIn.component]}}]);  
    }
  }

  selectSubMenuItem(menuItemIn: UiMenuItem, subMenuItemIn: UiItem): void {
    this.SidebarItemsServ.unselectAllItems();
    this.MenuItemsSevr.unselectAllItems();
    menuItemIn.selected = true;
    if(subMenuItemIn.funcionToCall) {
      eval(subMenuItemIn.funcionToCall);
    }
    if(subMenuItemIn.component) {
      this.router.navigate(['/dashboard', {outlets: {'content': [subMenuItemIn.component]}}]);  
    }
    
  }
  
  goLogout(): void {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }

}
