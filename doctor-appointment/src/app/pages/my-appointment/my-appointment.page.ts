/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment, AppointmentService } from 'src/app/services/appointment/appointment.service';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.page.html',
  styleUrls: ['./my-appointment.page.scss'],
})
export class MyAppointmentPage implements OnInit {

  constructor(
    private appointmentService: AppointmentService,
    private route: Router,
    private doctorService: DoctorService
    ) { }

    appointments$: Appointment[] = [];
    doctors$: Doctor[] = [];

  ngOnInit() {
    this.getMyAppointment('62793c38fe74f2163ea2920a');
  }

  public getMyAppointment(id: string) {
    this.appointmentService.getAllByCustomerId(id).subscribe(
      (res: any) => {
        if (res != null) {
          this.appointments$ = res;
          console.log(this.appointments$);
        } else {
          console.log('Fail to load appoinment');
        }
      }
    );
  }

  public getDoctorByID(id: string){
    this.doctorService.getByID(id).subscribe(
      (res: any)=>{
        if(res != null) {
          this.doctors$ = res;
          console.log(this.doctors$);
        }else{
          console.log('Failed to load doctor');
        }
      }
    );
  }

}
