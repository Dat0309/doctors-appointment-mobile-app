import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LabTestPage } from './lab-test.page';

const routes: Routes = [
  {
    path: '',
    component: LabTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LabTestPageRoutingModule {}
