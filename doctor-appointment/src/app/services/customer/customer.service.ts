/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export class Customer {
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
}

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  apiUrl = 'https://doctorapiv1.herokuapp.com/api';
  httpOptions = {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/customers`)
      .pipe(
        tap(doctors => console.log('Customers retrieved!')),
        catchError(this.handleError<Customer[]>('Get customers', []))
      );
  }

  getByID(id: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/customers/${id}`)
      .pipe(
        tap(_ => console.log(`Customer fetched: ${id}`)),
        catchError(this.handleError<Customer[]>(`Get customers id=${id}`))
      );
  }

  async createByHTTP(customer: any): Promise<boolean> {
    let check = true;
    await this.http.post(`${this.apiUrl}/customers`, JSON.stringify(customer), this.httpOptions)
      .subscribe(
        (res: any) => {
          if (res.status === 201) {
            console.log('created customer');
          } else {
            check = false;
          }
        }
      );
    return check;
  }

  async updateByHTTP(id, customer: any): Promise<boolean> {
    let check = true;
    await this.http.put(`${this.apiUrl}/customers/${id}`, JSON.stringify(customer), this.httpOptions).subscribe(
      (res: any) => {
        if(res.status === 200){
          console.log('updated customer');
        }else{
          check = false;
        }
      }
    );
    return check;
  }

  findByUserId(user_id: string): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${this.apiUrl}/customers/users/${user_id}`)
    .pipe(
        tap(_ => console.log(`Customer fetched: ${user_id}`)),
        catchError(this.handleError<Customer[]>(`Get customer user_id=${user_id}`))
    );
  }

  delete(id: string): Observable<Customer[]> {
    return this.http.delete<Customer[]>(`${this.apiUrl}/customers/${id}`, this.httpOptions)
      .pipe(
        tap(_ => console.log(`Customer deleted: ${id}`)),
        catchError(this.handleError<Customer[]>('Delete Customer'))
      );
  }

  create(customers: Customer): Observable<any> {
    return this.http.post<Customer>(`${this.apiUrl}/customers`, JSON.stringify(customers), this.httpOptions)
      .pipe(
        catchError(this.handleError<Customer>('Error occured'))
      );
  }

  update(id, customers: Customer): Observable<any> {
    return this.http.put(`${this.apiUrl}/customers/${id}`,JSON.stringify(customers), this.httpOptions)
      .pipe(
        tap(_ => console.log(`Customer updated: ${id}`)),
        catchError(this.handleError<Customer[]>('Update customers'))
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
