import { Component, OnInit } from '@angular/core';
import { doctorProfileData } from '../hospital-profile';
import { DoctorService } from 'src/app/Modules/Doctor/doctor.service';
import { Doctor } from 'src/app/Modules/Doctor/doctor';
import { Hospital } from '../../hospital';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-onboard-doctors',
  templateUrl: './onboard-doctors.component.html',
  styleUrls: ['./onboard-doctors.component.css'],
})
export class OnboardDoctorsComponent implements OnInit {

  constructor( private doctorService : DoctorService) {}

  //@ts-ignore
  doctorDetails: Doctor = new Doctor();

  id:number = 1;

  ngOnInit(): void {
    this.getDoctorDetails();
  }



  getDoctorDetails(){
    this.doctorService.getDoctorbyID(this.id).subscribe(
      (response) => {
        console.log(response);
        this.doctorDetails = response;
      },
      (error:HttpErrorResponse) =>{
        console.log(error);
      }
    );
  }


 docData = doctorProfileData;
}
