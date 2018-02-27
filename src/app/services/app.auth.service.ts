import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class AppAuthService {
  constructor(private http: HttpClient) {}

  login(e_mail: string, password: string) {
    return this.http.post<any>('/api/authenticate', { e_mail: e_mail, password: password })
      .map(user => {
        if (user && user.token) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }
      });
  }
  logout() {
    localStorage.removeItem('currentUser');
  }
}