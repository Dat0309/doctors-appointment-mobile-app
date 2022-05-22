import { CardcategorylistComponent } from './components/cardcategorylist/cardcategorylist.component';
import { CardcategoryitemComponent } from './components/cardcategoryitem/cardcategoryitem.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    // redirectTo: 'splashsreen',
    redirectTo: 'homepage',
    // redirectTo: 'specialities',
    

    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadChildren: () =>
      import('./pages/folder/folder.module').then((m) => m.FolderPageModule),
  },
  {
    path: 'login-form',
    loadChildren: () =>
      import('./pages/login-form/login-form.module').then(
        (m) => m.LoginFormPageModule
      ),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./pages/signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'forgot',
    loadChildren: () =>
      import('./pages/forgot/forgot.module').then((m) => m.ForgotPageModule),
  },
  // {
  //   path: 'location',
  //   loadChildren: () => import('./pages/location/location.module').then(m => m.LocationPageModule)
  // },

  // {
  //   path: 'appointment',
  //   loadChildren: () => import('./pages/appointment/appointment.module').then(m => m.AppointmentPageModule)
  // },
  // {
  //   path: 'find',
  //   loadChildren: () => import('./pages/find/find.module').then(m => m.FindPageModule)
  // },
  // {
  //   path: 'find-doctor',
  //   loadChildren: () => import('./pages/find-doctor/find-doctor.module').then(m => m.FindDoctorPageModule)
  // },
  {
    path: 'cardiologist/:id',
    loadChildren: () =>
      import('./pages/cardiologist/cardiologist.module').then(
        (m) => m.CardiologistPageModule
      ),
  },
  {
    path: 'map-doctor',
    loadChildren: () =>
      import('./pages/map/map.module').then((m) => m.MapPageModule),
  },
  {
    path: 'book-appointment',
    loadChildren: () =>
      import('./pages/book-appointment/book-appointment.module').then(
        (m) => m.BookAppointmentPageModule
      ),
  },
  {
    path: 'doctor-info/:id', //xoa id
    loadChildren: () =>
      import('./pages/doctor-info/doctor-info.module').then(
        (m) => m.DoctorInfoPageModule
      ),
  },
  {
    path: 'my-appointment',
    loadChildren: () =>
      import('./pages/my-appointment/my-appointment.module').then(
        (m) => m.MyAppointmentPageModule
      ),
  },
  {
    path: 'appointment-detail/:id',
    loadChildren: () =>
      import('./pages/appointment-detail/appointment-detail.module').then(
        (m) => m.AppointmentDetailPageModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./pages/profile/profile.module').then((m) => m.ProfilePageModule),
  },
  {
    path: 'appointment-schedule/:id',
    loadChildren: () =>
      import('./pages/appointment-schedule/appointment-schedule.module').then(
        (m) => m.AppointmentSchedulePageModule
      ),
  },
  // {
  //   path: 'lab-test',
  //   loadChildren: () => import('./pages/lab-test/lab-test.module').then(m => m.LabTestPageModule)
  // },
  // {
  //   path: 'lab-info',
  //   loadChildren: () => import('./pages/lab-info/lab-info.module').then(m => m.LabInfoPageModule)
  // },
  {
    path: 'search-test',
    loadChildren: () =>
      import('./pages/search-test/search-test.module').then(
        (m) => m.SearchTestPageModule
      ),
  },
  {
    path: 'find-doctor',
    loadChildren: () =>
      import('./pages/medical-shop/medical-shop.module').then(
        (m) => m.MedicalShopPageModule
      ),
  },
  {
    path: 'lab-map',
    loadChildren: () =>
      import('./pages/lab-map/lab-map.module').then((m) => m.LabMapPageModule),
  },
  {
    path: 'chat',
    loadChildren: () =>
      import('./pages/chat/chat.module').then((m) => m.ChatPageModule),
  },
  {
    path: 'chating',
    loadChildren: () =>
      import('./pages/chating/chating.module').then((m) => m.ChatingPageModule),
  },
  {
    path: 'feedback',
    loadChildren: () =>
      import('./pages/feedback/feedback.module').then(
        (m) => m.FeedbackPageModule
      ),
  },
  {
    path: 'homepage',
    loadChildren: () =>
      import('./pages/homepage/homepage.module').then(
        (m) => m.HomepagePageModule
      ),
  },
  {
    path: 'specialities',
    loadChildren: () =>
      import('./pages/specialities/specialities.module').then(
        (m) => m.SpecialitiesPageModule
      ),
  },
  {
    path: 'user-signup/:id',
    loadChildren: () =>
      import('./pages/user/user.module').then((m) => m.UserPageModule),
  },
  {
    path: 'doctors-signup/:id',
    loadChildren: () =>
      import('./pages/doctors/doctors.module').then((m) => m.DoctorsPageModule),
  },
  {
    path: 'splashsreen',
    loadChildren: () => import('./pages/splashsreen/splashsreen.module').then( m => m.SplashsreenPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
