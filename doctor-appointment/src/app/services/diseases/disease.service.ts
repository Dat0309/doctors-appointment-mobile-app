/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Disease {
  _id: string;
  name: string;
  description: string;
  category: string;
  thumb: string;
  symptom: string;
  dangerous_lv: string;
  spread: string;
  healing_day: string;
  object: string;
}

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {
  apiUrl = 'https://doctorapiv1.herokuapp.com/api';
  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient) {}

  getAll(): Observable<Disease[]> {
    return this.http.get<Disease[]>(`${this.apiUrl}/diseases`)
      .pipe(
        tap(users => console.log('Diseases retrieved!')),
        catchError(this.handleError<Disease[]>('Get diseases', []))
      );
  }

  getByID(id: string): Observable<Disease[]> {
    return this.http.get<Disease[]>(`${this.apiUrl}/diseases/${id}`)
      .pipe(
        tap(_ => console.log(`Disease fetched: ${id}`)),
        catchError(this.handleError<Disease[]>(`Get diseases id=${id}`))
      );
  }

  getDiseaseByIdSpecialization(id: string): Observable<Disease[]> {
    return this.http.get<Disease[]>(`${this.apiUrl}/diseases/specialization/${id}`)
      .pipe(
        tap(_ => console.log(`Disease fetched: ${id}`)),
        catchError(this.handleError<Disease[]>(`Get diseases id=${id}`))
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
