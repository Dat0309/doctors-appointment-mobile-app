import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpecialitiesPage } from './specialities.page';

const routes: Routes = [
  {
    path: '',
    component: SpecialitiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpecialitiesPageRoutingModule {}
