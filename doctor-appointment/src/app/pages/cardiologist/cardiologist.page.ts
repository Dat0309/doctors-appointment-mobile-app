/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';
import { Specialization, SpecializationService } from 'src/app/services/specialization/specialization.service';
import { Company, CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-cardiologist',
  templateUrl: './cardiologist.page.html',
  styleUrls: ['./cardiologist.page.scss'],
})
export class CardiologistPage implements OnInit {

  constructor(private doctorService: DoctorService,
    private specializationService: SpecializationService,
    private companyService: CompanyService,
    private route: ActivatedRoute,
    private router: Router) { }


  id: string;
  nameSpecial: string;
  doctors$: Doctor[] = [];
  specializations$: Specialization[] = [];
  company$: Company[] = [];

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getDoctorByIdSpecail(this.id);
    this.getAllSpcializations();
    this.getAllCompany();
  }
  public getDoctorByIdSpecail(id: string) {
    this.doctorService.getDoctorByIdSpecialization(id).subscribe(
      (res: any) => {
        if (res.doctors) {
          console.log(res.doctors);
          this.doctors$ = res.doctors;
        }
      }
    );
  }
  public async getAllSpcializations() {
    await this.specializationService.getAll().subscribe(
      (res: any) => {
        if (res != null) {
          console.log(res.specialization);
          this.specializations$ = res.specialization;
          this.nameSpecial = this.getNameSpcailizations(this.id);
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

  public getNameSpcailizations(id: string) {
    let nameSpcailizations = '';
    this.specializations$.forEach(element => {
      if (element._id === id) {
        nameSpcailizations = element.name;
        return;
      }
    }
    );
    return nameSpcailizations;
  }

  gotoDoctorInfo(id: string) {
    this.router.navigateByUrl(`/doctor-info/${id}`);
  }
}
