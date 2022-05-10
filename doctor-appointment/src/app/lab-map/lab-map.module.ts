import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabMapPageRoutingModule } from './lab-map-routing.module';

import { LabMapPage } from './lab-map.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabMapPageRoutingModule
  ],
  declarations: [LabMapPage]
})
export class LabMapPageModule {}
