import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AppAuthService } from '../services/app.auth.service';
import { AppClientModel } from '../models/client'

@Injectable()
export class AuthAdminModerGuard implements CanActivate {
  currentUser: AppClientModel;
  constructor(private router: Router, private auth: AppAuthService) {  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.auth.subject.subscribe((data: any) => {
      if (JSON.parse(localStorage.getItem('currentUser'))) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        return
      }
      this.currentUser = data;
    });
    if (this.auth.isAuthentcated() && this.currentUser.client_status === 'admin' || this.currentUser.client_status === 'moderator') {
      return true
    }
    this.router.navigate(['/**']);
    return false;
  }
}
