import { Component, OnInit } from '@angular/core';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  constructor(private doctorService: DoctorService) { }

  ngOnInit() {
    this.getAllDoctors();
  }

  public getAllDoctors(){
    this.doctorService.getAll().subscribe(
      (res: any) => {
        if(res.doctors){
          console.log(res);
        }
      }
    );
  }

}
