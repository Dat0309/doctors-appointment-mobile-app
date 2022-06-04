import { Component, OnInit, Input } from '@angular/core';
import {
  Appointment,
  AppointmentService,
} from 'src/app/services/appointment/appointment.service';
import { StorageService } from 'src/app/services/storage/storage.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Router } from '@angular/router';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';
import { element } from 'protractor';
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
    private storageService: StorageService,
    private router: Router
  ) {}

  @Input() appointmentObj: Appointment;
  @Input() doctor$: any[];

  appointments$: any[] = [];
  customer_id: string;
  nameDoctor: string = '';

  ngOnInit() {
    this.getCustomerByUserId();
    setTimeout(() => {
      this.getMyAppointment(this.customer_id);
    }, 2000);
  }

  ngOnChanges(): void {
    this.onChangesDocTorName();
  }

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

  public onChangesDocTorName() {
    this.nameDoctor = this.getDoctorName(this.appointmentObj._id);
  }
  public getDoctorName(id: string) {
    let doctorName = '';
    this.doctor$.forEach((element) => {
      if (element._id === id) {
        doctorName = element.name;
        return;
      }
    });
    return doctorName;
  }
}
