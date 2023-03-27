import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patientpwchange',
  templateUrl: './patientpwchange.component.html',
  styleUrls: ['./patientpwchange.component.css']
})
export class PatientpwchangeComponent implements OnInit {

  constructor() { }

  title = 'edowzori';
  sideBarOpen=true;
  ngOnInit(){}
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }
}
