import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabInfoPage } from './lab-info.page';

const routes: Routes = [
  {
    path: '',
    component: LabInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabInfoPageRoutingModule {}
