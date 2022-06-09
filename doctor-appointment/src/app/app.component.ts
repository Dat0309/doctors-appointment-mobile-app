/* eslint-disable no-underscore-dangle */
/* eslint-disable @typescript-eslint/naming-convention */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable prefer-const */
import { Component, OnChanges, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { DoctorService } from './services/doctor/doctor.service';
import { StorageService } from './services/storage/storage.service';
import { CustomerService } from './services/customer/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  name_user: string = '';
  id_user: string = '';
  role: string = '';
  public appPages = [
    {
      title: 'Inbox',
      url: '/folder/Inbox',
      icon: 'mail'
    },
    {
      title: 'Outbox',
      url: '/folder/Outbox',
      icon: 'paper-plane'
    },
    {
      title: 'Favorites',
      url: '/folder/Favorites',
      icon: 'heart'
    },
    {
      title: 'Archived',
      url: '/folder/Archived',
      icon: 'archive'
    },
    {
      title: 'Trash',
      url: '/folder/Trash',
      icon: 'trash'
    },
    {
      title: 'Spam',
      url: '/folder/Spam',
      icon: 'warning'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private doctorService: DoctorService,
    private storageService: StorageService,
    private customerService: CustomerService,
    private activateRouteL: ActivatedRoute,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
    this.getProfile();
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
    this.getProfile();
  }

  public async getProfile() {
    let user = await this.storageService.get('USER');
    this.role = user.data.role;
    if (user.data.role === 'Bác sĩ') {
      this.doctorService.findByUserId(user.data._id).subscribe(
        (res: any) => {
          if (res.doctor !== null) {
            this.name_user = res.doctor[0]?.last_name + ' ' + res.doctor[0]?.first_name;
            this.id_user = user.data._id;
            console.log(this.id_user);
          }
        }
      );
    } else if (user.data.role === 'Bệnh nhân') {
      this.customerService.findByUserId(user.data._id).subscribe(
        (res: any) => {
          if (res.customer !== null) {
            this.name_user = res.customer[0].last_name + ' ' + res.customer[0].first_name;
          }
        }
      );
    }
  }

  logout() {
    this.storageService.clear();
    this.router.navigateByUrl('/login-form').then(
      () => {
        window.location.reload();
      }
    );
  }

  gotoDoctorSchedule(){
    this.router.navigateByUrl(`/appointment-schedule/${this.id_user}`);
  }
}
