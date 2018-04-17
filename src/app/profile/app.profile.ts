import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../services/app.user.service';
import { AppStatementService } from '../services/app.statement.service';
import { NavbarService } from '../services/navbar.service';
import { AppClientModel } from '../models/client';

@Component({
  selector: 'profile',
  templateUrl: './app.profile.html',
  styleUrls: ['./app.profile.css']
})

export class AppProfileComponent implements OnInit {
  currentUser: AppClientModel;
  users: AppClientModel[] = [];
  Orders: any = [];

  constructor(private userService: AppUserService, private myOrder: AppStatementService, public nav: NavbarService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.nav.show();
    this.loadAllUsers();
    this.myOrder.myOrders(this.currentUser.client_id).subscribe(data => {
      this.Orders = data
    })
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users
    });
  }
}
