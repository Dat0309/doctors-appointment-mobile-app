import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DiseaseinfoPage } from './diseaseinfo.page';

const routes: Routes = [
  {
    path: '',
    component: DiseaseinfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DiseaseinfoPageRoutingModule {}
