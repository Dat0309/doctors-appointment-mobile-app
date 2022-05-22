/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FetchapiService } from '../fetchapi/fetchapi.service';
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
  specializations: Specialization;
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

  constructor(private http: HttpClient, private fetchAPI: FetchapiService) { }

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

  async create(doctors: any): Promise<any> {
    let id = '';
    await this.fetchAPI.post(`/doctors`, doctors)
      .then(
        (res) => {
          if (res.status === 201) {
            id = res.data._id;
            console.log('successful create user');
          } else {
            console.log(res.status);
            id = '';
          }
        }
      );
      return id;
  }

  update(id, doctors: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/doctors/${id}`, JSON.stringify(doctors), this.httpOptions)
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
