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

  getById(user_id: number) {
    return this.http.get('/api/users' + user_id);
  }

  createUser(user: AppUserModel) {
    console.log(2222, user);
    return this.http.post('/api/users', user);
  }

  deleteUSer(user_id: number) {
    return this.http.delete('api/users' + user_id)
  }
}
