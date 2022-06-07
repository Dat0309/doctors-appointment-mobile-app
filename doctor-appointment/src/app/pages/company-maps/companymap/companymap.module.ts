import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CompanymapPageRoutingModule } from './companymap-routing.module';

import { CompanymapPage } from './companymap.page';
import { SwiperModule } from 'swiper/angular';
import { ComponentsModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CompanymapPageRoutingModule,
    ComponentsModule,
    SwiperModule,
  ],
  declarations: [CompanymapPage]
})
export class CompanymapPageModule {}
