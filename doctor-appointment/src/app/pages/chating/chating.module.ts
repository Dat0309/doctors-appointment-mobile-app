import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ChatingPageRoutingModule } from './chating-routing.module';

import { ChatingPage } from './chating.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ChatingPageRoutingModule
  ],
  declarations: [ChatingPage]
})
export class ChatingPageModule {}
