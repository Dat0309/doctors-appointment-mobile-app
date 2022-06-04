import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Disease, DiseaseService } from 'src/app/services/diseases/disease.service';

@Component({
  selector: 'app-diseaseinfo',
  templateUrl: './diseaseinfo.page.html',
  styleUrls: ['./diseaseinfo.page.scss'],
})
export class DiseaseinfoPage implements OnInit {
  disease: Disease;

  constructor(private diseaseService: DiseaseService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.getDisease();
  }

  public getDisease(){
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    this.diseaseService.getByID(id).subscribe(
      (res: any)=>{
        this.disease = res;
      }
    );
  }

}
