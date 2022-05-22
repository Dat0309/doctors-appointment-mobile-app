import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Specialization, SpecializationService } from 'src/app/services/specialization/specialization.service';

@Component({
  selector: 'app-specialities',
  templateUrl: './specialities.page.html',
  styleUrls: ['./specialities.page.scss'],
})
export class SpecialitiesPage implements OnInit {

  constructor(private specializationService: SpecializationService,
    private router: Router) { }

  specializations$ : Specialization[] = [];

  ngOnInit() {
    this.getAllSpcializations();
  }
  gotoCardiologist(id: string){
    this.router.navigateByUrl(`/cardiologist/${id}`);
  }

  public getAllSpcializations(){
    this.specializationService.getAll().subscribe(
      (res: any) => {
        if(res != null){
          console.log(res.specialization);
          this.specializations$ = res.specialization;
        }
      }
    );
  }

  

}
