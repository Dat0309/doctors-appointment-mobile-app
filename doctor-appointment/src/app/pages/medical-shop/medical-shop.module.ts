import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicalShopPageRoutingModule } from './medical-shop-routing.module';

import { MedicalShopPage } from './medical-shop.page';
import { ComponentsModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicalShopPageRoutingModule,
    ComponentsModule,
  ],
  declarations: [MedicalShopPage]
})
export class MedicalShopPageModule {}
