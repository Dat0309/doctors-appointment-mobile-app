import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {

 constructor(public FormBuilder : FormBuilder, private router: Router,) { }
ngOnInit() {
}
get firstname() {
return this.signupForm.get("firstname");
}
get lastname() {
return this.signupForm.get("lastname");
}
get mobilenumber() {
return this.signupForm.get('mobilenumber');
}
get password() {
return this.signupForm.get('password');
}
get confirmpassword() {
return this.signupForm.get('confirmpassword');
}


public errorMessages = {
firstname: [
{ type: 'required', message: 'firstname is required' },

],
lastname: [
{ type: 'required', message: 'lastname is required' },
],
mobilenumber: [
{ type: 'required', message: 'mobile number is required' },
{ type: 'pattern', message: 'Please enter a valid mobile number' }
],
password: [
{ type: 'required', message: 'password is required' },
],
confirmpassword: [
{ type: 'required', message: 'confirmpassword is required' },
],
};

signupForm = this.FormBuilder.group({
firstname: ['', Validators.required],
lastname: ['', Validators.required],
mobilenumber: ['', Validators.required],
password: ['', Validators.required],
confirmpassword: ['', Validators.required],

});

  public submit() {
	  console.log(this.signupForm.value);
	  this.router.navigate(['/location']);
	}
}