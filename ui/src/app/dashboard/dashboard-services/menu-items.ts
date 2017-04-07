import { UiItem } from './ui-item';

export class UiMenuItem {
    selected: boolean;
    text?: string;
    faIcon?: string;
    component?: string;
    subItems?: UiItem[];
}

export const MENUITEMS: UiMenuItem[] = [
     {selected:false, faIcon: 'fa-home', text:'Home', component:'dashboardHome'}
    ,{selected:false, faIcon: 'fa-lightbulb-o', text:'Help', component:'dashboardHelp'}
    ,{selected:false, faIcon:'fa-user-circle', component:'TBD', subItems:[
         {selected:false, faIcon: 'fa-gears', text: 'Settings', component:'dashboardHome'}
        ,{selected:false, faIcon: 'fa-address-card-o', text: 'Profile', component:'dashboardProfile'}
        ,{selected:false, faIcon: 'fa-sign-out', text: 'Logout', funcionToCall:'this.goLogout();'}
     ]}
];

