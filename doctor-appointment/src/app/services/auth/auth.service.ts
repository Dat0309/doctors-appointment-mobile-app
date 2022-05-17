import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { StorageService } from '../storage/storage.service';
import { User } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'https://doctorapiv1.herokuapp.com/api';

  constructor(private http: HttpClient, private storageService: StorageService, private router: Router) { }

  login(postData: any): Observable<any> {
    const headers = new HttpHeaders();
    const options = { headers, withCredintials: false };
    return this.http.post(`${this.apiUrl}/users/login`, JSON.stringify(postData), options);
  }

  register(postData: any): Observable<any> {
    const headers = new HttpHeaders();
    const options = { headers, withCredintials: false };
    return this.http.post(`${this.apiUrl}/users`, JSON.stringify(postData), options);
  }

  logout() {
    this.storageService.removeStorageItem('userData').then(res => {
      this.router.navigate(['/login-form']);
    });
  }
}
