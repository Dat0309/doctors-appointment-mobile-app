import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabMapPage } from './lab-map.page';

const routes: Routes = [
  {
    path: '',
    component: LabMapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabMapPageRoutingModule {}
