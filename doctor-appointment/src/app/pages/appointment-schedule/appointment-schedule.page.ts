/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-appointment-schedule',
  templateUrl: './appointment-schedule.page.html',
  styleUrls: ['./appointment-schedule.page.scss'],
})
export class AppointmentSchedulePage implements OnInit {
  appointments$: any[] = [];
  doctor_id: string = '';

  constructor(
    private appointmentService: AppointmentService,
    private route: Router,
    private doctorService: DoctorService,
    private storageService: StorageService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getCustomerByUserId();
    setTimeout(() => {
      this.getMyAppointment(this.doctor_id);
    }, 2000);
  }

  public async getMyAppointment(id: string) {
    this.appointmentService.getAllByDoctorId(id).subscribe(
      async (res: any) => {
        if (res != null) {
          this.appointments$ = res.appointment;
        } else {
          console.log('Fail to load appoinment');
        }
      }
    );

  }

  public async getCustomerByUserId() {
    this.doctorService.findByUserId(this.activateRoute.snapshot.params['id']).subscribe(
      (res: any) => {
        if (res != null) {
          this.doctor_id = res.doctor[0]._id;
        } else {
          console.log('Fail to load user');
        }
      }
    );
  }

  public update(id: string) {
    this.appointmentService.update(id);
    window.location.reload();
  }

  public delete(id: string) {
    this.appointmentService.delete(id);
    window.location.reload();
  }

}
