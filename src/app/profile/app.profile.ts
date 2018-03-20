import { Component, OnInit } from '@angular/core';
import { AppUserModel } from '../models/user';
import { AppUserService } from '../services/app.user.service';
import { AppStatementService } from '../services/app.statement.service';

@Component({
  selector: 'profile',
  templateUrl: './app.profile.html',
  styleUrls: ['./app.profile.css']
})

export class AppProfileComponent implements OnInit {
  currentUser: AppUserModel;
  users: AppUserModel[] = [];
  Orders: any = [];

  constructor(private userService: AppUserService, private myOrder: AppStatementService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.loadAllUsers();
    this.myOrder.myOrders(this.currentUser.user_id).subscribe(data => {
      this.Orders = data
    })
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users
    });
  }
}
