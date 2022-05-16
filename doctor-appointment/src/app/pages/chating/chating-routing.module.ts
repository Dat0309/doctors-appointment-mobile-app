import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChatingPage } from './chating.page';

const routes: Routes = [
  {
    path: '',
    component: ChatingPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ChatingPageRoutingModule {}
