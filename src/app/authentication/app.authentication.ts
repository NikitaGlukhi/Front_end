import { Component } from '@angular/core';
import { AppUserService } from '../services/app.user.service';
import { AppAlertService } from '../services/app.alert.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AppAuthService } from '../services/app.auth.service';

@Component({
  selector: 'authentication',
  templateUrl: './app.authentication.html',
  styleUrls: ['./app.authentication.css', './app.email.css', './app.number.css', './app.password.css', './app.select.css']
})

export class AppAuthenticationComponent {
  model: any = {};
  loading = false;

  condition: boolean = true;

  toggle() {
    this.condition = !this.condition;
  }

  constructor(private route: ActivatedRoute,
              private router: Router,
              private userService: AppUserService,
              private alertService: AppAlertService,
              private authService: AppAuthService) {}

  register() {
    this.loading = true;
    this.userService.createUser(this.model)
      .subscribe(data => {
          this.alertService.success('Registration successful', true);
          this.model = data;
          this.router.navigate(['/'])
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        }
      )
  }

  login() {
    this.loading = true;
    this.authService.login(this.model.e_mail, this.model.password)
      .subscribe(data => {
          this.router.navigate(['/']);
        },
        error => {
          this.alertService.error(error);
          this.loading = false;
        })
  }
}
