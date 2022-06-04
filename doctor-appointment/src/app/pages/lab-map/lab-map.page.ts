import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company, CompanyService } from 'src/app/services/company/company.service';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';
import { Specialization, SpecializationService } from 'src/app/services/specialization/specialization.service';

@Component({
  selector: 'app-lab-map',
  templateUrl: './lab-map.page.html',
  styleUrls: ['./lab-map.page.scss'],
})
export class LabMapPage implements OnInit {

  longitudeEvent: string;
  latitudeEvent: string;
  doctor = new Doctor();
  company = new Company();
  doctors$: Doctor[] = [];
  companies$: Company[] = [];
  specializations$: Specialization[] = [];
  constructor(
    private doctorService: DoctorService,
    private companyService: CompanyService,
    private activateRoute: ActivatedRoute,
    private specializationService: SpecializationService,
  ) { }

  ngOnInit() {
    this.getAllDoctors();
    this.getAllCompanies();
    this.getAllSpecializations();
    this.getCompany(this.activateRoute.snapshot.params['id']);

  }

  getAllDoctors() {
    this.doctorService.getAll().subscribe(
      (res: any) => {
        if (res.doctors) {
          console.log(res.doctors);
          this.doctors$ = res.doctors;
        }
      }
    );
  }

  public async getAllSpecializations() {
    await this.specializationService.getAll().subscribe(
     (res: any) => {
       if (res != null) {
         console.log(res.specialization);
         this.specializations$ = res.specialization;
       }
     }
   );
  }

  getDoctor(id: any) {
    this.doctorService.getByID(id).subscribe(
      (res: any) => {
        this.doctor = res;
      });
  }

  public getAllCompanies() {
    this.companyService.getAll().subscribe(
      (res: any) => {
        if (res.company) {
          console.log(res.company);
          this.companies$ = res.company;
          this.longitudeEvent = this.company.longtitude;
          this.latitudeEvent = this.company.latitude;
        }
      }
    );
    
  }

  getCompany(id: any) {
    this.companyService.getByID(id).subscribe((res: any) => {
      this.company = res;
    });
  }

}
