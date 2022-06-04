/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import {
  Appointment,
  AppointmentService,
} from 'src/app/services/appointment/appointment.service';
import { Company } from 'src/app/services/company/company.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.page.html',
  styleUrls: ['./my-appointment.page.scss'],
})
export class MyAppointmentPage implements OnInit, OnChanges {
  constructor(
    private appointmentService: AppointmentService,
    private route: Router,
    private customerService: CustomerService,
    private storageService: StorageService,
    private router: Router
  ) {}

  appointments$: any[] = [];
  customer_id: string;

  ngOnInit() {
    this.getCustomerByUserId();
    setTimeout(() => {
      this.getMyAppointment(this.customer_id);
    }, 2000);
  }

  ngOnChanges(): void {}

  public async getMyAppointment(id: string) {
    this.appointmentService
      .getAllByCustomerId(id)
      .subscribe(async (res: any) => {
        if (res != null) {
          this.appointments$ = res.appointment;
        } else {
          console.log('Fail to load appoinment');
        }
      });
  }

  public async getCustomerByUserId() {
    let user = await this.storageService.get('USER');
    this.customerService.findByUserId(user.data._id).subscribe((res: any) => {
      if (res != null) {
        this.customer_id = res.customer[0]._id;
      } else {
        console.log('Fail to load appoinment');
      }
    });
  }

  public update(id: string) {
    this.appointmentService.update(id);
    window.location.reload();
  }

  public delete(id: string) {
    this.appointmentService.delete(id);
    window.location.reload();
  }
  gotoAppointmentDetail(id: string) {
    this.router.navigateByUrl(`/appointment-detail/${id}`);
  }
}
