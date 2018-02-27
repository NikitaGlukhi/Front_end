import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class AppService {

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

  getDriversData() {
    console.log('Got data of drivers');
    return this.http.get('api/drivers')
      .pipe(
        catchError(this.handleError)
      );
  }

  getCityData() {
    console.log('Got data of cities');
    return this.http.get('api/cities')
      .pipe(
        catchError(this.handleError)
      );
  }

  getOfficeData(city) {
    console.log(city);
    const options = city ?
      { params: new HttpParams().set('value', city) } : {};
    return this.http.get('api/offices', options )
      .pipe(
        catchError(this.handleError)
      )
  }
}
