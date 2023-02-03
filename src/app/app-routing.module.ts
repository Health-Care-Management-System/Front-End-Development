import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importing routing components
import { MainNavComponent } from './Shared/main-nav/main-nav.component';
import { DoctorComponent } from './Modules/Doctor/doctor landing page/doctor.component';
import { DoctorSignupComponent } from './Modules/Doctor/doctor-signup-page-1/doctor-signup.component';
import { DoctorSignupNextComponent } from './Modules/Doctor/doctor-signup-page-2/doctor-signup-next.component';
import { LoginComponent } from './Shared/login/login.component';
import { HomeComponent } from './Shared/home/home.component';
import {AmbulanceComponent} from "./Modules/ambulance/ambulance.component";
import { FooterComponent } from './Shared/footer/footer.component';



// routes for the components
const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'doctor' , component:DoctorComponent},
  {path:'signup' ,component:DoctorSignupComponent },
  {path: 'signupnext' , component:DoctorSignupNextComponent},
  {path: 'login' , component:LoginComponent},
  {path: 'ambulance',component:AmbulanceComponent},
  {path:'footer' , component:FooterComponent},
  {path:'' , redirectTo:'/home' , pathMatch:'full'}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
