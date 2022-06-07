/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonSlides } from '@ionic/angular';
import { Company, CompanyService } from 'src/app/services/company/company.service';

@Component({
  selector: 'app-companymap',
  templateUrl: './companymap.page.html',
  styleUrls: ['./companymap.page.scss'],
})
export class CompanymapPage implements OnInit {

  slideOpts: any;
  longitudeEvent: string;
  latitudeEvent: string;

  @ViewChild('slides', { static: false }) slides: IonSlides;

  constructor(
    private companyService: CompanyService) {
    this.slideOpts = {
      slidesPerView: 1,
      centeredSlide: true,
      loop: true,
    };
  }

  ngOnInit() {
    this.getAllCompany();
    setTimeout(() => {
      this.testClick(this.companies$[0]);
    }, 3000);
  }

  companies$: Company[] = [];

  public async getAllCompany() {
    await this.companyService.getAll().subscribe(
      (res: any) => {
        if (res != null) {
          this.companies$ = res.company;
          console.log(this.companies$);
        }
      }
    );
    this.longitudeEvent = this.companies$[0]?.longtitude;
    this.latitudeEvent = this.companies$[0]?.latitude;
  }

  async changeEvent($event) {
    await this.slides.getActiveIndex().then(index => {
      console.log(index);
      let i = (index) % this.companies$.length;
      this.longitudeEvent = this.companies$[i].longtitude;
      this.latitudeEvent = this.companies$[i].latitude;
    });
  }

  testClick(company) {
    this.longitudeEvent = company?.longtitude;
    this.latitudeEvent = company?.latitude;
  }

}
