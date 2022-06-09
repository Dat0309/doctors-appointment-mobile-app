/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/dot-notation */
/* eslint-disable @typescript-eslint/member-ordering */
/* eslint-disable @typescript-eslint/quotes */
/* eslint-disable id-blacklist */
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from '@angular/router';
import { IonDatetime, ToastController } from '@ionic/angular';
import { format, parseISO, getDate, getMonth, getYear } from 'date-fns';
import { Appointment, AppointmentService } from 'src/app/services/appointment/appointment.service';
import { Company, CompanyService } from 'src/app/services/company/company.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';
import { Specialization, SpecializationService } from 'src/app/services/specialization/specialization.service';
import { StorageService } from 'src/app/services/storage/storage.service';
@Component({
  selector: 'app-book-appointment',
  templateUrl: './book-appointment.page.html',
  styleUrls: ['./book-appointment.page.scss'],
})
export class BookAppointmentPage implements OnInit {
  doctor = new Doctor();
  specialization = new Specialization();
  company = new Company();
  customer_id: string = '';
  date_temp: string = '';
  invalid_dates: any[] = [];
  appointments: Appointment[] = [];

  postData = {
    name: '',
    doctor: '',
    customer: '',
    province: '',
    district: '',
    ward: '',
    street: '',
    contact: '',
    start_time: '',
    end_time: '',
    status: 'comming'
  };

  @ViewChild(IonDatetime, { static: true }) datetime: IonDatetime;
  dateValue = '';
  dateValue2 = '';

  constructor(
    public formBuilder: FormBuilder,
    private doctorService: DoctorService,
    private activateRoute: ActivatedRoute,
    private specializationService: SpecializationService,
    private companyService: CompanyService,
    private storageService: StorageService,
    private customerService: CustomerService,
    private appointmentService: AppointmentService,
    private router: Router,
    private toastController: ToastController,
    )
    {}

  ngOnInit() {
    this.getDoctorInfo();
    this.getCustomerByUserId();
    this.getInvalidDate();
  }

  async presentToast(mess: string){
    const toast = await this.toastController.create({
      message: mess,
      duration: 2000,
    });
    toast.present();
  }

  public async getDoctorInfo(){
    await this.doctorService.getByID(this.activateRoute.snapshot.params['id'])
    .subscribe(
      (res: any) => {
        if(res !== null){
          this.doctor = res;
          this.getCompany(this.doctor.company_id);
          this.getSpecialization(this.doctor.specializations);
          console.log(this.doctor);
        }
      }
    );
  }

  public async getCustomerByUserId(){
    let user = await this.storageService.get('USER');
    this.customerService.findByUserId(user.data._id).subscribe(
      (res: any) => {
        this.customer_id = res.customer[0]._id;
        console.log(this.customer_id);
      }
    );
  }

  getSpecialization(id: any) {
    this.specializationService.getByID(id).subscribe((res: any) => {
      this.specialization = res;
      console.log(res);
    });
  }

  getCompany(id: any) {
    this.companyService.getByID(id).subscribe((res: any) => {
      this.company = res;
    });
  }

  get name() {
    return this.bookappointment.get('name');
  }
  get number() {
    return this.bookappointment.get('number');
  }
  get date() {
    return this.bookappointment.get('date');
  }

  get timeStart() {
    return this.bookappointment.get('timeStart');
  }
  get timeEnd() {
    return this.bookappointment.get('timeEnd');
  }

  public errorMessages = {
    name: [
      { type: 'required', message: 'không bỏ trống tên cuộc hẹn' },
      { type: 'pattern', message: 'điền đúng tên cuộc hẹn' }
    ],
    number: [
      { type: 'required', message: 'không bỏ trống liên hệ' }
    ]

  };

  bookappointment = this.formBuilder.group({
    name: ['', Validators.required],
    number: ['', Validators.required],
    date: ['', Validators.required],
    timeStart: ['', Validators.required],
    timeEnd: ['', Validators.required]
  });

  getTime(time: string){
    this.date_temp = this.bookappointment.get('date').value;
    return time +' '+ this.date_temp.split('T')[0];
  }


  public submit() {

    this.postData.name = this.bookappointment.get('name').value;
    this.postData.contact = this.bookappointment.get('number').value;
    this.postData.doctor = this.doctor._id;
    this.postData.customer = this.customer_id;
    this.postData.province = this.doctor.province;
    this.postData.district = this.doctor.district;
    this.postData.ward = this.doctor.ward;
    this.postData.street = this.doctor.street;
    this.postData.start_time = this.getTime(this.bookappointment.get('timeStart').value);
    this.postData.end_time = this.getTime(this.bookappointment.get('timeEnd').value);

    console.log(this.postData);
    this.appointmentService.createByHTTP(this.postData)
    .then(
      (res: any)=>{
        if(res !== null){
          this.presentToast('Đặt lịch hẹn thành công!');
          this.router.navigateByUrl(`/appointment-detail/${res}`);
        }
        else{
          this.presentToast('Đã xảy ra lỗi!');
        }
      }
    );

  }
  confirm() {
    this.datetime.confirm();
  }

  reset() {
    this.datetime.reset();
  }

  formatDate(value: string) {
    return format(parseISO(value), 'MMM dd yyyy');
  }

  isDateEnabled(dateIsoString: string) {
    const date = new Date(dateIsoString);
    if (getDate(date) === 1 && getMonth(date) === 0 && getYear(date) === 2022) {
      // Disables January 1, 2022.
      return false;
    }
    return true;
  }

  getInvalidDate(){
    this.appointmentService.getAllByDoctorId(this.activateRoute.snapshot.params['id']).subscribe(
    (res: any) => {
      this.appointments = res.appointment;
      console.log(this.appointments);
      this.appointments.map((e)=>{
        let time = e.start_time + ' Đến ' + e.end_time;
        this.invalid_dates.push(time);
        console.log(this.invalid_dates.length);
      });
    });
  }
}
