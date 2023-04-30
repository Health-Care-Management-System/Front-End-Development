import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
// import { IDropdownSettings } from 'ng-multiselect-dropdown';


// import flexLayout
import {FlexLayoutModule} from '@angular/flex-layout';
import { MatDialogModule } from '@angular/material/dialog';

import 'hammerjs';

// Angular material
import { MaterialModule } from './material/material.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule , ReactiveFormsModule} from '@angular/forms';


import { MainNavComponent } from './Shared/main-nav/main-nav.component';
import { DoctorComponent } from './Modules/Doctor/doctor landing page/doctor.component';
import { DoctorSignupComponent } from './Modules/Doctor/doctor-signup-page-1/doctor-signup.component';
import { DoctorSignupNextComponent } from './Modules/Doctor/doctor-signup-page-2/doctor-signup-next.component';
import { LoginComponent } from './Shared/login/login.component';
import { HomeComponent } from './Shared/home/home.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { UserSelectComponent } from './Shared/user-select/user-select.component';
import { HospitalLandingComponent } from './Modules/Hospital/hospital-landing/hospital-landing.component';
import { AmbulanceLadingComponent } from './Modules/Ambulance/ambulance-lading/ambulance-lading.component';
import { PharmacyLandingComponent } from './Modules/Pharmacy/pharmacy-landing/pharmacy-landing.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MdbAccordionModule } from 'mdb-angular-ui-kit/accordion';
import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';
import { MdbCheckboxModule } from 'mdb-angular-ui-kit/checkbox';
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';
import { MdbPopoverModule } from 'mdb-angular-ui-kit/popover';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';
import { MdbRangeModule } from 'mdb-angular-ui-kit/range';
import { MdbRippleModule } from 'mdb-angular-ui-kit/ripple';
import { MdbScrollspyModule } from 'mdb-angular-ui-kit/scrollspy';
import { MdbTabsModule } from 'mdb-angular-ui-kit/tabs';
import { MdbTooltipModule } from 'mdb-angular-ui-kit/tooltip';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MiddleComponent } from './Shared/middle/middle.component';
//doctor componentscharuka
import { AvailabilityShedulingComponent } from './Modules/Doctor/doctor_dashboard/availability-sheduling/availability-sheduling.component';
import { ChangePasswordComponent } from './Modules/Doctor/doctor_dashboard/change-password/change-password.component';
import { DoctorprofileComponent } from './Modules/Doctor/doctor_dashboard/doctorprofile/doctorprofile.component';
import { HistoryReviewComponent } from './Modules/Doctor/doctor_dashboard/history-review/history-review.component';
import { HospitalSearchComponent } from './Modules/Doctor/doctor_dashboard/hospital-search/hospital-search.component';
import { LeftToolBarComponent } from './Modules/Doctor/doctor_dashboard/left-tool-bar/left-tool-bar.component';
import { MininavbarComponent } from './Modules/Doctor/doctor_dashboard/mininavbar/mininavbar.component';
// import { SearchdoctorComponent } from './Modules/Doctor/doctor_dashboard/searchdoctor/searchdoctor.component';
// import { SelecthositalSelectdoctorComponent } from './Modules/Doctor/doctor_dashboard/selecthosital-selectdoctor/selecthosital-selectdoctor.component';
import { ShowappoinmentrequestsComponent } from './Modules/Doctor/doctor_dashboard/showappoinmentrequests/showappoinmentrequests.component';
import { WhoAreYouComponent } from './Modules/Doctor/doctor_dashboard/who-are-you/who-are-you.component';
import { TeastComponent } from './Modules/Doctor/doctor_dashboard/teast/teast.component';
import { ShowrequestComponent } from './Modules/Doctor/doctor_dashboard/showrequest/showrequest.component';
//doctormodulescharuka
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatSelectModule} from '@angular/material/select';
import {MatCardContent, MatCardModule} from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSliderModule} from '@angular/material/slider';


import { PharmacyProfileComponent } from './Modules/Pharmacy/pharmacy-dashboard/pharmacy-profile/pharmacy-profile/pharmacy-profile.component';
import { PharmacyLeftToolbarComponent } from './Modules/Pharmacy/pharmacy-dashboard/pharmacy-lefttoolbar/pharmacy-left-toolbar/pharmacy-left-toolbar.component';
import { PatientLeftToolbarComponent } from './Modules/Patient/patient-left-toolbar/patient-left-toolbar/patient-left-toolbar.component';
import { PatientProfileComponent } from './Modules/Patient/patient-profile/patient-profile/patient-profile.component';
import { PatientNavbarComponent } from './Modules/Patient/patient-navbar/patient-navbar/patient-navbar.component';
import { PatientProfileDisplayedComponent } from './Modules/Patient/patient profile displayed/patient-profile-displayed/patient-profile-displayed.component';
import { FavoritesComponent } from './Modules/Patient/favorites/favorites/favorites.component';
import { PatientSignupPageComponent } from './Modules/Patient/patient-signup-page/patient-signup-page.component';
import { AmbulanceSignupPageComponent } from './Modules/Ambulance/ambulance-signup-page/ambulance-signup-page.component';

import {HttpClientModule} from "@angular/common/http";

import { HospitalSignupPageComponent } from './Modules/Hospital/hospital-signup-page/hospital-signup-page.component';
import { PharmacySignupPageComponent } from './Modules/Pharmacy/pharmacy-signup-page/pharmacy-signup-page.component';


import { SidenavComponent } from './Modules/Hospital/dashboard/dashboard/sidenav/sidenav.component';
import { DashboardComponent } from './Modules/Hospital/dashboard/dashboard/dashboard/dashboard.component';
import { HospitalSignupNextComponent } from './Modules/Hospital/hospital-signup-next/hospital-signup-next.component';
import { AmbulanceSignupNextComponent } from './Modules/Ambulance/ambulance-signup-next/ambulance-signup-next.component';
import { PharmacySignupNextComponent } from './Modules/Pharmacy/pharmacy-signup-next/pharmacy-signup-next.component';
import { AboutusComponent } from './Shared/aboutus/aboutus.component';
import { ContactusComponent } from './Shared/contactus/contactus.component';

// import { SearchdoctorcontentComponent } from './Modules/Doctor/doctor_dashboard/searchdoctor/searchdoctorcontent/searchdoctorcontent/searchdoctorcontent.component';
// import { FilterComponent } from './Modules/Doctor/doctor_dashboard/searchdoctor/searchdoctorleftfilter/filter/filter.component';
import { DoctorsearchFiComponent } from './Modules/searchitems/doctorsearch-fi/doctorsearch-fi.component';
import { PharmacysearchComponent } from './Modules/searchitems/pharmacysearch/pharmacysearch.component';
import { HospitalsearchFiComponent } from './Modules/searchitems/hospitalsearch-fi/hospitalsearch-fi.component';
import { DoctorprofileforpatientComponent } from './Modules/Doctor/doctor_dashboard/doctorprofileforpatient/doctorprofileforpatient.component';
import { MyappoinmentsComponent } from './Modules/Patient/myappoinments/myappoinments.component';
import { PatientpwchangeComponent } from './Modules/Patient/patientpwchange/patientpwchange.component';
import { MedicineorderdetailsComponent } from './Modules/Patient/medicineorderdetails/medicineorderdetails.component';
import { MakeAnApppoinmentComponent } from './Modules/Patient/make-an-apppoinment/make-an-apppoinment.component';
import { HospitalProfileComponent } from './Modules/Hospital/hospital-profile-page/hospital-profile/hospital-profile.component';
import { OnboardDoctorsComponent } from './Modules/Hospital/hospital-profile-page/onboard-doctors/onboard-doctors.component';
import { HospitalDetailsComponent } from './Modules/Hospital/hospital-profile-page/hospital-details/hospital-details.component';
import { MatDialog } from '@angular/material/dialog';

// import { A11yModule } from '@angular/cdk/a11y';

import { CanceledComponent } from './Modules/Pharmacy/canceled/canceled.component';
import { NewComponent } from './Modules/Pharmacy/new/new.component';
import { RejectedComponent } from './Modules/Pharmacy/rejected/rejected.component';
import { ApprovedComponent } from './Modules/Pharmacy/approved/approved.component';
import { PatientviewComponent } from './Modules/Pharmacy/patientview/patientview.component';
import { PharmacydashboardComponent } from './Modules/Pharmacy/pharmacydashboard/pharmacydashboard.component';
import { HospitalprofileforpatientComponent } from './Modules/Hospital/hospitalprofileforpatient/hospitalprofileforpatient.component';
import { PharmacyprofileforpatientComponent } from './Modules/Pharmacy/pharmacyprofileforpatient/pharmacyprofileforpatient.component';








@NgModule({
  declarations: [
    AppComponent,
    PatientpwchangeComponent,
    MedicineorderdetailsComponent,
    // A11yModule,
    PharmacysearchComponent,
    MakeAnApppoinmentComponent,
    HospitalsearchFiComponent,
    MyappoinmentsComponent,
    DoctorsearchFiComponent,
    MainNavComponent,
    DoctorprofileforpatientComponent,
    DoctorComponent,
    DoctorSignupComponent,
    DoctorSignupNextComponent,
    LoginComponent,
    // FilterComponent,

    HomeComponent,
    FooterComponent,
    UserSelectComponent,
    HospitalLandingComponent,
    AmbulanceLadingComponent,
    PharmacyLandingComponent,
    MiddleComponent,

    //doctorcharuka
    AvailabilityShedulingComponent,
    ChangePasswordComponent,
    DoctorprofileComponent,
    HistoryReviewComponent,
    HospitalSearchComponent,
    LeftToolBarComponent,
    MininavbarComponent,
    // SearchdoctorComponent,
    // SelecthositalSelectdoctorComponent,
    ShowappoinmentrequestsComponent,
    WhoAreYouComponent,
    TeastComponent,
    ShowrequestComponent,

    PharmacyProfileComponent,
    PharmacyLeftToolbarComponent,
    PatientLeftToolbarComponent,
    PatientProfileComponent,
    PatientNavbarComponent,
    PatientProfileDisplayedComponent,
    FavoritesComponent,
    PatientSignupPageComponent,
    AmbulanceSignupPageComponent,
    HospitalSignupPageComponent,
    PharmacySignupPageComponent,

    SidenavComponent,
    DashboardComponent,
    HospitalSignupNextComponent,
    AmbulanceSignupNextComponent,
    PharmacySignupNextComponent,
    AboutusComponent,
    ContactusComponent,

    // SearchdoctorcontentComponent
  
    CanceledComponent,
    NewComponent,
    RejectedComponent,
    ApprovedComponent,
    PatientviewComponent,
    DashboardComponent,
    PharmacydashboardComponent,

    HospitalProfileComponent,
    OnboardDoctorsComponent,
    HospitalDetailsComponent,
    HospitalprofileforpatientComponent,
    PharmacyprofileforpatientComponent


  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    FlexLayoutModule,
    MatInputModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    MdbAccordionModule,
    MdbCarouselModule,
    MdbCheckboxModule,
    MdbCollapseModule,
    MdbDropdownModule,
    MdbFormsModule,
    MdbModalModule,
    MdbPopoverModule,
    MdbRadioModule,
    MdbRangeModule,
    MdbRippleModule,
    MdbScrollspyModule,
    MdbTabsModule,
    MdbTooltipModule,
    MdbValidationModule,


    NoopAnimationsModule,
    //doctorcharuka

    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatCardModule,
    FlexLayoutModule,
    MatSidenavModule,
    MatMenuModule,
    MatDividerModule,
    MatListModule,
    MatTableModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSliderModule,
    NgMultiSelectDropDownModule,
    NoopAnimationsModule,
    MatDialogModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
