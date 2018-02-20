import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AppUserService } from '../services/app.user.service';
import { AppAlertService } from '../services/app.alert.service';

@Component({
  selector: 'register',
  templateUrl: 'app.register.html'
})

export class AppRegisterComponent {
  model: any = {};
  loading = false;

  constructor(private router: Router, private userService: AppUserService, private alertService: AppAlertService) {}

  register() {
    this.loading = true;
    this.userService.createUser(this.model)
      .subscribe(data => {
        this.alertService.success('Registration successful', true);
        this.router.navigate(['/login'])
      },
        error => {
        this.alertService.error(error);
        this.loading = false;
        }
      )
  }
}
