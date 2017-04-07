import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  animations: [
    trigger('sidebarState', [
      state('inactive', style({
        //width: (parseInt(window.getComputedStyle(document.body, null).getPropertyValue('font-size'))*2.7)+'px'
        width: '2.8em'
      })),
      state('active',   style({
        width: '18%'
      })),
      transition('inactive => active', animate('250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')), //= easeOutBack
      transition('active => inactive', animate('250ms cubic-bezier(0.6, -0.28, 0.735, 0.045)'))   //= easeInBack
    ]),
    trigger('contentState', [
      state('inactive', style({
        left: '2.8em'
      })),
      state('active',   style({
        left: '18%'
      })),
      transition('inactive => active', animate('250ms cubic-bezier(0.175, 0.885, 0.32, 1.275)')),
      transition('active => inactive', animate('250ms cubic-bezier(0.6, -0.28, 0.735, 0.045)'))
    ])
  ]
})
export class DashboardComponent implements OnInit {
  sidebarStateExp: string;
  contentStateExp: string;
  sidebarStateIcon: string;

  constructor(
    private router: Router
  ) {
    this.goActive();
  }

  goActive() {
    this.sidebarStateExp = 'active';
    this.contentStateExp = 'active';
    this.sidebarStateIcon = 'fa-angle-double-left';
  }
  goInactive() {
    this.sidebarStateExp = 'inactive';
    this.contentStateExp = 'inactive';
    this.sidebarStateIcon = 'fa-angle-double-right';
  }
  goToggle() {
    if(this.sidebarStateExp === 'active') { this.goInactive(); }
    else                                  { this.goActive(); }
  }

  ngOnInit() {
    this.router.navigate(['/dashboard', {outlets: {'menu': ['dashboardMenu'], 'sidebar': ['dashboardSidebar']}}]);
    //this.router.navigate(['/dashboard', {outlets: {'menu': ['dashboardMenu']}}]);
  }

}
