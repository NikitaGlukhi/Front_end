import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Statement } from '../models/statement';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import { catchError } from 'rxjs/operators';
import { AppClientModel } from '../models/client';
import { AppProductModel } from '../models/product';

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

  createOrder(data: {product: AppProductModel, order: Statement}, client_id) {
    console.log(client_id);
    return this.http.post('api/statements', {
      data: data,
      client_id: client_id
    });
  }

  createOrder1(data: {recipient: AppClientModel, product1: AppProductModel, order1: Statement}, client_id) {
    console.log(data, client_id);
    return this.http.post('api/statements1', {
      data: data,
      client_id: client_id
    });
  }

  createOrder2(data: {sender: AppClientModel, recipient: AppClientModel, product2: AppProductModel, order2: Statement}) {
    console.log();
    return this.http.post('api/statements2', data);
  }

  getOrderData() {
    console.log('Got data of statements');
    return this.http.get('api/statement')
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
