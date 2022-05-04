import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CardiologistPage } from './cardiologist.page';

const routes: Routes = [
  {
    path: '',
    component: CardiologistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CardiologistPageRoutingModule {}
