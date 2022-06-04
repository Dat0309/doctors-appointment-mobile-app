/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Disease, DiseaseService } from 'src/app/services/diseases/disease.service';
import { Specialization, SpecializationService } from 'src/app/services/specialization/specialization.service';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.page.html',
  styleUrls: ['./diseases.page.scss'],
})
export class DiseasesPage implements OnInit {

  constructor(private diseaseService: DiseaseService,
    private specializationService: SpecializationService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

    id: string;
    diseases$: Disease[] = [];

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(this.id);
    this.getDiseaseByIdSpecail(this.id);
  }

  public getDiseaseByIdSpecail(id: string) {
    this.diseaseService.getDiseaseByIdSpecialization(id).subscribe(
      (res: any) => {
        if (res.diseases) {
          console.log(res.diseases);
          this.diseases$ = res.diseases;
        }
      }
    );
  }

  gotoDiseaseInfo(id: string) {
    this.router.navigateByUrl(`/diseaseinfo/${id}`);
  }

}
