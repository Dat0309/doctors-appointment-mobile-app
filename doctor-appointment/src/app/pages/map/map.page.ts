/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */

import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Company, CompanyService } from 'src/app/services/company/company.service';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';
import { Specialization, SpecializationService } from 'src/app/services/specialization/specialization.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit {

  slideOpts: any;
  longitudeEvent: string;
  latitudeEvent: string;

  @ViewChild('slides', { static: false }) slides: IonSlides;

  constructor(private doctorService: DoctorService,
    private specializationService: SpecializationService,
    private companyService: CompanyService) {
    this.slideOpts = {
      slidesPerView: 1,
      centeredSlide: true,
      loop: true,
    };
  }

  ngOnInit() {
    // this.getDoctorByIdSpecail("6289a0e9b416b9c1586e2b68");
    this.getAllDoctors();
    this.getAllSpcializations();
    this.getAllCompany();
    setTimeout(() => {
      this.testClick(this.doctors$[0]);
    }, 3000);
    // this.longitudeEvent = this.doctors$[0].longtitute;
    // this.latitudeEvent = this.doctors$[0].latitute;
  }

  doctors$: Doctor[] = [];
  specializations$: Specialization[] = [];
  company$: Company[] = [];

  public async getAllSpcializations() {
    await this.specializationService.getAll().subscribe(
      (res: any) => {
        if (res != null) {
          console.log(res.specialization);
          this.specializations$ = res.specialization;
          // this.nameSpecial = this.getNameSpcailizations(this.id);
        }
      }
    );
  }
  public getAllDoctors() {
    this.doctorService.getAll().subscribe(
      (res: any) => {
        if (res.doctors) {
          console.log(res.doctors);

          this.doctors$ = res.doctors;
          // this.doctors$.forEach(element => {
          //   console.log(element);
          // });
        }
      }
    );
  }


  public getAllCompany() {
    this.companyService.getAll().subscribe(
      (res: any) => {
        if (res != null) {
          console.log(res.company);
          this.company$ = res.company;
        }
      }
    );
  }

  public async getDoctorByIdSpecail(id: string) {
    await this.doctorService.getDoctorByIdSpecialization(id).subscribe(
      (res: any) => {
        if (res.doctors) {
          console.log(res.doctors);
          this.doctors$ = res.doctors;
        }
      }
    );
    this.longitudeEvent = this.doctors$[0].longtitute;
    this.latitudeEvent = this.doctors$[0].latitute;
  }

  async changeEvent(event) {
    // console.log(event)
    await this.slides.getActiveIndex().then(index => {
      // let i = index-1;
      console.log(index);
      let i = (index) % this.doctors$.length;
      this.longitudeEvent = this.doctors$[i].longtitute;
      this.latitudeEvent = this.doctors$[i].latitute;
    });
  }

  testClick(doctor) {
    // this.longitudeEvent.emit(doctor.longtitute);
    // this.latitudeEvent.emit(doctor.latitute);
    // console.log(doctor.longtitute);
    this.longitudeEvent = doctor?.longtitute;
    this.latitudeEvent = doctor?.latitute;
  }
}
