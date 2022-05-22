import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CardiologistPageRoutingModule } from './cardiologist-routing.module';

import { CardiologistPage } from './cardiologist.page';
import { ComponentsModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CardiologistPageRoutingModule,
    ComponentsModule
  ],
  declarations: [CardiologistPage]
})
export class CardiologistPageModule {}
