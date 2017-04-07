import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { LoginComponent }     from '../login/login.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { DashboardMenuComponent } from '../dashboard/dashboard-menu/dashboard-menu.component';
import { DashboardContentComponent } from '../dashboard/dashboard-content/dashboard-content.component';
import { DashboardSidebarComponent } from '../dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardHelpComponent } from '../dashboard/dashboard-help/dashboard-help.component';
import { DashboardHomeComponent } from '../dashboard/dashboard-home/dashboard-home.component';
import { DashboardOverviewComponent } from '../dashboard/dashboard-overview/dashboard-overview.component';
import { DashboardProfileComponent } from '../dashboard/dashboard-profile/dashboard-profile.component';
import { ContainerComponent } from '../container/container.component';
import { AuthGuard }          from '../auth.guard';

const routes: Routes = [
  { path: 'login',              component: LoginComponent },
  { path: 'dashboard',          component: DashboardComponent, canActivate: [AuthGuard], children: [
    { path: 'dashboardMenu',      component: DashboardMenuComponent, outlet: 'menu'},
    { path: 'dashboardSidebar',   component: DashboardSidebarComponent, outlet: 'sidebar'},
    { path: 'dashboardHelp',      component: DashboardHelpComponent, outlet: 'content'},
    { path: 'dashboardHome',      component: DashboardHomeComponent, outlet: 'content'},
    { path: 'dashboardOverview',  component: DashboardOverviewComponent, outlet: 'content'},
    { path: 'dashboardProfile',   component: DashboardProfileComponent, outlet: 'content'},
    { path: 'dashboardContent',   component: DashboardContentComponent, outlet: 'content'}
  ]},
  { path: 'container',          component: ContainerComponent, canActivate: [AuthGuard] },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule {}
