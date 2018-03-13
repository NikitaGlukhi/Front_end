import { Component, OnInit } from '@angular/core';
import { AppUserModel } from '../models/user';
import { AppUserService } from '../services/app.user.service';

@Component({
  selector: 'profile',
  templateUrl: './app.profile.html',
  styleUrls: ['./app.profile.css']
})

export class AppProfileComponent implements OnInit {
  currentUser: AppUserModel;
  users: AppUserModel[] = [];

  constructor(private userService: AppUserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'))[0];
  }

  ngOnInit() {
    this.loadAllUsers();
  }

  private loadAllUsers() {
    this.userService.getAll().subscribe(users => {
      this.users = users
    });
  }
}
