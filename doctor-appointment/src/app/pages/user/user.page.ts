/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerService } from 'src/app/services/customer/customer.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.page.html',
  styleUrls: ['./user.page.scss'],
})
export class UserPage implements OnInit {

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
    description: '',
  };

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private customerService: CustomerService,
    private activateRoute: ActivatedRoute,
  ) {
  }

  ngOnInit() {
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

  get description() {
    return this.doctorSignupForm.get('description');
  }

  public errorMessages = {
    last_name: [{ type: 'required', message: 'Vui lòng nhập họ lót' }],
    first_name: [{ type: 'required', message: 'Vui lòng nhập tên' }],
    date_of_birth: [{ type: 'required', message: 'Vui lòng nhập ngày sinh' }],
    genre: [{ type: 'required', message: 'Vui lòng nhập giới tính' }],
    telephone: [{ type: 'required', message: 'Vui lòng nhập số điện thoại' }],
    street: [{ type: 'required', message: 'Vui lòng nhập Địa chỉ' }],
    ward: [{ type: 'required', message: 'Vui lòng nhập Phường' }],
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
    const description = this.doctorSignupForm.get('description').value;

    return (
      last_name && first_name && date_of_birth && genre && telephone
      && street && ward && description
      && last_name.length > 0 && first_name.length > 0 && date_of_birth.length > 0 && genre.length > 0
      && street.length > 0 && ward.length > 0 && description.length > 0
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
    this.postData.description = this.doctorSignupForm.get('description').value;

    if (this.validationInputs()) {
      console.log(this.postData);
      this.customerService.createByHTTP(this.postData).then(
        (res: any) => {
          if (res) {
            this.router.navigate([`/login-form`]);
          }
          else {
            console.log('Fail');
          }
        },
        (error: any) => {
          console.log('Net work Issue.');
        }
      );
    }
  }

}
