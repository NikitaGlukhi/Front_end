import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../services/app.user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavbarService } from '../services/navbar.service';
import {AppAlertService} from "../services/app.alert.service";

@Component({
  selector: 'moder-creation',
  templateUrl: './app.moder.html',
  styleUrls: ['./app.moder.css']
})

export class AppModerComponent implements OnInit {
  model: any = {};
  model5: any = {};
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: AppUserService,
    private alertService: AppAlertService,
    public nav: NavbarService
  ) {}

  moderCreate() {
    console.log(11111111111111111);
    this.loading = true;
    this.userService.createModer({user1: this.model, client1: this.model5}).subscribe(data => {
      alert('Модератор успешно зерегистрирован!');
      this.model = data;
      console.log(data);
      this.router.navigate(['/']);
    },
      error => {
      this.alertService.error(error);
      this.loading = false;
      });
  }

  ngOnInit() {
    this.nav.show();
  }
}
