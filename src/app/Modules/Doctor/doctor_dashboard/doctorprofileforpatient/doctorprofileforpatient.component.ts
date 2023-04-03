import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctorprofileforpatient',
  templateUrl: './doctorprofileforpatient.component.html',
  styleUrls: ['./doctorprofileforpatient.component.css']
})
export class DoctorprofileforpatientComponent implements OnInit {
  name='Dr. Harry';
  speciality='Cardiologist';
  img1=" ../assets/img/doctor.jpg ";
  name2="Dr. Harry";
  speciality2="Specialist of Cardiology";
  address="Street ,vilage, distract , town";
  speciality3="Cardiology";
  mobile='0776787889';

email="www.charukacnadungamuwa@gmail.com";
experiance='12';
  constructor() { }

  ngOnInit(): void {
  }

}
