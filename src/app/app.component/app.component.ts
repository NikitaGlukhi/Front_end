import { Component } from '@angular/core';
import { AppAuthService } from '../services/app.auth.service';
import { AppUserModel } from '../models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent {
  currentUser: AppUserModel;

  constructor(public auth: AppAuthService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    console.log('this.currentUser', this.currentUser);
  }
}
