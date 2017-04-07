"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/toPromise');
var AuthenticationService = (function () {
    function AuthenticationService(jsonp) {
        this.jsonp = jsonp;
        //private loginUrl = 'https://service-demo-marradomenico.c9users.io/service/index.php/info/lista';
        this.loginUrl = 'https://service-demo-marradomenico.c9users.io/service/index.php/login';
        this.infoUserUrl = 'https://service-demo-marradomenico.c9users.io/service/index.php/info/infoUser';
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        console.log("login(" + username + ")");
        var params = new http_1.URLSearchParams();
        username = '' + username;
        password = '' + password;
        params.set('username', username);
        params.set('password', password);
        params.set('callback', 'JSONP_CALLBACK');
        return this.jsonp
            .get(this.loginUrl, { search: params })
            .toPromise()
            .then(function (response) {
            // login successful if there's a jwt token in the response
            console.log("===============");
            console.log("RESPONSE:");
            console.log(response);
            console.log("===============");
            console.log(response.json());
            console.log("===============");
            var token = response.json() && response.json().token;
            if (token) {
                // set token property
                _this.token = token;
                console.log(JSON.stringify({ username: username, token: token }));
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.getUsers = function () {
        // add authorization header with jwt token
        var headers = new http_1.Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('currentUser') });
        var params = new http_1.URLSearchParams();
        params.set('callback', 'JSONP_CALLBACK');
        var options = new http_1.RequestOptions({ headers: headers });
        //let roa = merge();
        // get users from api
        return this.jsonp
            .get(this.infoUserUrl, merge({ headers: headers }))
            .toPromise()
            .then(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    AuthenticationService.prototype.handleError = function (error) {
        // In a real world app, you might use a remote logging infrastructure
        var errMsg;
        if (error instanceof http_1.Response) {
            console.log("===========");
            console.log("===========");
            console.log("===========");
            console.log(error.json());
            console.log("===========");
            console.log("===========");
            console.log("===========");
            console.log(error);
            console.log("===========");
            console.log("===========");
            console.log("===========");
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Promise.reject(error.message || error);
    };
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    AuthenticationService = __decorate([
        core_1.Injectable()
    ], AuthenticationService);
    return AuthenticationService;
}());
exports.AuthenticationService = AuthenticationService;
