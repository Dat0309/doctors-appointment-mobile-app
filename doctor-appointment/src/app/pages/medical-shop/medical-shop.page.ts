/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable new-parens */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, Input } from '@angular/core';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';
import { FormsModule } from '@angular/forms';
import { CarddoctoritemComponent } from 'src/app/components/carddoctoritem/carddoctoritem.component';
import { Specialization, SpecializationService } from 'src/app/services/specialization/specialization.service';
import { Company, CompanyService } from 'src/app/services/company/company.service';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
@Component({
  selector: 'app-medical-shop',
  templateUrl: './medical-shop.page.html',
  styleUrls: ['./medical-shop.page.scss'],
})
export class MedicalShopPage implements OnInit {

  constructor(private doctorService: DoctorService,
    private specializationService: SpecializationService,
    private companyService: CompanyService,
    private router: Router,
    private loadingController: LoadingController) { }

  doctors$: Doctor[] = [];
  doctor = new Doctor;
  specializations$: Specialization[] = [];
  company$: Company[] = [];
  search = "";

  ngOnInit() {
    this.presentLoading();
    this.getAllDoctors();
    this.getAllSpcializations();
    this.getAllCompany();
  }

  onChangeTime() {
    this.getDoctorByName(this.search);
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Đang tải dữ liệu...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  public getDoctorByName(search: string)
  {
    this.doctorService.searchDoctorByName(search).subscribe(
      (res: any) => {
        if (res.doctors) {
          this.doctors$ = res.doctors;
          console.log(res);
        }
      }
    );
  }

  public getAllDoctors() {
    this.doctorService.getAll().subscribe(
      (res: any) => {
        if (res) {
          console.log(res);

          this.doctors$ = res;
          // this.doctors$.forEach(element => {
          //   console.log(element);
          // });
        }
      }
    );
  }

  public  getAllSpcializations() {
    this.specializationService.getAll().subscribe(
     (res: any) => {
       if (res != null) {
         console.log(res.specialization);
         this.specializations$ = res.specialization;
       }
     }
   );
 }

 public getAllCompany(){
   this.companyService.getAll().subscribe(
     (res: any) => {
       if(res != null){
         console.log(res.company);
         this.company$ = res.company;
       }
     }
   );
 }

  gotoDoctorInfo(id: string) {
  this.router.navigateByUrl(`/doctor-info/${id}`);
 }
}
