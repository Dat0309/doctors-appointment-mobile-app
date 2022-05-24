/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { element } from 'protractor';
import { Appointment } from 'src/app/services/appointment/appointment.service';
import { Doctor } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-cardappointment',
  templateUrl: './cardappointment.component.html',
  styleUrls: ['./cardappointment.component.scss'],
})
export class CardappointmentComponent implements OnInit {

  constructor() { }

  @Input() doctorObj: Doctor;
  @Input() appointmentObj: Appointment;
  @Input() appointment$: any[];
  @Input() company$: any[];

  nameAppointment: string = '';
  nameCompany: string = '';
  time: string = '';

  ngOnInit() { }

  ngOnChanges(): void {
    // console.log(this.doctorObj.specializations);
    this.onChangesCompanys();

  }


  public onChangesCompanys() {
    this.nameCompany = this.getNameCompany(this.doctorObj.company_id);
    this.nameAppointment = this.getNameAppointment(this.appointmentObj._id);
  }

  public getNameCompany(id: string) {
    let nameCompany = '';
    this.company$.forEach(element => {
      if (element._id === id) {
        nameCompany = element.name;
        return;
      }
    });

    return nameCompany;
  }

  public getNameAppointment(id: string){
    let nameAppointment = '';
    this.appointment$.forEach(element => {
      if( element._id === id){
        nameAppointment = element.name;
        return;
      }
    });
    return nameAppointment;
  }

}
