/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable no-underscore-dangle */
/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/member-ordering */
import { Component, OnInit,OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';
import { Appointment, AppointmentService } from 'src/app/services/appointment/appointment.service';
import { Company } from 'src/app/services/company/company.service';
import { CustomerService } from 'src/app/services/customer/customer.service';
import { Doctor, DoctorService } from 'src/app/services/doctor/doctor.service';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-my-appointment',
  templateUrl: './my-appointment.page.html',
  styleUrls: ['./my-appointment.page.scss'],
})
export class MyAppointmentPage implements OnInit, OnChanges {

  constructor(
    private appointmentService: AppointmentService,
    private router: Router,
    private customerService: CustomerService,
    private storageService: StorageService,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) { }

  appointments$: any[] = [];
  customer_id: string;

  ngOnInit() {
    this.presentLoading();
    this.getCustomerByUserId();
    setTimeout(()=>{
      this.getMyAppointment(this.customer_id);
    }, 2000);
  }

  ngOnChanges(): void {
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
      message: 'Đang tải dữ liệu...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }

  public async getMyAppointment(id: string) {
      this.appointmentService.getAllByCustomerId(id).subscribe(
        async (res: any) => {
          if (res != null) {
            this.appointments$ = res.appointment;
          } else {
            console.log('Fail to load appoinment');
          }
        }
      );

  }

  public async getCustomerByUserId(){
    let user = await this.storageService.get('USER');
    this.customerService.findByUserId(user.data._id).subscribe(
      (res: any) => {
        if (res != null) {
          this.customer_id = res.customer[0]._id;
        } else {
          console.log('Fail to load appoinment');
        }
      }
    );
  }

  public update(id: string) {
    this.appointmentService.update(id);
    window.location.reload();
    this.presentToast('Đánh dấU hoàn thành!');
  }

  public delete(id: string) {
    this.appointmentService.delete(id);
    window.location.reload();
    this.presentToast('Xoá thành công');
  }

  public detailAppointment(id: string){
    this.router.navigateByUrl(`/appointment-detail/${id}`);
  }

}
