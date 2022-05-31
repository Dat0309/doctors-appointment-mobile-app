import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Specialization {
  _id: string;
  id: string;
  name: string;
  description: string;
  thumb: string;
}

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {
  apiUrl = 'https://doctorapiv1.herokuapp.com/api';
  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Specialization[]> {
    return this.http.get<Specialization[]>(`${this.apiUrl}/specialization`)
      .pipe(
        tap(users => console.log('Speci retrieved!')),
        catchError(this.handleError<Specialization[]>('Get specialization', []))
      );
  }

  getByID(id: string): Observable<Specialization[]> {
    return this.http.get<Specialization[]>(`${this.apiUrl}/specialization/${id}`)
      .pipe(
        tap(_ => console.log(`Specialization fetched: ${id}`)),
        catchError(this.handleError<Specialization[]>(`Get specialization id=${id}`))
      );
  }

  delete(id: string): Observable<Specialization[]> {
    return this.http.delete<Specialization[]>(`${this.apiUrl}/specialization/${id}`, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Specialization deleted: ${id}`)),
        catchError(this.handleError<Specialization[]>('Delete Specialization'))
      );
  }

  create(specialization: Specialization): Observable<any> {
    return this.http.post<Specialization>(`${this.apiUrl}/specialization`, JSON.stringify(specialization), this.httpOptions)
      .pipe(
        catchError(this.handleError<Specialization>('Error occured'))
      );
  }

  update(id, specialization: Specialization): Observable<any> {
    return this.http.put(`${this.apiUrl}/specialization/${id}`,JSON.stringify(specialization), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Specialization updated: ${id}`)),
        catchError(this.handleError<Specialization[]>('Update specialization'))
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
