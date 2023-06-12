import { Component, OnInit } from '@angular/core';
import {PatientService} from "../../Patient/patient.service";
import {Patient} from "../../Patient/patient";
import {doctorProfileData} from "../../Hospital/hospital-profile-page/hospital-profile";

@Component({
  selector: 'app-admin-patient',
  templateUrl: './admin-patient.component.html',
  styleUrls: ['./admin-patient.component.css']
})
export class AdminPatientComponent implements OnInit {

  constructor(private patient_service:PatientService) { }

  patients:Patient[] = [];
  ngOnInit(): void {
    this.patient_service.gelAllPatient().subscribe((data)=>{
      console.log("Successful");
      //@ts-ignore
      this.patients = data;
    })
  }

  title = 'edowzori';
  sideBarOpen=true;

  leftToolBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }


  protected readonly doctorProfileData = doctorProfileData;

  deletePatient(id: number) {
    this.patient_service.deletePatientById(id)
  }
}
