import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentDetailPageRoutingModule } from './appointment-detail-routing.module';

import { AppointmentDetailPage } from './appointment-detail.page';
import { IonicRatingModule } from 'ionic4-rating';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentDetailPageRoutingModule,
    IonicRatingModule,
  ],
  declarations: [AppointmentDetailPage]
})
export class AppointmentDetailPageModule {}
