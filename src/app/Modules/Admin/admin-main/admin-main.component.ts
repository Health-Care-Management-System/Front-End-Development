import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {PatientService} from "../../Patient/patient.service";
import {Patient} from "../../Patient/patient";
import {DoctorService} from "../../Doctor/doctor.service";
import {AdminService} from "../admin.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css'],
})
export class AdminMainComponent implements OnInit {

  Doctorcount: number | undefined;
  Patientcount: number | undefined;
  Hospitalcount: number | undefined;
  Pharmacycount: number | undefined;
  constructor(private admin_ser:AdminService){};


  ngOnInit() {
    this.admin_ser.getDoctorCount().subscribe(c =>{
      this.Doctorcount = c;
    })

    this.admin_ser.getPatientCount().subscribe(c =>{
      this.Patientcount = c;
    })

    this.admin_ser.getHospitalCount().subscribe(c =>{
      this.Hospitalcount = c;
    })

    this.admin_ser.gePharmacyCount().subscribe(c =>{
      this.Pharmacycount = c;
    })

  }

  title = 'edowzori';
  sideBarOpen=true;

  leftToolBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }

}
