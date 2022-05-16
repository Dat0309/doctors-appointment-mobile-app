import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl = 'https://doctorapiv1.herokuapp.com/api';

  constructor(private http: HttpClientModule) { }

  getProfile(){}

  getAllUsers(){}

  update(){}
}
