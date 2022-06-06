/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Customer, CustomerService } from 'src/app/services/customer/customer.service';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';
import { StorageService } from 'src/app/services/storage/storage.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  selected_option: string;
  doctor: Doctor;
  role: string = '';
  customer: Customer;

  postData = {
    last_name: '',
    first_name: '',
    date_of_birth: '',
    genre: '',
    telephone: '',
    province: 'Lâm Đồng',
    district: 'Đà Lạt',
    street: '',
    ward: '',
    description: '',
    facebook_id: '',
    zalo_id: ''
  };

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private storageService: StorageService,
    private doctorService: DoctorService,
    private customerSetrvice: CustomerService,
    private toastController: ToastController) { }
  ngOnInit() {
    this.getUserLocal();
  }

  async presentToast(mess: string){
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000,
    });
    toast.present();
  }

  get email() {
    return this.profileForm.get('email');
  }

  get password() {
    return this.profileForm.get('password');
  }

  get confirmpassword() {
    return this.profileForm.get('confirmpassword');
  }

  get first_name(){
    return this.profileForm.get('first_name');
  }

  get last_name(){
    return this.profileForm.get('last_name');
  }

  get phone(){
    return this.profileForm.get('phone');
  }

  // eslint-disable-next-line @typescript-eslint/member-ordering
  profileForm = this.formBuilder.group({
    last_name: ['', Validators.required],
    first_name: ['', Validators.required],
    date_of_birth: ['', Validators.required],
    genre: ['', Validators.required],
    telephone: ['', Validators.required],
    street: ['', Validators.required],
    ward: ['', Validators.required],
    description: ['', Validators.required],
    facebook_id: [''],
    zalo_id: ['']
  });

  public async getUserLocal() {
    let user = await this.storageService.get('USER');
    this.role = user.data.role;
    if (user.data.role === 'Bác sĩ') {
      this.getDoctorByUid(user.data._id);
    }
    else if (user.data.role === 'Bệnh nhân') {
      this.getCustomerByUid(user.data._id);
    }
  }

  public getDoctorByUid(id: any) {
    this.doctorService.findByUserId(id).subscribe(
      (res: any) => {
        this.doctor = res.doctor[0];
      }
    );
  }

  public getCustomerByUid(id: any) {
    this.customerSetrvice.findByUserId(id).subscribe(
      (res: any) => {
        this.customer = res.customer[0];
      }
    );
  }

  validationInputs() {
    const last_name = this.profileForm.get('last_name').value;
    const first_name = this.profileForm.get('first_name').value;
    const date_of_birth = this.profileForm.get('date_of_birth').value;
    const genre = this.profileForm.get('genre').value;
    const telephone = this.profileForm.get('telephone').value;
    const street = this.profileForm.get('street').value;
    const ward = this.profileForm.get('ward').value;
    const description = this.profileForm.get('description').value;

    return (
      last_name && first_name && date_of_birth && genre && telephone
      && street && ward && description
      && last_name.length > 0 && first_name.length > 0 && date_of_birth.length > 0 && genre.length > 0
      && street.length > 0 && ward.length > 0 && description.length > 0
    );
  }

  public submit() {
    this.postData.last_name = this.profileForm.get('last_name').value;
    this.postData.first_name = this.profileForm.get('first_name').value;
    this.postData.date_of_birth = this.profileForm.get('date_of_birth').value;
    this.postData.genre = this.profileForm.get('genre').value;
    this.postData.telephone = this.profileForm.get('telephone').value;
    this.postData.street = this.profileForm.get('street').value;
    this.postData.ward = this.profileForm.get('ward').value;
    this.postData.description = this.profileForm.get('description').value;
    this.postData.facebook_id = this.profileForm.get('facebook_id').value;
    this.postData.zalo_id = this.profileForm.get('zalo_id').value;

    if (this.validationInputs()) {
      console.log(this.postData);
      if(this.role === 'Bác sĩ'){
        this.doctorService.updateByHTTP(this.doctor._id, this.postData).then(
          (res: any) => {
            if(res){
              this.presentToast('Cập nhật thông tin thành công!');
            }else{
              this.presentToast('Xảy ra lỗi');
            }
          }
        );
      }else if(this.role === 'Bệnh nhân'){
        this.customerSetrvice.updateByHTTP(this.customer._id, this.postData).then(
          (res: any) => {
            if(res){
              this.presentToast('Cập nhật thông tin thành công!');
            }else{
              this.presentToast('Xảy ra lỗi');
            }
          }
        );
      }
    }
  }
}
