import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import flexLayout
import {FlexLayoutModule} from '@angular/flex-layout';

import 'hammerjs';

// Angular material
import { MaterialModule } from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule} from '@angular/forms';

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


@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    DoctorComponent,
    DoctorSignupComponent,
    DoctorSignupNextComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    UserSelectComponent,
    HospitalLandingComponent,
    AmbulanceLadingComponent,
    PharmacyLandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
