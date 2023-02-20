import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importing routing components
import { MainNavComponent } from './Shared/main-nav/main-nav.component';
import { DoctorComponent } from './Modules/Doctor/doctor landing page/doctor.component';
import { DoctorSignupComponent } from './Modules/Doctor/doctor-signup-page-1/doctor-signup.component';
import { DoctorSignupNextComponent } from './Modules/Doctor/doctor-signup-page-2/doctor-signup-next.component';
import { LoginComponent } from './Shared/login/login.component';
import {AmbulanceComponent} from "./Modules/ambulance/ambulance.component";


// routes for the components
const routes: Routes = [
  // {path: 'home', component:},
  {path: 'doctor' , component:DoctorComponent},
  {path:'signup' ,component:DoctorSignupComponent },
  {path: 'signupnext' , component:DoctorSignupNextComponent},
  {path: 'login' , component:LoginComponent},

  {path: 'ambulance',component:AmbulanceComponent},
  {path:'hospital' , component:HospitalLandingComponent},
  {path:'ambulance' , component:AmbulanceLadingComponent},
  {path:'pharmacy' , component:PharmacyLandingComponent},
  {path:'footer' , component:FooterComponent},

  //routes for the doctor
  {path:'dashboard',component:DoctorprofileComponent},
  {path:'appoinment',component:ShowrequestComponent},
  {path:'menu',component:LeftToolBarComponent},
  {path:'availability',component:AvailabilityShedulingComponent},
  {path:'password',component:ChangePasswordComponent},
  {path:'history',component:HistoryReviewComponent},
  {path:'searchhospital',component:HospitalSearchComponent},
  {path:'test',component:TeastComponent},
  {path:'searchdoctor',component:SearchdoctorComponent},
  {path:'selecthospitalselectdoctor',component:SelecthositalSelectdoctorComponent},
  {path:'', redirectTo:'home', pathMatch:'full'}



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
