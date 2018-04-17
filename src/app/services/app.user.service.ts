import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { AppUserModel } from '../models/user';
import { AppClientModel } from '../models/client';


@Injectable()
export class AppUserService {

  constructor(private http: HttpClient) {  }

  getAll() {
    console.log('Got data of users');
    return this.http.get<AppClientModel[]>('/api/users');
  }

  createUser1(data: {user: AppUserModel, client: AppClientModel}) {
    return this.http.post('/api/users', data);
  }

  createModer(data: {user1: AppUserModel, client1: AppClientModel}) {
    return this.http.post('/api/moder', data);
  }

  getRecipient() {
    return this.http.get('api/users')
  }

  deleteUSer(user_id: number) {
    return this.http.delete('api/users' + user_id)
  }
}
