import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MyAppointmentPageRoutingModule } from './my-appointment-routing.module';

import { MyAppointmentPage } from './my-appointment.page';
import { ComponentsModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyAppointmentPageRoutingModule,
    ComponentsModule
  ],
  declarations: [MyAppointmentPage]
})
export class MyAppointmentPageModule {}
