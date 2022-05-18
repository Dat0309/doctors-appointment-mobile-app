import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SplashsreenPageRoutingModule } from './splashsreen-routing.module';

import { SplashsreenPage } from './splashsreen.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SplashsreenPageRoutingModule
  ],
  declarations: [SplashsreenPage]
})
export class SplashsreenPageModule {}
