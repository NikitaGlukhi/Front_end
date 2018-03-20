import { Component, OnInit } from '@angular/core';
import { AppAuthService } from '../services/app.auth.service';
import { AppUserModel } from '../models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent implements OnInit {
  currentUser: AppUserModel;

  constructor(public auth: AppAuthService) {}

  ngOnInit() {
    this.auth.subject.subscribe((data: any) => {
      if (JSON.parse(localStorage.getItem('currentUser'))) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return
      }
      this.currentUser = data;
      console.log(this.currentUser);
    });
  }
}
