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
  return this.forgotForm.get('mobilenumber');
}

public errorMessages = {
    email: [
      	{ type: 'required', message: 'email is required' },
      	{ type: 'pattern', message: 'Please enter a valid email number' }
    ],
      mobilenumber: [
      	{ type: 'required', message: 'Mobilenumber is required' },
      	{ type: 'pattern', message: 'Please enter a valid mobilenumber number' }
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
