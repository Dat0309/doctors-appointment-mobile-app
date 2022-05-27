/* eslint-disable eol-last */
/* eslint-disable @typescript-eslint/quotes */
import { CardcategorylistComponent } from './cardcategorylist/cardcategorylist.component';

import { CardcategoryitemComponent } from './cardcategoryitem/cardcategoryitem.component';
import { CarddoctoritemComponent } from './carddoctoritem/carddoctoritem.component';
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { IonicModule } from "@ionic/angular";
import { MapComponent } from './map/map.component';
import { CardappointmentComponent } from './cardappointment/cardappointment.component';

const COMPONENTS = [
    CarddoctoritemComponent,
    CardcategoryitemComponent,
    CardcategorylistComponent,
    CardappointmentComponent,
    MapComponent
  ];

  @NgModule({
    declarations: COMPONENTS,
    exports: COMPONENTS,
    imports: [
      CommonModule,
      IonicModule,
      FormsModule
    ]
  })
  export class ComponentsModule { }