import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppAuthService {
  constructor(private http: HttpClient) {}

  login(e_mail: string, password: string) {
    return this.http.post<any>('/api/authenticate', { e_mail: e_mail, password: password })
      .map(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
        return user;
      });
  }

  isAuthentcated() {
    const token = localStorage.getItem('currentUser');

    if (token) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
