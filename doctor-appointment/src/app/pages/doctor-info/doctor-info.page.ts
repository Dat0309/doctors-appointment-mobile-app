/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Company, CompanyService } from 'src/app/services/company/company.service';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';
import { Specialization, SpecializationService } from 'src/app/services/specialization/specialization.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.page.html',
  styleUrls: ['./doctor-info.page.scss'],
})
export class DoctorInfoPage implements OnInit {

  specialization = new Specialization();
  doctor = new Doctor();
  company = new Company();
  doctors$: Doctor[] = [];
  companies$: Company[] = [];
  specializations$: Specialization[] = [];
  idCompany: string;
  idSpecialization: string;
  nameSpecialization: string;

  constructor(private doctorService: DoctorService,
    private activateRoute: ActivatedRoute,
    private router: Router,
    private specializationService: SpecializationService,
    private companyService: CompanyService) { }

  ngOnInit() {
    this.getAllDoctors();
    this.getAllCompanies();
    this.getAllSpecializations();
    this.getRoute(this.activateRoute.snapshot.params['id']);
  }

  public getAllDoctors(){
    this.doctorService.getAll().subscribe(
      (res: any) => {
        if(res.doctors){
          console.log(res.doctors);
          this.doctors$ = res;
        }
      }
    );
  }

  public getAllCompanies(){
    this.companyService.getAll().subscribe(
      (res: any) => {
        if(res.company){
          console.log(res.company);
          this.companies$ = res;
        }
      }
    );
  }

  public getAllSpecializations(){
    this.specializationService.getAll().subscribe(
      (res: any) => {
        if(res.specialization){
          console.log(res.specialization);
          this.specializations$ = res;
        }
      }
    );
  }

  getRoute(id: any) {
    this.doctorService.getByID(id).subscribe((res: any) => {
      this.doctor = res;
      this.idCompany = this.doctor.company_id;
      this.getCompany(this.idCompany);

      this.idSpecialization = this.doctor.specializations[0].id;
      this.getSpecialization(this.idSpecialization);
      console.log(this.idSpecialization);
    });
  }

  getCompany(id: any) {
    this.companyService.getByID(id).subscribe((res: any) => {
      this.company = res;
    });
  }

  getSpecialization(id: any) {
    this.specializationService.getByID(id).subscribe((res: any) => {
      this.specialization = res;
      console.log(res);
    });
  }

  bookDoctor(id: string){
    this.router.navigateByUrl(`/book-appointment/${id}`);
  }

  goToLabMap(id: string) {
    this.router.navigateByUrl(`/lab-map/${id}`);
  }
}
