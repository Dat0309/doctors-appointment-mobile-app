import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DiseasesPageRoutingModule } from './diseases-routing.module';

import { DiseasesPage } from './diseases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DiseasesPageRoutingModule
  ],
  declarations: [DiseasesPage]
})
export class DiseasesPageModule {}
