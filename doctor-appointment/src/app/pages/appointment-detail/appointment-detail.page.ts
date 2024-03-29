/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-const */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, Input } from '@angular/core';
import {
  Appointment,
  AppointmentService,
} from 'src/app/services/appointment/appointment.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';
import { element } from 'protractor';
import { AlertController, ToastController } from '@ionic/angular';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-appointment-detail',
  templateUrl: './appointment-detail.page.html',
  styleUrls: ['./appointment-detail.page.scss'],
})
export class AppointmentDetailPage implements OnInit {
  constructor(
    private appointmentService: AppointmentService,
    private route: Router,
    private customerService: CustomerService,
    private doctorService: DoctorService,
    private activatedRoute: ActivatedRoute,
    private toastController: ToastController,
    private storageService: StorageService
  ) { }

  appointment: Appointment;
  nameCustomer: string = '';
  nameDoctor: string = '';
  role: string = '';
  postdata = {
    rating: 0
  };

  ngOnInit() {
    this.checkRole();
    this.getAppointment(this.activatedRoute.snapshot.paramMap.get('id'));
  }

  async presentToast(mess: string){
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000,
    });
    toast.present();
  }

  public async checkRole(){
    let user = await this.storageService.get('USER');
    this.role = user.data.role;
  }

  public getAppointment(id: string) {
    this.appointmentService
      .getById(id)
      .subscribe(async (res: any) => {
        if (res != null) {
          this.appointment = res;
          this.getDoctorName(this.appointment?.doctor._id);
          this.getCustomerName(this.appointment?.customer);
        } else {
          console.log('Fail to load appoinment');
        }
      });
  }

  public getDoctorName(id: string) {
    this.doctorService.getByID(id).subscribe(
      (res: any) => {
        if (res != null) {
          this.nameDoctor = res.last_name + ' ' + res.first_name;
        }
      }
    );
  }

  public getCustomerName(id: string) {
    this.customerService.getByID(id).subscribe(
      (res: any) => {
        if (res != null) {
          this.nameCustomer = res.last_name + ' ' + res.first_name;
        }
      }
    );
  }

  public onRateChange($event){
    this.postdata.rating = $event;
    this.onChange = $event;
  }

  public rating(rating: any){
    this.doctorService.rate(this.appointment.doctor._id, rating).subscribe(
      (res: any) => {
          this.presentToast('Đánh giá thành công');
      }
    );
  }

  onChange: (value: any) => {};
}
