import { Component, OnInit } from '@angular/core';
import { AppUserService } from '../services/app.user.service';
import { AppAlertService } from '../services/app.alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppAuthService } from '../services/app.auth.service';
import { NavbarService } from '../services/navbar.service';

@Component({
  selector: 'authentication',
  templateUrl: './app.authentication.html',
  styleUrls: ['./app.authentication.css']
})

export class AppAuthenticationComponent implements OnInit {
  model: any = {};
  model5: any = {};
  loading = false;
  returnUrl: string;

  condition = true;

  toggle() {
    this.condition = !this.condition;
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: AppUserService,
              private alertService: AppAlertService,
              private authService: AppAuthService,
              private nav: NavbarService) {}

  register() {
    this.loading = true;
    this.userService.createUser1({user: this.model, client: this.model5}).subscribe(data => {
      console.log(data);
      this.alertService.success('Registration successful', true);
      this.model = data;
      this.router.navigate(['/']);
    },
      error => {
      this.alertService.error(error);
      this.loading = false
      })
  }

  ngOnInit() {
    this.nav.hide();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/homepage';
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.e_mail, this.model.password)
      .subscribe(data => {
          this.router.navigate([this.returnUrl])
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        })
  }
}
