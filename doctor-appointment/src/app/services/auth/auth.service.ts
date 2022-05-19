import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { FetchapiService } from '../fetchapi/fetchapi.service';
import { StorageService } from '../storage/storage.service';
import { User } from '../user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = 'http://localhost:5000/api';

  constructor(private fetchAPI: FetchapiService, private storageService: StorageService, private router: Router) { }

  async login(postData: any): Promise<boolean> {
    let check = true;
    await this.fetchAPI.post('/users/login', postData).then(
      (res) => {
        if (res.status === 200) {
          this.storageService.store('TOKEN', res.data.access);
        } else {
          check = false;
        }
      }
    );
    return check;
  }

  async register(postData: any): Promise<boolean> {
    let check = true;
    await this.fetchAPI.post('/users', postData).then(
      (res) => {
        if (res.status === 200) {
        } else {
          check = false;
        }
      }
    );
    return check;
  }

  logout() {
    this.storageService.removeStorageItem('userData').then(res => {
      this.router.navigate(['/login-form']);
    });
  }
}
