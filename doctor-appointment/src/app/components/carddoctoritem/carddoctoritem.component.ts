/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/member-ordering */
import { element } from 'protractor';
import { Doctor } from './../../services/doctor/doctor.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Specialization } from 'src/app/services/specialization/specialization.service';

@Component({
  selector: 'app-carddoctoritem',
  templateUrl: './carddoctoritem.component.html',
  styleUrls: ['./carddoctoritem.component.scss'],
})
export class CarddoctoritemComponent implements OnInit, OnChanges {

  constructor() { }
  // @Input() doctorName: String;
  // @Input() avatar: String;


  @Input() doctorObj: Doctor;
  @Input() specialization$: any[];
  @Input() company$: any[];

  nameSpecial: string = "";
  nameCompanny: string ="";
  reviews: [];

  ngOnInit() {
    // setTimeout(() => { console.log(this.specialization$) }, 5000)
  }

  ngOnChanges(): void {
    // console.log(this.doctorObj.specializations);
    this.onChangesSpacailizations();
    this.onChangesCompanys();

  }

  public onChangesSpacailizations(){
      this.nameSpecial = this.getNameSpcailizations(this.doctorObj.specializations);
  }

  public onChangesCompanys(){
   this.nameCompanny = this.getNameCompany(this.doctorObj.company_id);

  }

  public getNameSpcailizations(id: string) {
    let nameSpcailizations = "";
    this.specialization$.forEach(element => {
      if (element._id === id) {
        nameSpcailizations = element.name;
        return;
      }
    }
    );
    return nameSpcailizations;
  }

  public getNameCompany(id: string){
    let nameCompany ="";
    this.company$.forEach(element => {
      if(element._id === id) {
        nameCompany = element.name
        return;
      }
    });

    return nameCompany;

  }
}
