import { Component, OnInit } from '@angular/core';
import { hospitalProfileData } from '../hospital-profile';

@Component({
  selector: 'app-hospital-profile',
  templateUrl: './hospital-profile.component.html',
  styleUrls: ['./hospital-profile.component.css']
})
export class HospitalProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hospitalData = hospitalProfileData ;

}
