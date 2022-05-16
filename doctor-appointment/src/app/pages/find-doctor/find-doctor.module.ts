import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FindDoctorPageRoutingModule } from './find-doctor-routing.module';

import { FindDoctorPage } from './find-doctor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FindDoctorPageRoutingModule
  ],
  declarations: [FindDoctorPage]
})
export class FindDoctorPageModule {}
