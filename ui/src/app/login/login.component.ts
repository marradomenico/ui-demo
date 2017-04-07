import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ AuthenticationService ]
})
export class LoginComponent implements OnInit {
  InUser: string;
  InPwd: string;
  error = '';
  TxtButton: string;

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
    this.InUser = undefined;
    this.InPwd = undefined;
    this.TxtButton = "=> LOG IN <=";
  }
  
  goLogIn() {
    console.log("["+this.InUser+"]-["+this.InPwd+"]");
    this.error= '';
    this.TxtButton = "<i class=\"fa fa-spinner fa-pulse\"></i>";
    this.authenticationService.login(this.InUser,this.InPwd).then(response => {
      if(response === true) {
        this.router.navigate(['/dashboard']);
        this.TxtButton = "=> LOG IN <=";
      } else {
        this.error = 'Username or password is incorrect !';
        this.TxtButton = "=> LOG IN <=";
      }
    }).catch(e => {
      this.error = 'Login service unavailable ! =>['+e+']';
      this.TxtButton = "=> LOG IN <=";
    });
    
  }
  
  closeAlert() {
    this.error= '';
  }

}
