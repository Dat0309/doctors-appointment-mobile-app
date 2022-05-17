/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Appointment {
  _id: string;
  name: string;
  doctor: string;
  customer: string;
  province: string;
  district: string;
  ward: string;
  street: string;
  contact: string;
  start_time: string;
  end_time: string;
}

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  apiUrl = 'https://doctorapiv1.herokuapp.com/api';
  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/appointment/all`)
      .pipe(
        tap(appointment => console.log('Appoinment retrieved!')),
        catchError(this.handleError<Appointment[]>('Get appointment', []))
      );
  }

  getAllByDoctorId(id: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/appointment/doctor/${id}`)
      .pipe(
        tap(_ => console.log(`Appointment fetched: ${id}`)),
        catchError(this.handleError<Appointment[]>(`Get user id=${id}`))
      );
  }

  getAllByCustomerId(id: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/appointment/customer/${id}`)
      .pipe(
        tap(_ => console.log(`Appointment fetched: ${id}`)),
        catchError(this.handleError<Appointment[]>(`Get user id=${id}`))
      );
  }

  getById(id: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/appointment/${id}`)
      .pipe(
        tap(_ => console.log(`Appointment fetched: ${id}`)),
        catchError(this.handleError<Appointment[]>(`Get user id=${id}`))
      );
  }

  create(appointment: Appointment): Observable<any> {
    return this.http.post<Appointment>(`${this.apiUrl}/appointment`, JSON.stringify(appointment), this.httpOptions)
      .pipe(
        catchError(this.handleError<Appointment>('Error occured'))
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
