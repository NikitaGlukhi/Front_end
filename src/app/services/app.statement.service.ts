import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Statement } from '../models/statement';

@Injectable()
export class AppStatementService {

  constructor(private http: HttpClient) {  }

  createOrder(order: Statement) {
    console.log(order);
    return this.http.post('api/statements', order);
  }
}
