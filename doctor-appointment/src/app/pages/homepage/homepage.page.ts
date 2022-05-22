import { Router } from '@angular/router';
import { Company, CompanyService } from './../../services/company/company.service';
import { Specialization, SpecializationService } from './../../services/specialization/specialization.service';
import { Doctor } from './../../services/doctor/doctor.service';
import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private doctorService: DoctorService,
    private specializationService: SpecializationService,
    private companyService: CompanyService,
    private router: Router) { }

  doctors$: Doctor[] = [];
  specializations$: Specialization[] = [];
  company$: Company[] = [];

  

  option = {
    slidesPerView: 4,
    loop: true,

  }

  ngOnInit() {
    this.getAllDoctors();
    this.getAllSpcializations();
    this.getAllCompany();
  }
  gotoCardiologist(id: string){
    this.router.navigateByUrl(`/cardiologist/${id}`);
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
  
  


  

}
