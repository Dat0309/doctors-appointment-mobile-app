/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth/auth.service';
import { StorageService } from 'src/app/services/storage/storage.service';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.page.html',
  styleUrls: ['./login-form.page.scss'],
})
export class LoginFormPage implements OnInit {
  postData = {
    username: '',
    password: '',
  };

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private storageService: StorageService,
    private toastController: ToastController,
    private loadingController: LoadingController) { }
  ngOnInit() {
  }
  async presentToast(mess: string){
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000,
    });
    toast.present();
  }

  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Đăng nhập...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get email() {
    this.postData.username = this.loginForm.get('email').value;
    return this.loginForm.get('email');
  }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  get password() {
    this.postData.password = this.loginForm.get('password').value;
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
    ],
    account: [
      {type: 'incorrect', message: 'Nhập sai Tài khoản hoặc Mật khẩu'}
    ],
  };

  // eslint-disable-next-line @typescript-eslint/member-ordering
  loginForm = this.formBuilder.group({
    email: ['', Validators.required],
    password: ['', Validators.required],
  });

  validationInputs(){
    const username = this.postData.username.trim();
    const password = this.postData.password.trim();
    return (
      this.postData.username && this.postData.password && username.length > 0 && password.length > 0
    );
  }

  public async submit() {
    this.postData.username = this.loginForm.get('email').value;
    this.postData.password = this.loginForm.get('password').value;
    if(this.validationInputs()){
      this.presentLoading();
      this.authService.login(this.loginForm.value).then(
        async (res: any) => {
          if(res){
            let user = await this.storageService.get('USER');
            if(user.data.role === 'Bác sĩ'){
              this.presentToast('Đăng nhập thành công!');
              this.router.navigate([`/homepage`]).then(
                () => {
                  window.location.reload();
                }
              );
            }else if(user.data.role === 'Bệnh nhân'){
              this.presentToast('Đăng nhập thành công!');
              this.router.navigate(['/homepage']).then(
                () => {
                  window.location.reload();
                }
              );
            }

          }else {
            this.presentToast('Email hoặc mật khẩu sai!!');
          }
        },
        (error: any) => {
          this.presentToast('Lỗi mạng!');
        }
      );
    }
  }
}
