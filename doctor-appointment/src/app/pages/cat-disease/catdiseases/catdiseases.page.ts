/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Specialization, SpecializationService } from 'src/app/services/specialization/specialization.service';

@Component({
  selector: 'app-catdiseases',
  templateUrl: './catdiseases.page.html',
  styleUrls: ['./catdiseases.page.scss'],
})
export class CatdiseasesPage implements OnInit {

  constructor(private specialService: SpecializationService, private router: Router) { }

  specializations$: Specialization[] = [];

  ngOnInit() {
    this.getAllSpcializations();
  }

  gotoDiseaseList(id: string){
    this.router.navigateByUrl(`/diseases/${id}`);
  }

  public getAllSpcializations(){
    this.specialService.getAll().subscribe(
      (res: any) => {
        if(res != null){
          console.log(res.specialization);
          this.specializations$ = res.specialization;
        }
      }
    );
  }

}
