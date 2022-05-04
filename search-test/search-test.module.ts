import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SearchTestPageRoutingModule } from './search-test-routing.module';

import { SearchTestPage } from './search-test.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SearchTestPageRoutingModule
  ],
  declarations: [SearchTestPage]
})
export class SearchTestPageModule {}
