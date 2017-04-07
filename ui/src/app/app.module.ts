import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
//import { MaterialModule } from '@angular/material'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerMainComponent } from './container-main/container-main.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AppRoutingModule }     from './app-routing/app-routing.module';
import { ContainerComponent } from './container/container.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AuthenticationService } from './authentication.service';
import { ClickStopPropagationDirective } from './click-stop-propagation.directive';
import { DashboardMenuComponent } from './dashboard/dashboard-menu/dashboard-menu.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';
import { HoverPointerDirective } from './hover-pointer.directive';
import { DashboardSidebarComponent } from './dashboard/dashboard-sidebar/dashboard-sidebar.component';
import { DashboardHelpComponent } from './dashboard/dashboard-help/dashboard-help.component';
import { DashboardHomeComponent } from './dashboard/dashboard-home/dashboard-home.component';
import { DashboardOverviewComponent } from './dashboard/dashboard-overview/dashboard-overview.component';
import { DashboardProfileComponent } from './dashboard/dashboard-profile/dashboard-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    ContainerMainComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ContainerComponent,
    LoginComponent,
    ClickStopPropagationDirective,
    DashboardMenuComponent,
    DashboardContentComponent,
    HoverPointerDirective,
    DashboardSidebarComponent,
    DashboardHelpComponent,
    DashboardHomeComponent,
    DashboardOverviewComponent,
    DashboardProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthenticationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
