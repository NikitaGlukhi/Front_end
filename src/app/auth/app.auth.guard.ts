import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './app.auth.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate() {
    const isSignedIn = this.auth.isAuthenticated();

    if (!isSignedIn) {
      this.router.navigate(['**']);
    }
    return isSignedIn;
  }
}

