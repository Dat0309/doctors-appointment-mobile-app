import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AppointmentSchedulePageRoutingModule } from './appointment-schedule-routing.module';

import { AppointmentSchedulePage } from './appointment-schedule.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AppointmentSchedulePageRoutingModule
  ],
  declarations: [AppointmentSchedulePage]
})
export class AppointmentSchedulePageModule {}
