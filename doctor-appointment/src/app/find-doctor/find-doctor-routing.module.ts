import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindDoctorPage } from './find-doctor.page';

const routes: Routes = [
  {
    path: '',
    component: FindDoctorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FindDoctorPageRoutingModule {}
