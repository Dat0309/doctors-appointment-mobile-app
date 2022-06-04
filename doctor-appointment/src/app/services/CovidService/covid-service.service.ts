/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Covid19 {
  Country: string;
  Confirmed: string;
  Deaths: string;
  Recovered: string;
  Active: string;
  Date: string;
}
@Injectable({
  providedIn: 'root'
})
export class CovidServiceService {

  apiUrl = 'https://api.covid19api.com/live/country/vietnam/status/confirmed/date/2022-06-01T13:13:30Z';
  constructor(private http: HttpClient) { }

  getData(): Observable<Covid19[]>{
    return this.http.get<Covid19[]>(`${this.apiUrl}`)
      .pipe(
        tap(users => console.log('Covid19 retrieved!')),
        catchError(this.handleError<Covid19[]>('Get covid19', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
