import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../../authentication.service';

@Component({
  //selector: 'app-dashboard-profile',
  templateUrl: './dashboard-profile.component.html',
  styleUrls: ['./dashboard-profile.component.css']
})
export class DashboardProfileComponent implements OnInit {
  private loading: boolean;
  private responseTime: number;

  constructor(
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.loading = true;
    let startTime = new Date().getTime();
    
    this.authenticationService.getUsers()
    .then(response => {
      let endTime = new Date().getTime();
      this.responseTime = (endTime - startTime);
      console.log("RESPONSE:::");
      console.log(response);
      this.loading = false;
    }).catch(e => {
      console.log("ERROR:::");
      console.log(e);
    });
  }

}
