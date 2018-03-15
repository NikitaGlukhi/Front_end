import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Statement } from '../models/statement';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';
import {catchError} from "rxjs/operators";

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
}
