import { UiItem } from './ui-item';

export const SIDEBARITEMS: UiItem[] = [
     {selected:false, text:'Overview',        faIcon:'fa-adjust',    component:'dashboardOverview'}
    ,{selected:false, text:'Reports',         faIcon:'fa-area-chart',component:'dashboardHome'}
    ,{selected:false, text:'Analitycs',       faIcon:'fa-line-chart',component:'dashboardHome'}
    ,{selected:false, text:'Export',          faIcon:'fa-pie-chart', component:'dashboardHome'}
    ,{selected:false, text:'Nav item',        faIcon:'fa-money',     component:'dashboardHome'}
    ,{selected:false, text:'Nav item again',  faIcon:'fa-bitcoin',   component:'dashboardHome'}
    ,{selected:false, text:'One more nav',    faIcon:'fa-eur',       component:'dashboardHome'}
    ,{selected:false, text:'Another nav item',faIcon:'fa-rmb',       component:'dashboardHome'}
];