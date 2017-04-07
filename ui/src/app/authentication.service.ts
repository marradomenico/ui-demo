import { Injectable } from '@angular/core';
import { Http, Jsonp, Response, URLSearchParams, Headers, RequestOptions, RequestOptionsArgs } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AuthenticationService {
    public token: string;
    
    //private loginUrl = 'https://service-demo-marradomenico.c9users.io/service/index.php/info/lista';
    private loginUrl = 'https://service-demo-marradomenico.c9users.io/service/index.php/login';
    private infoUserUrl = 'https://service-demo-marradomenico.c9users.io/service/index.php/info/infoUser';
    
    constructor(
        private jsonp: Jsonp,
        private http: Http
    ) {
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }

    login(username: string, password: string): Promise<boolean> {
        console.log("login("+username+")");
        let params = new URLSearchParams();
        username = ''+username;
        password = ''+password;
        params.set('username', username);
        params.set('password', password);
        //params.set('callback', 'JSONP_CALLBACK');
        
        return this.http
                .get(this.loginUrl, { search: params } )
                .toPromise()
                .then((response: Response)=> {
                    // login successful if there's a jwt token in the response
                    console.log("===============");
                    console.log("RESPONSE:");
                    console.log(response);
                    console.log("===============");
                    console.log(response.json());
                    console.log("===============");
                    
                    let token = response.json() && response.json().token;
                    if (token) {
                        // set token property
                        this.token = token;
                        console.log(JSON.stringify({ username: username, token: token }));
                        // store username and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
                        localStorage.setItem('token', token);
                        // return true to indicate successful login
                        return true;
                    } else {
                        // return false to indicate failed login
                        return false;
                    }
                    
                })
                .catch(this.handleError);
    }
    
    getUsers(): Promise<boolean> {
        // add authorization header with jwt token
        
        //let headers = new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('currentUser') });
        let params = new URLSearchParams();
        params.set('test', 'testVal');
        //let options = new RequestOptions({ headers: headers });
        
        //let options = new RequestOptions();
        //options.headers = new Headers();
        //options.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));

        let headers = new Headers({
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            'Accept': 'application/json, text/plain, */*'
        });
        //headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
        let options = new RequestOptions({ headers: headers });


        console.log("options:");
        console.log(options);

        //let roa = merge();
        
        // get users from api
        return this.http
            .get(this.infoUserUrl, options)
            .toPromise()
            .then((response: Response) => response.json())
            .catch(this.handleError);
    }
    
    private handleError(error: any): Promise<any> {
        // In a real world app, you might use a remote logging infrastructure
        let errMsg: string;
        if (error instanceof Response) {
            
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
            
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.log(errMsg);
        return Promise.reject(error.message || error);
    }
    
    logout(): void {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    }

}