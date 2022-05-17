/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Company {
  _id: string;
  name: string;
  description: string;
  image: string;
  province: string;
  district: string;
  ward: string;
  street: string;
}

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  apiUrl = 'https://doctorapiv1.herokuapp.com/api';
  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/company`)
      .pipe(
        tap(users => console.log('Users retrieved!')),
        catchError(this.handleError<Company[]>('Get Company', []))
      );
  }

  getByID(id: string): Observable<Company[]> {
    return this.http.get<Company[]>(`${this.apiUrl}/company/${id}`)
      .pipe(
        tap(_ => console.log(`Company fetched: ${id}`)),
        catchError(this.handleError<Company[]>(`Get Company id=${id}`))
      );
  }

  delete(id: string): Observable<Company[]> {
    return this.http.delete<Company[]>(`${this.apiUrl}/company/${id}`, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Company deleted: ${id}`)),
        catchError(this.handleError<Company[]>('Delete Company'))
      );
  }

  create(company: Company): Observable<any> {
    return this.http.post<Company>(`${this.apiUrl}/company`, JSON.stringify(company), this.httpOptions)
      .pipe(
        catchError(this.handleError<Company>('Error occured'))
      );
  }

  update(id, company: Company): Observable<any> {
    return this.http.put(`${this.apiUrl}/company/${id}`,JSON.stringify(company), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Company updated: ${id}`)),
        catchError(this.handleError<Company[]>('Update Company'))
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
