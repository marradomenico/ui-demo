"use strict";
var UiMenuItem = (function () {
    function UiMenuItem() {
    }
    return UiMenuItem;
}());
exports.UiMenuItem = UiMenuItem;
exports.MENUITEMS = [
    { selected: false, text: 'Home', faIcon: 'fa-money', component: 'TBD' },
    { selected: true, text: 'Help', component: 'TBD' },
    { selected: false, faIcon: 'fa-user-circle', component: 'TBD', subItems: [
            { selected: false, faIcon: 'fa-cog', text: 'Settings', component: 'TBD' },
            { selected: false, faIcon: 'fa-address-card-o', text: 'Profile', component: 'TBD' },
            { selected: false, faIcon: 'fa-sign-out', text: 'Logout', component: 'TBD' }
        ] }
];
