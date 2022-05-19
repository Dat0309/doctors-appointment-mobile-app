import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  selected_option: string;
  constructor(public formBuilder: FormBuilder, private router: Router) {}
  ngOnInit() {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get firstname() {
    return this.signupForm.get('firstname');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get email() {
    return this.signupForm.get('email');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get lastname() {
    return this.signupForm.get('lastname');
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get mobilenumber() {
    return this.signupForm.get('mobilenumber');
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get password() {
    return this.signupForm.get('password');
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get confirmpassword() {
    return this.signupForm.get('confirmpassword');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public errorMessages = {
    firstname: [{ type: 'required', message: 'Vui lòng nhập tên' }],
    email: [{ type: 'required', message: 'Vui lòng nhập email' }],
    lastname: [{ type: 'required', message: 'Vui lòng nhập họ' }],
    mobilenumber: [
      { type: 'required', message: 'Vui lòng nhập số điện thoại' },
      { type: 'pattern', message: 'Vui lòng nhập số điện thoại hợp lệ' },
    ],
    password: [{ type: 'required', message: 'Yêu cầu mật khẩu' }],
    confirmpassword: [
      { type: 'required', message: 'Yêu cầu xác nhận mật khẩu' },
    ],
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  signupForm = this.formBuilder.group({
    firstname: ['', Validators.required],
    email: ['', Validators.required],
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
