import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// importing routing components
import { MainNavComponent } from './Shared/main-nav/main-nav.component';
import { DoctorComponent } from './Modules/Doctor/doctor landing page/doctor.component';
import { DoctorSignupComponent } from './Modules/Doctor/doctor-signup-page-1/doctor-signup.component';
import { DoctorSignupNextComponent } from './Modules/Doctor/doctor-signup-page-2/doctor-signup-next.component';
import { LoginComponent } from './Shared/login/login.component';
import { HomeComponent } from './Shared/home/home.component';
import { HospitalLandingComponent } from './Modules/Hospital/hospital-landing/hospital-landing.component';
import { AmbulanceLadingComponent } from './Modules/Ambulance/ambulance-lading/ambulance-lading.component';
import { PharmacyLandingComponent } from './Modules/Pharmacy/pharmacy-landing/pharmacy-landing.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { DoctorprofileComponent } from './Modules/Doctor/doctor_dashboard/doctorprofile/doctorprofile.component';
import { ShowrequestComponent } from './Modules/Doctor/doctor_dashboard/showrequest/showrequest.component';
import { LeftToolBarComponent } from './Modules/Doctor/doctor_dashboard/left-tool-bar/left-tool-bar.component';
import { AvailabilityShedulingComponent } from './Modules/Doctor/doctor_dashboard/availability-sheduling/availability-sheduling.component';
import { ChangePasswordComponent } from './Modules/Doctor/doctor_dashboard/change-password/change-password.component';
import { HistoryReviewComponent } from './Modules/Doctor/doctor_dashboard/history-review/history-review.component';
import { HospitalSearchComponent } from './Modules/Doctor/doctor_dashboard/hospital-search/hospital-search.component';
import { TeastComponent } from './Modules/Doctor/doctor_dashboard/teast/teast.component';
import { SearchdoctorComponent } from './Modules/Doctor/doctor_dashboard/searchdoctor/searchdoctor.component';
import { SelecthositalSelectdoctorComponent } from './Modules/Doctor/doctor_dashboard/selecthosital-selectdoctor/selecthosital-selectdoctor.component';
import { HospitalProfileComponent } from './Modules/Hospital/hospital-dashboard/hospital-profile/hospital-profile/hospital-profile.component';
import { PharmacyProfileComponent } from './Modules/Pharmacy/pharmacy-dashboard/pharmacy-profile/pharmacy-profile/pharmacy-profile.component';
import { PatientProfileComponent } from './Modules/Patient/patient-profile/patient-profile/patient-profile.component';
import { PatientProfileDisplayedComponent } from './Modules/Patient/patient profile displayed/patient-profile-displayed/patient-profile-displayed.component';
import { FavoritesComponent } from './Modules/Patient/favorites/favorites/favorites.component';
import { DoctorsearchFiComponent } from './Modules/searchitems/doctorsearch-fi/doctorsearch-fi.component';
import { HospitalsearchFiComponent } from './Modules/searchitems/hospitalsearch-fi/hospitalsearch-fi.component';
import { PharmacysearchComponent } from './Modules/searchitems/pharmacysearch/pharmacysearch.component';
import { DoctorprofileforpatientComponent } from './Modules/Doctor/doctor_dashboard/doctorprofileforpatient/doctorprofileforpatient.component';
import { MedicineorderdetailsComponent } from './Modules/Patient/medicineorderdetails/medicineorderdetails.component';
import { PatientpwchangeComponent } from './Modules/Patient/patientpwchange/patientpwchange.component';
import { MyappoinmentsComponent } from './Modules/Patient/myappoinments/myappoinments.component';
import { MakeAnApppoinmentComponent } from './Modules/Patient/make-an-apppoinment/make-an-apppoinment.component';






// routes for the components
const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'doctor' , component:DoctorComponent},
  {path:'signup' ,component:DoctorSignupComponent },
  {path: 'signupnext' , component:DoctorSignupNextComponent},
  {path: 'login' , component:LoginComponent},

  {path:'hospital' , component:HospitalLandingComponent},
  {path:'ambulance' , component:AmbulanceLadingComponent},
  {path:'pharmacy' , component:PharmacyLandingComponent},
  {path:'footer' , component:FooterComponent},

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

 {path:'', redirectTo:'home' , pathMatch:'full'},
 {path:'hospitalprofile',component:HospitalProfileComponent},
 {path:'pharmcyprofile',component:PharmacyProfileComponent},
 {path:'patientprofile',component:PatientProfileComponent},
{path:'patientprofiledisplayed',component:PatientProfileDisplayedComponent},
{path:'favorite',component:FavoritesComponent},
{path:'doctorsearch-fi',component:DoctorsearchFiComponent},
{path:'hospitalsearch-fi',component:HospitalsearchFiComponent},
{path:'pharmacysearch',component:PharmacysearchComponent},
{path:'doctorprofileforpatient',component:DoctorprofileforpatientComponent},
{path:'medicineorderdetails',component:MedicineorderdetailsComponent},
{path:'patientpw',component:PatientpwchangeComponent},
{path:'myappoinments',component:MyappoinmentsComponent},
{path:'makeanappoinment',component:MakeAnApppoinmentComponent}




];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
