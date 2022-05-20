/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorService } from 'src/app/services/doctor/doctor.service';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.page.html',
  styleUrls: ['./doctors.page.scss'],
})
export class DoctorsPage implements OnInit {

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private dotorService: DoctorService,
  ) { }

  ngOnInit() {
  }

  get surname() {
    return this.doctorSignupForm.get('surname');
  }

  get name() {
    return this.doctorSignupForm.get('name');
  }

  get date() {
    return this.doctorSignupForm.get('date');
  }

  get gender() {
    return this.doctorSignupForm.get('gender');
  }

  get phone() {
    return this.doctorSignupForm.get('phone');
  }

  get street() {
    return this.doctorSignupForm.get('street');
  }

  get ward() {
    return this.doctorSignupForm.get('ward');
  }

  get level() {
    return this.doctorSignupForm.get('level');
  }

  get specialized() {
    return this.doctorSignupForm.get('specialized');
  }

  get company() {
    return this.doctorSignupForm.get('company');
  }

  get description() {
    return this.doctorSignupForm.get('description');
  }

  public errorMessages = {
    surname: [{ type: 'required', message: 'Vui lòng nhập họ lót' }],
    name: [{ type: 'required', message: 'Vui lòng nhập tên' }],
    date: [{ type: 'required', message: 'Vui lòng nhập ngày sinh' }],
    gender: [{ type: 'required', message: 'Vui lòng nhập giới tính' }],
    phone: [{ type: 'required', message: 'Vui lòng nhập số điện thoại' }],
    street: [{ type: 'required', message: 'Vui lòng nhập Địa chỉ' }],
    ward: [{ type: 'required', message: 'Vui lòng nhập Phường' }],
    level: [{ type: 'required', message: 'Vui lòng nhập trình độ học vấn' }],
    specialized: [{ type: 'required', message: 'Vui lòng nhập chuyên môn' }],
    company: [{ type: 'required', message: 'Vui lòng nhập phòng khám' }],
    description: [{ type: 'required', message: 'Vui lòng nhập mô tả về chuyên môn' }],
  };

  validationInputs() {
    const surname = this.doctorSignupForm.get('surname').value;
    const name = this.doctorSignupForm.get('name').value;
    const date = this.doctorSignupForm.get('date').value;
    const gender = this.doctorSignupForm.get('gender').value;
    const phone = this.doctorSignupForm.get('phone').value;
    const street = this.doctorSignupForm.get('street').value;
    const ward = this.doctorSignupForm.get('ward').value;
    const level = this.doctorSignupForm.get('level').value;
    const specialized = this.doctorSignupForm.get('specialized').value;
    const company = this.doctorSignupForm.get('company').value;
    const description = this.doctorSignupForm.get('description').value;

    return (
      surname && name && date && gender && phone && gender
      && street && ward && level && company && specialized && description
      && surname.length > 0 && name.length > 0 && date.length > 0 && gender.length > 0
      && street.length > 0 && ward.length > 0 && level.length > 0 && company.length > 0
      && specialized.length > 0 && description.length > 0
    );
  }

  doctorSignupForm = this.formBuilder.group({
    surname: ['', Validators.required],
    name: ['', Validators.required],
    date: ['', Validators.required],
    gender: ['', Validators.required],
    phone: ['', Validators.required],
    street: ['', Validators.required],
    ward: ['', Validators.required],
    level: ['', Validators.required],
    specialized: ['', Validators.required],
    company: ['', Validators.required],
    description: ['', Validators.required]
  });

  public submit() {
    if (this.validationInputs()) {
      this.dotorService.create(this.doctorSignupForm.value).subscribe(
        (res: any) => {
          if (res) {
            console.log(res);
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
