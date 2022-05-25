import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Company, CompanyService } from 'src/app/services/company/company.service';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';
import { Specialization, SpecializationService } from 'src/app/services/specialization/specialization.service';

@Component({
  selector: 'app-doctor-info',
  templateUrl: './doctor-info.page.html',
  styleUrls: ['./doctor-info.page.scss'],
})
export class DoctorInfoPage implements OnInit {

  specialization = new Specialization;
  doctor = new Doctor;
  company = new Company;
  doctors$ : Doctor[] = [];
  companies$: Company[] = [];
  specializations$: Specialization[] = [];
  idCompany: string;
  idSpecialization: string;
  nameSpecialization: string;
  constructor(private doctorService: DoctorService, 
    private route:ActivatedRoute, 
    private specializationService: SpecializationService, 
    private companyService: CompanyService) { }

  ngOnInit() {
    this.getAllDoctors();
    this.getAllCompanies();
    this.getAllSpecializations();
    this.getRoute(this.route.snapshot.params["id"]);
  }

  public getAllDoctors(){
    this.doctorService.getAll().subscribe(
      (res: any) => {
        if(res.doctors){
          console.log(res.doctors);
          this.doctors$ = res;
        }
      }
    );
  }

  public getAllCompanies(){
    this.companyService.getAll().subscribe(
      (res: any) => {
        if(res.company){
          console.log(res.company);
          this.companies$ = res;
        }
      }
    );
  }

  public getAllSpecializations(){
    this.specializationService.getAll().subscribe(
      (res: any) => {
        if(res.specialization){
          console.log(res.specialization);
          this.specializations$ = res;
        }
      }
    );
  }

  getRoute(id:any) {
    this.doctorService.getByID(id).subscribe((res: any) => {
      this.doctor = res;
      this.idCompany = this.doctor.company_id;
      this.getCompany(this.idCompany);
      
      //this.idSpecialization = this.doctor.specializations;
      console.log(this.idSpecialization)
    });
  }

  getCompany (id:any) {
    this.companyService.getByID(id).subscribe((res: any) => {
      this.company = res;
    });
  } 

  getSpecialization (id:any) {
    this.specializationService.getByID(id).subscribe((res: any) => {
      this.specialization = res;
    })
  }

  // public getNameSpecialization(id: string) {
  //   let nameSpecialization = "";
  //   this.specializations.forEach(element => {
  //     if (element._id === id) {
  //       nameSpecialization = element.name;
  //       return;
  //     }
  //   }
  //   );
  //   return nameSpecialization;
  // }

  // public onChangesSpecializations(){
  //   this.doctor.specializations.forEach(special => {
  //     this.nameSpecialization = this.getNameSpecialization(special.id);
  //   })
  // }
}
