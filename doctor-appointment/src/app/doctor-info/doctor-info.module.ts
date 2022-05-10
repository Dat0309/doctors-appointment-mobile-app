import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DoctorInfoPageRoutingModule } from './doctor-info-routing.module';

import { DoctorInfoPage } from './doctor-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DoctorInfoPageRoutingModule
  ],
  declarations: [DoctorInfoPage]
})
export class DoctorInfoPageModule {}
