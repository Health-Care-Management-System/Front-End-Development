import { Component, OnInit } from '@angular/core';
import { doctorProfileData } from '../hospital-profile';

@Component({
  selector: 'app-onboard-doctors',
  templateUrl: './onboard-doctors.component.html',
  styleUrls: ['./onboard-doctors.component.css'],
})
export class OnboardDoctorsComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  docData = doctorProfileData;
}
