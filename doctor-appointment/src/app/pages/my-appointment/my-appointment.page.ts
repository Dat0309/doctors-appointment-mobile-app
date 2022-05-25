/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit,OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Appointment, AppointmentService } from 'src/app/services/appointment/appointment.service';
import { Company } from 'src/app/services/company/company.service';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.page.html',
  styleUrls: ['./my-appointment.page.scss'],
})
export class MyAppointmentPage implements OnInit, OnChanges {

  constructor(
    private appointmentService: AppointmentService,
    private route: Router,
    private doctorService: DoctorService
  ) { }

  appointments$: any[] = [];
  doctors$: any[] = [];
  company$: any[] = [];

  ngOnInit() {
    this.getMyAppointment('62793c38fe74f2163ea2920a');
  }

  ngOnChanges(): void {
    // this.getMyAppointment('62793c38fe74f2163ea2920a');
    // // setTimeout(()=>{
    // console.log('session 3'+this.doctors$);
    // // },2050);
  }

  public async getMyAppointment(id: string) {
    this.appointmentService.getAllByCustomerId(id).subscribe(
      async (res: any) => {
        if (res != null) {
          this.appointments$ = res.appointment;
        } else {
          console.log('Fail to load appoinment');
        }
      }
    );
  }

}
