import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiseaseinfoPageRoutingModule } from './diseaseinfo-routing.module';

import { DiseaseinfoPage } from './diseaseinfo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiseaseinfoPageRoutingModule
  ],
  declarations: [DiseaseinfoPage]
})
export class DiseaseinfoPageModule {}
