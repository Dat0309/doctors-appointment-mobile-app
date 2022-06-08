/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { DoctorService } from 'src/app/services/doctor/doctor.service';
import { Specialization, SpecializationService } from 'src/app/services/specialization/specialization.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage implements OnInit {
  specializationList: Specialization[] = [];

  postData = {
    user_id: this.getId,
    last_name: '',
    first_name: '',
    date_of_birth: '',
    genre: '',
    telephone: '',
    avatar_url: 'https://media.istockphoto.com/vectors/doctor-icon-or-avatar-physician-with-stethoscope-medicine-symbol-vector-id1150502263?k=20&m=1150502263&s=612x612&w=0&h=s2_jO-vB7I_Jd5UqFIacb5hpXrTFjOFpOTABRiVg40A=',
    province: 'Lâm Đồng',
    district: 'Đà Lạt',
    street: '',
    ward: '',
    level_of_education: '',
    specializations:
    {
      id: ''
    },
    description: '',
    latitute:'11.945033088055524',
    longtitute: '108.43339741261677'
  };

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private dotorService: DoctorService,
    private specializationService: SpecializationService,
    private activateRoute: ActivatedRoute,
    private toastController: ToastController
  ) {
    this.getSpecializations();
  }

  ngOnInit() {
  }

  async presentToast(mess: string){
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000,
    });
    toast.present();
  }

  get getId() {
    return this.activateRoute.snapshot.paramMap.get('id');
  }

  get first_name() {
    return this.doctorSignupForm.get('first_name');
  }

  get last_name() {
    return this.doctorSignupForm.get('last_name');
  }

  get date_of_birth() {
    return this.doctorSignupForm.get('date_of_birth');
  }

  get genre() {
    return this.doctorSignupForm.get('genre');
  }

  get telephone() {
    return this.doctorSignupForm.get('telephone');
  }

  get street() {
    return this.doctorSignupForm.get('street');
  }

  get ward() {
    return this.doctorSignupForm.get('ward');
  }

  get level_of_education() {
    return this.doctorSignupForm.get('level_of_education');
  }

  get specializations() {
    return this.doctorSignupForm.get('specializations');
  }

  get description() {
    return this.doctorSignupForm.get('description');
  }

  public getSpecializations() {
    return this.specializationService.getAll().subscribe(
      (res: any) => {
        console.log(res);
        this.specializationList = res.specialization;
      }
    );
  }

  public errorMessages = {
    last_name: [{ type: 'required', message: 'Vui lòng nhập họ lót' }],
    first_name: [{ type: 'required', message: 'Vui lòng nhập tên' }],
    date_of_birth: [{ type: 'required', message: 'Vui lòng nhập ngày sinh' }],
    genre: [{ type: 'required', message: 'Vui lòng nhập giới tính' }],
    telephone: [{ type: 'required', message: 'Vui lòng nhập số điện thoại' }],
    street: [{ type: 'required', message: 'Vui lòng nhập Địa chỉ' }],
    ward: [{ type: 'required', message: 'Vui lòng nhập Phường' }],
    level_of_education: [{ type: 'required', message: 'Vui lòng nhập trình độ học vấn' }],
    specializations: [{ type: 'required', message: 'Vui lòng nhập chuyên môn' }],
    description: [{ type: 'required', message: 'Vui lòng nhập mô tả về chuyên môn' }],
  };

  validationInputs() {
    const last_name = this.doctorSignupForm.get('last_name').value;
    const first_name = this.doctorSignupForm.get('first_name').value;
    const date_of_birth = this.doctorSignupForm.get('date_of_birth').value;
    const genre = this.doctorSignupForm.get('genre').value;
    const telephone = this.doctorSignupForm.get('telephone').value;
    const street = this.doctorSignupForm.get('street').value;
    const ward = this.doctorSignupForm.get('ward').value;
    const level_of_education = this.doctorSignupForm.get('level_of_education').value;
    const specializations = this.doctorSignupForm.get('specializations').value;
    const description = this.doctorSignupForm.get('description').value;

    return (
      last_name && first_name && date_of_birth && genre && telephone
      && street && ward && level_of_education && specializations && description
      && last_name.length > 0 && first_name.length > 0 && date_of_birth.length > 0 && genre.length > 0
      && street.length > 0 && ward.length > 0 && level_of_education.length > 0
      && specializations.length > 0 && description.length > 0
    );
  }

  doctorSignupForm = this.formBuilder.group({
    last_name: ['', Validators.required],
    first_name: ['', Validators.required],
    date_of_birth: ['', Validators.required],
    genre: ['', Validators.required],
    telephone: ['', Validators.required],
    street: ['', Validators.required],
    ward: ['', Validators.required],
    level_of_education: ['', Validators.required],
    specializations: ['', Validators.required],
    description: ['', Validators.required]
  });

  public submit() {
    this.postData.last_name = this.doctorSignupForm.get('last_name').value;
    this.postData.first_name = this.doctorSignupForm.get('first_name').value;
    this.postData.date_of_birth = this.doctorSignupForm.get('date_of_birth').value;
    this.postData.genre = this.doctorSignupForm.get('genre').value;
    this.postData.telephone = this.doctorSignupForm.get('telephone').value;
    this.postData.street = this.doctorSignupForm.get('street').value;
    this.postData.ward = this.doctorSignupForm.get('ward').value;
    this.postData.level_of_education = this.doctorSignupForm.get('level_of_education').value;
    this.postData.specializations.id = this.doctorSignupForm.get('specializations').value;
    this.postData.description = this.doctorSignupForm.get('description').value;

    if (this.validationInputs()) {
      console.log(this.postData);
      this.dotorService.createByHTTP(this.postData).then(
        (res: any) => {
          if (res) {
            this.presentToast('Đăng ký thành công');
            this.router.navigate([`/login-form`]);
          }
          else {
            this.presentToast('Đã xảy ra lỗi!');
          }
        },
        (error: any) => {
          this.presentToast('Lỗi mạng');
        }
      );
    }
  }
}
