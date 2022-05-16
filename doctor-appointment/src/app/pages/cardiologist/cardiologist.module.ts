import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardiologistPageRoutingModule } from './cardiologist-routing.module';

import { CardiologistPage } from './cardiologist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardiologistPageRoutingModule
  ],
  declarations: [CardiologistPage]
})
export class CardiologistPageModule {}
