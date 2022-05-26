/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { FetchapiService } from '../fetchapi/fetchapi.service';
import { Specialization } from '../specialization/specialization.service';
import { StorageService } from '../storage/storage.service';

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
  specializations: Specialization[];
  company_id: string;
  longtitute: string;
  latitute: string;
}

@Injectable({
  providedIn: 'root'
})
export class DoctorService {

  apiUrl = 'https://doctorapiv1.herokuapp.com/api';
  auth: any = `${this.localStorage.get('USER')}`;
  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  constructor(private http: HttpClient, private fetchAPI: FetchapiService, private localStorage: StorageService) { }

  getAll(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctors`)
      .pipe(
        tap(users => console.log('Doctors retrieved!')),
        catchError(this.handleError<Doctor[]>('Get doctors', []))
      );
  }

  getDoctorByIdSpecialization(id: string): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctors/specialization/${id}`)
      .pipe(
        tap(_ => console.log(`Doctor fetched: ${id}`)),
        catchError(this.handleError<Doctor[]>(`Get doctors id=${id}`))
      );
  }

  getByID(id: string): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctors/${id}`)
      .pipe(
        tap(_ => console.log(`Doctor fetched: ${id}`)),
        catchError(this.handleError<Doctor[]>(`Get doctors id=${id}`))
      );
  }

  searchDoctorByName(name: string): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctors?keyword=${name}`)
      .pipe(
        tap(_ => console.log(`Doctor fetched: ${name}`)),
        catchError(this.handleError<Doctor[]>(`Get doctors name=${name}`))
      );
  }

  findByUserId(user_id: string): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.apiUrl}/doctors/users/${user_id}`)
    .pipe(
        tap(_ => console.log(`Doctor fetched: ${user_id}`)),
        catchError(this.handleError<Doctor[]>(`Get doctors user_id=${user_id}`))
    );
  }

  delete(id: string): Observable<Doctor[]> {
    return this.http.delete<Doctor[]>(`${this.apiUrl}/doctors/${id}`, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Doctor deleted: ${id}`)),
        catchError(this.handleError<Doctor[]>('Delete Doctor'))
      );
  }

  async createByHTTP(doctor: any): Promise<boolean> {
    let check = true;
    await this.http.post(`${this.apiUrl}/doctors`, JSON.stringify(doctor), this.httpOptions)
      .subscribe(
        (res: any) => {
          if (res.status === 201) {
            console.log('created doctor');
          } else {
            check = false;
          }
        }
      );
    return check;
  }

  async create(doctors: any): Promise<boolean> {
    let check = true;
    await this.fetchAPI.post(`/doctors`, doctors)
      .then(
        (res) => {
          if (res.status === 201) {
            console.log('successful create doctor');
          } else {
            check = false;
          }
        }
      );
    return check;
  }

  update(id, doctors: Doctor): Observable<any> {
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
