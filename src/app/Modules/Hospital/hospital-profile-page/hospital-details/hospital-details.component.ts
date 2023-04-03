import { Component, OnInit } from '@angular/core';
import { hospitalProfileData } from '../hospital-profile';

@Component({
  selector: 'app-hospital-details',
  templateUrl: './hospital-details.component.html',
  styleUrls: ['./hospital-details.component.css']
})
export class HospitalDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  hospitalData = hospitalProfileData;
}
