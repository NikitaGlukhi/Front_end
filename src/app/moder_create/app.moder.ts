import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../services/app.user.service';
import { ActivatedRoute, Router } from '@angular/router';
import {NavbarService} from "../services/navbar.service";

@Component({
  selector: 'moder-creation',
  templateUrl: './app.moder.html',
  styleUrls: ['./app.moder.css']
})

export class AppModerComponent implements OnInit {
  model2: any = {};
  loading = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: AppUserService,
    public nav: NavbarService
  ) {}

  moderCreate() {
    this.loading = true;
    this.userService.createModer(this.model2).subscribe(data => {
      alert('Модератор успешно зерегистрирован!');
      this.model2 = data;
      this.router.navigate(['/']);
    },
      error => {
      alert('При регистрации модератора произошла ошибка');
      this.loading = false;
      });
    this.userService.getClient().subscribe(data => {
      this.model2 = data;
    })
  }

  ngOnInit() {
    this.nav.show();
  }
}
