import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import {BehaviorSubject} from "rxjs/BehaviorSubject";


@Injectable()
export class AppAuthService {
  subject = new BehaviorSubject({});
  constructor(private http: HttpClient) {}

  login(e_mail: string, password: string) {
    return this.http.post('/api/authenticate', { e_mail: e_mail, password: password })
      .map(data => {
        if (data) {
          const user = JSON.stringify(data);
          localStorage.setItem('currentUser', user);
          this.subject.next(user)
        }
        return false;
      });
  }

  isAuthentcated() {
    if (localStorage.getItem('currentUser')) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
