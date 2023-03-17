import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {
name='Dr. Harry';
speciality='Cardiologist';
img1=" ../assets/img/doctor.jpg ";
name2="Dr. Harry";
speciality2="Specialist of Cardiology";
address="Street ,vilage, distract , town";
speciality3="Cardiology";

  constructor() { }

  title = 'edowzori';
  sideBarOpen=true;
  ngOnInit(){}
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }

}
