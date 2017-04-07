import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UiItem }  from '../dashboard-services/ui-item';
import { DashboardSidebarItemsService } from '../dashboard-services/dashboard-sidebar-items.service';
import { DashboardMenuItemsService } from '../dashboard-services/dashboard-menu-items.service';

@Component({
  //selector: 'app-dashboard-sidebar',
  templateUrl: './dashboard-sidebar.component.html',
  styleUrls: ['./dashboard-sidebar.component.css'],
  providers: [DashboardSidebarItemsService, DashboardMenuItemsService]
})
export class DashboardSidebarComponent implements OnInit {
  sidebarItems : UiItem[];
  
  constructor(
    private router: Router,
    private SidebarItemsServ: DashboardSidebarItemsService,
    private MenuItemsSevr: DashboardMenuItemsService
  ) { }

  ngOnInit() {
  }
  
  selectItem(ItemIn: UiItem): void {
    this.SidebarItemsServ.unselectAllItems();
    this.MenuItemsSevr.unselectAllItems();
    ItemIn.selected = true;
    
    if(ItemIn.funcionToCall) {
      eval(ItemIn.funcionToCall);
    }
    if(ItemIn.component) {
      this.router.navigate(['/dashboard', {outlets: {'content': [ItemIn.component]}}]);  
    }
  }

}
