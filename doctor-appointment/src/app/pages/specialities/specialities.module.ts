import { ComponentsModule } from './../../components/component.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SpecialitiesPageRoutingModule } from './specialities-routing.module';

import { SpecialitiesPage } from './specialities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SpecialitiesPageRoutingModule,
    ComponentsModule
  ],
  declarations: [SpecialitiesPage]
})
export class SpecialitiesPageModule {}
