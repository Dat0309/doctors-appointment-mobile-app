import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {

  constructor(public formBuilder: FormBuilder, private router: Router,) { }
  ngOnInit() {
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get email() {
    return this.loginForm.get('email');
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get password() {
    return this.loginForm.get('password');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public errorMessages = {
    email: [
      { type: 'required', message: 'Không được bỏ trống Email' },
      { type: 'pattern', message: 'Hãy nhập đúng định dạng Email' }
    ],
    password: [
      { type: 'required', message: 'Không được bỏ trống mật khẩu' }
    ]
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });


  public submit() {
    console.log(this.loginForm.value);
    this.router.navigate(['/find']);

  }
}
