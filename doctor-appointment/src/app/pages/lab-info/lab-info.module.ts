import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LabInfoPageRoutingModule } from './lab-info-routing.module';

import { LabInfoPage } from './lab-info.page';
import { ComponentsModule } from 'src/app/components/component.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LabInfoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [LabInfoPage]
})
export class LabInfoPageModule {}
