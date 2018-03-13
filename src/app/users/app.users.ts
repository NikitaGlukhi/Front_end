import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../services/app.user.service';

@Component({
  selector: 'users',
  templateUrl: './app.users.html',
  styleUrls: ['./app.users.css']
})

export class AppUsersComponent implements OnInit {
users: any = [];

constructor(private userService: AppUserService) { }
  ngOnInit() {
    console.log('Got data of users');
    this.userService.getAll().subscribe(users => {
      this.users = users
    })
  }
}
