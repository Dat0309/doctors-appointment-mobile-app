import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicalShopPage } from './medical-shop.page';

const routes: Routes = [
  {
    path: '',
    component: MedicalShopPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicalShopPageRoutingModule {}
