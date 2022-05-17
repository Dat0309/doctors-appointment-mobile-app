/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { Specialization } from '../specialization/specialization.service';

export class Doctor {
  _id: string;
  user_id: string;
  first_name: string;
  last_name: string;
  date_of_birth: string;
  genre: string;
  description: string;
  telephone: string;
  avatar_url: string;
  facebook_id: string;
  zalo_id: string;
  province: string;
  district: string;
  ward: string;
  street: string;
  level_of_education: string;
  doctorss: Specialization;
  company_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class DoctorService {
  apiUrl = 'https://doctorapiv1.herokuapp.com/api';
  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctors`)
      .pipe(
        tap(users => console.log('Doctors retrieved!')),
        catchError(this.handleError<Doctor[]>('Get doctors', []))
      );
  }

  getByID(id: string): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctors/${id}`)
      .pipe(
        tap(_ => console.log(`Doctor fetched: ${id}`)),
        catchError(this.handleError<Doctor[]>(`Get doctors id=${id}`))
      );
  }

  delete(id: string): Observable<Doctor[]> {
    return this.http.delete<Doctor[]>(`${this.apiUrl}/doctors/${id}`, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Doctor deleted: ${id}`)),
        catchError(this.handleError<Doctor[]>('Delete Doctor'))
      );
  }

  create(doctors: Doctor): Observable<any> {
    return this.http.post<Doctor>(`${this.apiUrl}/doctors`, JSON.stringify(doctors), this.httpOptions)
      .pipe(
        catchError(this.handleError<Doctor>('Error occured'))
      );
  }

  update(id, doctors: Doctor): Observable<any> {
    return this.http.put(`${this.apiUrl}/doctors/${id}`,JSON.stringify(doctors), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Doctor updated: ${id}`)),
        catchError(this.handleError<Doctor[]>('Update doctors'))
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
