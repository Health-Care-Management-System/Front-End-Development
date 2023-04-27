import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PatientService } from '../../patient.service';
import { Patient } from '../../patient';


@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css'],
  host: {
    '[attr.aria-valuenow]': 'myValue'
  }
})

export class PatientProfileComponent implements OnInit {

  constructor(private http:HttpClient,private patient_service:PatientService){};

  id = 1;

  // @ts-ignore
  selectedFile: File;

  // @ts-ignore
  patient : Patient

  ngOnInit() {
    this.patient_service.getPatientbyID(this.id).subscribe((data) => {
      this.patient = data;
    });
  }


  editLocation = false;
  newLocation = '';
  saveLocation() {
    if (this.newLocation.length > 0) {
      this.patient_service.updatePatientColumn(this.id, 'address', this.newLocation);
    }
    this.editLocation = false;
    location.reload();
  }

  editMobilenumber = false;
  newMobilenumber = '';
  saveMobilenumber() {
    if (this.newMobilenumber.length > 0) {
      this.patient_service.updatePatientColumn(
        this.id,
        'contactnumber',
        this.newMobilenumber
      );
    }
    this.editMobilenumber = false;
    location.reload();
  }

  editEmail = false;
  newEmail = "";
  saveEmai() {
    if (this.newEmail.length > 0) {
      this.patient_service.updatePatientColumn(
        this.id,
        'emailid',
        this.newEmail
      );
    }
    this.editEmail = false;
    location.reload();
  }

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);

    this.patient_service.uploadPhoto(this.id, fd).subscribe(
      res => {
        console.log(res);
        alert('Photo added successfully');
      },
      error => {
        console.log(error);
        alert('Error occurred while uploading photo');
      }
    );
    location.reload();
  }

  title = 'edowzori';
  sideBarOpen=true;

  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }
  
}