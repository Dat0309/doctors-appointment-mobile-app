/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Appointment {
  _id: string;
  name: string;
  doctor: {
    _id: string;
  };
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

  getAllByCustomerId(id: string): Observable<any> {
    return this.http.get<Appointment[]>(`${this.apiUrl}/appointment/customer/${id}`)
      .pipe(
        tap(_ => console.log(`Appointment fetched: ${id}`)),
        catchError(this.handleError<Appointment[]>(`Get appoinment id=${id}`))
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

  async createByHTTP(appoinment: any): Promise<any> {
    let id = '';
    await this.http.post(`${this.apiUrl}/appointment`, JSON.stringify(appoinment), this.httpOptions)
      .subscribe(
        (res: any) => {
          if (res.status === 201) {
            console.log('created appointment');
            id = res._id;
          } else {
            id = '';
          }
        }
      );
    return id;
  }

  async update(id: string): Promise<boolean> {
    const obj = {
      status: 'done'
    };
    let check = true;
    await this.http.put(`${this.apiUrl}/appointment/${id}`, JSON.stringify(obj), this.httpOptions)
      .subscribe(
        (res: any) => {
          if (res.status === 201) {
            console.log('created appointment');
            check = true;
            return;
          } else {
            console.log(res.error);
            check = false;
          }
        }
      );
    return check;
  }

  async delete(id: string): Promise<boolean> {
    let check = false;
    await this.http.delete(`${this.apiUrl}/doctors/${id}`, this.httpOptions)
      .subscribe((res: any) => {
        if (res.status === 200) {
          console.log('deleted appointment');
          check = true;
          return;
        } else {
          check = false;
        }
      });
    return check;
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }
}
