import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { DoctorService } from '../../doctor.service';
import { Doctor } from '../../doctor';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css'],
})
export class DoctorprofileComponent implements OnInit {
  constructor(private http: HttpClient, private doc_service: DoctorService) {}

  id = 1;
  // @ts-ignore
  selectedFile: File;

  // @ts-ignore
  doc: Doctor;



  ngOnInit() {
    this.doc_service.getDoctorbyID(this.id).subscribe((data) => {
      this.doc = data;
    });
  }

  editing3 = false;

  editLocation = false;
  newLocation = '';
  saveLocation() {
    if (this.newLocation.length > 0) {
      this.doc_service.updateDoctorColumn(this.id, 'address', this.newLocation);
    }
    this.editLocation = false;
  }

  editMobilenumber = false;
  newMobilenumber = '';
  saveMobilenumber() {
    if (this.newMobilenumber.length > 0) {
      this.doc_service.updateDoctorColumn(
        this.id,
        'contactnumber',
        this.newMobilenumber
      );
    }
    this.editMobilenumber = false;
  }

  editExperience = false;
  newExperience = '';
  saveExperience() {
    if (this.newExperience.length > 0) {
      this.doc_service.updateDoctorColumn(
        this.id,
        'experiences',
        this.newExperience
      );
    }
    this.editExperience = false;
  }

  save4() {
    // this.experiance = this.newText4;
    // this.editing4 = false;
  }

  title = 'edowzori';
  sideBarOpen = true;

  leftToolBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }

  

  onFileSelected(event:any) {
    this.selectedFile = event.target.files[0];
  }

  onUpload() {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);

    this.doc_service.uploadPhoto(this.id, fd).subscribe(
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

}
