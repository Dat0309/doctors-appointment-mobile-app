import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppointmentSchedulePage } from './appointment-schedule.page';

const routes: Routes = [
  {
    path: '',
    component: AppointmentSchedulePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppointmentSchedulePageRoutingModule {}
