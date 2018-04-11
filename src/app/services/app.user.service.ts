import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { AppUserModel } from '../models/user';

@Injectable()
export class AppUserService {

  constructor(private http: HttpClient) {  }

  getAll() {
    console.log('Got data of users');
    return this.http.get<AppUserModel[]>('/api/users');
  }

  getClient() {
    return this.http.get('/api/client');
  }

  createUser(user: AppUserModel) {
    console.log(2222, user);
    return this.http.post('/api/users', user);
  }

  createModer(user: AppUserModel) {
    console.log(3333, user);
    return this.http.post('/api/moder', user);
  }

  getRecipient() {
    return this.http.get('api/users')
  }

  deleteUSer(user_id: number) {
    return this.http.delete('api/users' + user_id)
  }
}
