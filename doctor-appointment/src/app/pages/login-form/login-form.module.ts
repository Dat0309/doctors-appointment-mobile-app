import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginFormPageRoutingModule } from './login-form-routing.module';

import { LoginFormPage } from './login-form.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginFormPageRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [LoginFormPage]
})
export class LoginFormPageModule {}
