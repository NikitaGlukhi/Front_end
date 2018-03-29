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

  createOrder(order: Statement, user_id) {
    console.log(user_id);
    return this.http.post('api/statements', {
      order: order,
      user_id: user_id,

    });
  }

  createOrder1(order1: Statement, user_id) {
    console.log(user_id);
    return this.http.post('api/statements1', {
      order1: order1,
      user_id: user_id
    });
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
