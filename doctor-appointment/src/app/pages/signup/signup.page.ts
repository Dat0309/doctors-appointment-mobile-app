/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  postData = {
    username: '',
    password: ''
  };
  // eslint-disable-next-line @typescript-eslint/naming-convention
  selected_option: string;
  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    ) {}
  ngOnInit() {}

  // eslint-disable-next-line @typescript-eslint/member-ordering
  get email() {
    return this.signupForm.get('email');
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
  get role() {
    return this.signupForm.get('role');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  public errorMessages = {
    email: [{ type: 'required', message: 'Vui lòng nhập email' }],
    password: [{ type: 'required', message: 'Yêu cầu mật khẩu' }],
    confirmpassword: [
      { type: 'required', message: 'Yêu cầu xác nhận mật khẩu' },
    ],
    role: [{ type: 'required', message: 'Vui lòng chọn quyền'}],
  };

  validationInputs(){
    const username = this.signupForm.get('email').value;
    const password = this.signupForm.get('password').value;
    const confirmpassword = this.signupForm.get('confirmpassword').value;
    const role = this.signupForm.get('role').value;
    return (
      username && password && confirmpassword && role
      && username.length > 0 && password.length > 0 && confirmpassword.length > 0 && role.length > 0
    );
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  signupForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
    confirmpassword: ['', Validators.required],
    role: ['', Validators.required]
  });

  public async submit() {
    this.postData.username = this.signupForm.get('email').value;
    this.postData.password = this.signupForm.get('password').value;

    if(this.validationInputs()){
      await this.authService.register(this.signupForm.value).then(
        (res: any) => {
          if(res !== ''){
            console.log(this.signupForm.value);
            // eslint-disable-next-line no-underscore-dangle
            const uid = res;
            console.log(uid);
            if(this.signupForm.get('role').value === 'Bác sĩ'){
              this.router.navigate([`/doctors-signup/${uid}`]);
            }
            else if(this.signupForm.get('role').value === 'Bệnh nhân'){
              this.router.navigate([`/user-signup/${uid}`]);
            }
          }
          else{
            console.log('Fail');
          }
        },
        (error: any)=>{
          console.log('Net work Issue.');
        }
      );
    }
  }
}
