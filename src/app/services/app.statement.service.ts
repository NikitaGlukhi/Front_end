import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';

import { Statement } from '../models/statement';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class AppStatementService {

  constructor(private http: HttpClient) {  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      console.error('An error occurred:', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    return new ErrorObservable(
      'Something bad happened; please try again later.');
  };

  createOrder(order: Statement, client_id, first_name, last_name, phone_number) {
    console.log(client_id);
    return this.http.post('api/statements', {
      order: order,
      client_id: client_id,
      sender_fn: first_name,
      sender_ln: last_name,
      sender_ph: phone_number
    });
  }

  createOrder1(order1: Statement, client_id, first_name, last_name, phone_number) {
    console.log(client_id);
    return this.http.post('api/statements1', {
      order1: order1,
      client_id: client_id,
      sender_fn1: first_name,
      sender_ln1: last_name,
      sender_ph1: phone_number
    });
  }

  createOrder2(order2: Statement) {
    console.log();
    return this.http.post('api/statements2', {
      order2: order2,
    });
  }

  addSender(order2: Statement) {
    console.log();
    return this.http.post('api/sender', {
      client: order2,
    });
  }

  addRecipient(order2: Statement) {
    return this.http.post('api/recipient', {
      client1: order2
    })
  }

  getOrderData() {
    console.log('Got data of statements');
    return this.http.get('api/statements')
      .pipe(
        catchError(this.handleError)
      );
  }

  approveOrder(id) {
    console.log(id);
     return this.http.put('api/approve/' + id, {})
       .pipe(
         catchError(this.handleError)
       );
  }

  refuseOrder(id) {
    console.log(id);
    return this.http.put('api/refuse/' + id, {})
      .pipe(
        catchError(this.handleError)
      );
  }

  myOrders(userId: number) {
    console.log(userId);
     return this.http.get('api/myorder/' + userId)
       .pipe(
         catchError(this.handleError)
       );
  }
}
