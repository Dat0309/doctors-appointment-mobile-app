import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';
import { Specialization, SpecializationService } from 'src/app/services/specialization/specialization.service';

@Component({
  selector: 'app-cardiologist',
  templateUrl: './cardiologist.page.html',
  styleUrls: ['./cardiologist.page.scss'],
})
export class CardiologistPage implements OnInit {

  constructor(private doctorService: DoctorService,
    private specializationService: SpecializationService,
    private route: ActivatedRoute) { }


    id: string;
  doctors$: Doctor[] = [];
  specializations$: Specialization[] = [];

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get("id");
    console.log(this.id);
  }
  public getDoctorSpcailition(id){
    
  }
}
