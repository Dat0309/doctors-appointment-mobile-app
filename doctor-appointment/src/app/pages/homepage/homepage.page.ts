/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Router } from '@angular/router';
import { Company, CompanyService } from './../../services/company/company.service';
import { Specialization, SpecializationService } from './../../services/specialization/specialization.service';
import { Doctor } from './../../services/doctor/doctor.service';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { Covid19, CovidServiceService } from 'src/app/services/CovidService/covid-service.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private doctorService: DoctorService,
    private specializationService: SpecializationService,
    private companyService: CompanyService,
    private covidService: CovidServiceService,
    private router: Router,
    private loadingController: LoadingController) { }

  doctors$: Doctor[] = [];
  specializations$: Specialization[] = [];
  company$: Company[] = [];
  covid_datas$: Covid19[] = [];
  covid: Covid19;
  doctors_high_rating: Doctor[] = [];

  option = {
    slidesPerView: 4,
    loop: true,

  };

  ngOnInit() {
    this.getAllDoctors();
    this.getAllSpcializations();
    this.getAllCompany();
    this.getAllDataCovid();
  }
  gotoCardiologist(id: string) {
    this.router.navigateByUrl(`/cardiologist/${id}`);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Đang chuẩn bị dữ liệu...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  public getAllDoctors() {
    this.presentLoading();
    this.doctorService.getAll().subscribe(
      (res: any) => {
        if (res !== null) {
          console.log(res);

          this.doctors$ = res;
          this.getDoctorsHighRating(this.doctors$);
          // this.doctors$.forEach(element => {
          //   console.log(element);
          // });
        }
      }
    );
  }

  public getDoctorsHighRating(list: Doctor[]){
    list.map((e)=>{
      if(e.rating >= 4){
        this.doctors_high_rating.push(e);
      }
    });
  }

  public getAllSpcializations() {
    this.specializationService.getAll().subscribe(
      (res: any) => {
        if (res != null) {
          console.log(res.specialization);
          this.specializations$ = res.specialization;
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

  public getAllDataCovid() {
    this.covidService.getData().subscribe(
      (res: any) => {
        if(res != null) {
          console.log(res);
          this.covid_datas$ = res;
          this.covid = this.covid_datas$[this.covid_datas$.length - 1];
          console.log(this.covid);
        }
      }
    );
  }

  gotoDoctorInfo(id: string) {
    this.router.navigateByUrl(`/doctor-info/${id}`);
  }
}
