import { Component, OnInit } from '@angular/core';
import { AppAuthService } from '../services/app.auth.service';
import { NavbarService } from '../services/navbar.service';
import { AppClientModel } from '../models/client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

  export class AppComponent implements OnInit {
  currentUser: AppClientModel;

  constructor(public auth: AppAuthService, public nav: NavbarService) {}

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
