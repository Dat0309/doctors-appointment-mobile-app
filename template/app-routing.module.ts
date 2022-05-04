import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login-form',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'login-form',
    loadChildren: () => import('./login-form/login-form.module').then( m => m.LoginFormPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'forgot',
    loadChildren: () => import('./forgot/forgot.module').then( m => m.ForgotPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./location/location.module').then( m => m.LocationPageModule)
  },

  {
    path: 'appointment',
    loadChildren: () => import('../doctor-appointment/src/app/appointment/appointment.module').then( m => m.AppointmentPageModule)
  },
  {
    path: 'find',
    loadChildren: () => import('./find/find.module').then( m => m.FindPageModule)
  },
  {
    path: 'find-doctor',
    loadChildren: () => import('./find-doctor/find-doctor.module').then( m => m.FindDoctorPageModule)
  },
  {
    path: 'cardiologist',
    loadChildren: () => import('./cardiologist/cardiologist.module').then( m => m.CardiologistPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./map/map.module').then( m => m.MapPageModule)
  },
  {
    path: 'book-appointment',
    loadChildren: () => import('./book-appointment/book-appointment.module').then( m => m.BookAppointmentPageModule)
  },
  {
    path: 'doctor-info',
    loadChildren: () => import('./doctor-info/doctor-info.module').then( m => m.DoctorInfoPageModule)
  },
  {
    path: 'my-appointment',
    loadChildren: () => import('./my-appointment/my-appointment.module').then( m => m.MyAppointmentPageModule)
  },
  {
    path: 'appointment-detail',
    loadChildren: () => import('./appointment-detail/appointment-detail.module').then( m => m.AppointmentDetailPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'appointment-schedule',
    loadChildren: () => import('./appointment-schedule/appointment-schedule.module').then( m => m.AppointmentSchedulePageModule)
  },
  {
    path: 'lab-test',
    loadChildren: () => import('./lab-test/lab-test.module').then( m => m.LabTestPageModule)
  },
  {
    path: 'lab-info',
    loadChildren: () => import('./lab-info/lab-info.module').then( m => m.LabInfoPageModule)
  },
  {
    path: 'search-test',
    loadChildren: () => import('./search-test/search-test.module').then( m => m.SearchTestPageModule)
  },
  {
    path: 'medical-shop',
    loadChildren: () => import('./medical-shop/medical-shop.module').then( m => m.MedicalShopPageModule)
  },
  {
    path: 'lab-map',
    loadChildren: () => import('./lab-map/lab-map.module').then( m => m.LabMapPageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'chating',
    loadChildren: () => import('./chating/chating.module').then( m => m.ChatingPageModule)
  },
  {
    path: 'feedback',
    loadChildren: () => import('./feedback/feedback.module').then( m => m.FeedbackPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
