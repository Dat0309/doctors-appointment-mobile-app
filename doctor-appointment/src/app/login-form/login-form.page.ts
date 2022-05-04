import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {

  constructor(public FormBuilder : FormBuilder, private router: Router,) { }
  ngOnInit() {
  }
get email() {
  return this.loginForm.get('email');
}
get password() {
  return this.loginForm.get('password');
}

public errorMessages = {
    email: [
      	{ type: 'required', message: 'email is required' },
      	{ type: 'pattern', message: 'Please enter a valid email number' }
    ],
    password: [
      { type: 'required', message: 'password is required' }
    ]
  };

loginForm = this.FormBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],   
  });
  

  public submit() {
	  console.log(this.loginForm.value);
    this.router.navigate(['/find']);
    
	}
}