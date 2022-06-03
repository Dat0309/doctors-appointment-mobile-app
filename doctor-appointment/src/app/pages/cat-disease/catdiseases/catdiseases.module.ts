import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CatdiseasesPageRoutingModule } from './catdiseases-routing.module';

import { CatdiseasesPage } from './catdiseases.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CatdiseasesPageRoutingModule
  ],
  declarations: [CatdiseasesPage]
})
export class CatdiseasesPageModule {}
