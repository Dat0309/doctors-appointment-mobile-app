import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { BookAppointmentPageRoutingModule } from './book-appointment-routing.module';

import { BookAppointmentPage } from './book-appointment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookAppointmentPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [BookAppointmentPage]
})
export class BookAppointmentPageModule {}
