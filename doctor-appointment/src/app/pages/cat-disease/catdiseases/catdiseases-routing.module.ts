import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CatdiseasesPage } from './catdiseases.page';

const routes: Routes = [
  {
    path: '',
    component: CatdiseasesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CatdiseasesPageRoutingModule {}
