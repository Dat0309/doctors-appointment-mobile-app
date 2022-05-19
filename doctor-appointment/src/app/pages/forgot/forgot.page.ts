import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.page.html',
  styleUrls: ['./forgot.page.scss'],
})
export class ForgotPage implements OnInit {

   constructor(public FormBuilder : FormBuilder) { }
  ngOnInit() {
  }
get email() {
  return this.forgotForm.get('email');
}
get mobilenumber() {
  return this.forgotForm.get('Số điện thoại');
}

public errorMessages = {
    email: [
      	{ type: 'required', message: 'Yêu cầu nhập email' },
      	{ type: 'pattern', message: 'Vui lòng nhập đúng số điện thoại' }
    ],
      mobilenumber: [
      	{ type: 'required', message: 'Yêu cầu nhập số điện thoại' },
      	{ type: 'pattern', message: 'Vui lòng nhập đúng số điện thoại' }
    ],
  };

forgotForm = this.FormBuilder.group({
    email: ['', Validators.required], 
    mobilenumber: ['', Validators.required],  
  });
  

  public submit() {
	  console.log(this.forgotForm.value);
	}
}
