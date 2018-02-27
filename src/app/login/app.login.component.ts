import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AppAlertService } from '../services/app.alert.service';
import { AppAuthService } from '../services/app.auth.service';

@Component({
  selector: 'login',
  templateUrl: './app.login.html'
})

export class AppLoginComponent implements OnInit {
  model: any = {};
  loading = false;
  returnUrl: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private alertService: AppAlertService,
    private authService: AppAuthService
  ) {}

  ngOnInit() {
    this.authService.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/'
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.e_mail, this.model.password)
      .subscribe(data => {
        this.router.navigate([this.returnUrl]);
      },
        error => {
        this.alertService.error(error);
        this.loading = false;
      })
  }
}
