import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalShopPageRoutingModule } from './medical-shop-routing.module';

import { MedicalShopPage } from './medical-shop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalShopPageRoutingModule
  ],
  declarations: [MedicalShopPage]
})
export class MedicalShopPageModule {}
