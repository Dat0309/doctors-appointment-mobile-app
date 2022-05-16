import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SearchTestPage } from './search-test.page';

const routes: Routes = [
  {
    path: '',
    component: SearchTestPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SearchTestPageRoutingModule {}
