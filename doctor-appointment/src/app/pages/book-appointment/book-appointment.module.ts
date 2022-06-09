import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { BookAppointmentPageRoutingModule } from './book-appointment-routing.module';

import { BookAppointmentPage } from './book-appointment.page';
import { ComponentsModule } from 'src/app/components/component.module';
import { MbscModule } from '@mobiscroll/angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookAppointmentPageRoutingModule,
    ReactiveFormsModule,
    ComponentsModule,
  ],
  declarations: [BookAppointmentPage]
})
export class BookAppointmentPageModule {}
