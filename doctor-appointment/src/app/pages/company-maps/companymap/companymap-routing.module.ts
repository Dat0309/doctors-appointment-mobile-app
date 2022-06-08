import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CompanymapPage } from './companymap.page';

const routes: Routes = [
  {
    path: '',
    component: CompanymapPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CompanymapPageRoutingModule {}
