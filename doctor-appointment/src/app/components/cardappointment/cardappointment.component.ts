/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @angular-eslint/use-lifecycle-interface */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, Input, OnInit } from '@angular/core';
import { url } from 'inspector';
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

  @Input() appointmentObj: Appointment;
  @Input() appointment$: any[];
  @Input() company$: any[];

  nameAppointment: string = '';
  nameDoctor: string = '';
  nameCompany: string = '';
  avtUrl: string = '';
  time: string = '';
  status: string='';

  ngOnInit() {
  }

  ngOnChanges(): void {
    this.onChangesCompanys();
  }

  public onChangesCompanys() {
    this.nameAppointment = this.getNameAppointment(this.appointmentObj._id);
    this.time = this.getTimeAppointment(this.appointmentObj._id);
    this.status = this.getStatusAppointment(this.appointmentObj._id);
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

  public getTimeAppointment(id: string){
    let time = '';
    this.appointment$.forEach(element => {
      if(element._id === id){
        time = element.start_time +' - '+ element.end_time;
        return;
      }
    });
    return time;
  }

  public getStatusAppointment(id: string){
    let status = '';
    this.appointment$.forEach(e=>{
      if(e._id === id){
        status = e.status;
        return;
      }
    });
    return status;
  }

}
