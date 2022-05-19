import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SplashsreenPage } from './splashsreen.page';

const routes: Routes = [
  {
    path: '',
    component: SplashsreenPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SplashsreenPageRoutingModule {}
