import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class User {
  _id: string;
  email: string;
  password: string;
  role: string;
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://doctorapiv1.herokuapp.com/api';

  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Connect-Type': 'application/json'})
  };

  constructor(private http: HttpClient) { }

  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/users/profile`)
    .pipe(
      map(results => {
        console.log('RAW: ', results);
        return results;
      }),
      catchError(this.handleError<User[]>('Get Profile'))
    );
  }

  getAllUsers(): Observable<User[]>{
    return this.http.get<User[]>(`${this.apiUrl}/users`).pipe(
      map(results => {
        console.log('USER: ', results);
        return results;
      }),
      catchError(this.handleError<User[]>('GetAll user'))
    );
  }

  update(id ,user: User): Observable<any>{
    return this.http.put(`${this.apiUrl}/${id}`, JSON.stringify(user), this.httpOptions)
    .pipe(
      tap(_ => console.log(`User updated: ${id}`)),
      catchError(this.handleError<User[]>('Update user'))
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
