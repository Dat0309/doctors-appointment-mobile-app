import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpecializationService {
  apiUrl = 'https://doctorapiv1.herokuapp.com/api';

  constructor(private http: HttpClientModule) { }

  getAll(){

  }

  getByID(id: string){

  }

  delete(id: string){

  }

  create(){}

  update(){}
}
