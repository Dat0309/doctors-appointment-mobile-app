/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-splashsreen',
  templateUrl: './splashsreen.page.html',
  styleUrls: ['./splashsreen.page.scss'],
})
export class SplashsreenPage implements OnInit {

  constructor(
    private storageService: StorageService,
    private router: Router,
    private doctorService: DoctorService,
    private customerService: CustomerService
    ) { }

  ngOnInit() {
  }

  public async checkLogin(){
    let user = await this.storageService.get('USER');
    if(user !== null){
      if(user.data.role === 'Bác sĩ'){
        this.router.navigate([`appointment-schedule/${user.data._id}`]);
      }else if(user.data.role === 'Bệnh nhân'){
        this.router.navigate(['/homepage']);
      }
    }else{
      this.router.navigateByUrl(`/login-form`);
    }
  }

}
