import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


// import flexLayout
import {FlexLayoutModule} from '@angular/flex-layout';

import 'hammerjs';

// Angular material
import { MaterialModule } from './material/material.module';
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
    MiddleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
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
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
