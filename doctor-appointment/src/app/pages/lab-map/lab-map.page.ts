/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/dot-notation */
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

  longitudeEvent: string = '';
  latitudeEvent: string = '';
  company: Company;

  constructor(
    private companyService: CompanyService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getCompany(this.activateRoute.snapshot.params['id']);
  }

  getCompany(id: any) {
    this.companyService.getByID(id).subscribe((res: any) => {
      this.company = res;
      this.longitudeEvent = res.longtitude;
      this.latitudeEvent = res.latitude;
      console.log(this.company);
    });
  }
}
