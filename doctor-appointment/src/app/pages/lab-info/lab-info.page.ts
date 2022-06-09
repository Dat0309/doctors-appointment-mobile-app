/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/dot-notation */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { isThisSecond } from 'date-fns/esm';
import { Company, CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-lab-info',
  templateUrl: './lab-info.page.html',
  styleUrls: ['./lab-info.page.scss'],
})
export class LabInfoPage implements OnInit {

  longitudeEvent: string;
  latitudeEvent: string;
  companies$: Company[] = [];
  company = new Company();
  thumbs = [];

  @ViewChild('slides', { static: false }) slides: IonSlides;

  constructor(
    private companyService: CompanyService,
    private activateRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getAllCompanies();
    this.getRoute(this.activateRoute.snapshot.params['id']);
  }

  public async getAllCompanies() {
    await this.companyService.getAll().subscribe(
      ( res: any) => {
        if (res.company) {
          console.log(res.company);
          this.companies$ = res;
          this.longitudeEvent = this.company.longtitude;
          this.latitudeEvent = this.company.latitude;
        }
      }
    );
  }

  getRoute(id: any) {
    this.companyService.getByID(id).subscribe((res: any) => {
      this.company = res;
      this.thumbs = this.company.image.split(',');

      console.log(this.thumbs);
    });
  }
}
