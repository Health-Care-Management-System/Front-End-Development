import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  editing = false;
  editing2 = false;
  editing3 = false;
  editing4 = false;

  
  text = 'Some text here';
  newText = '';
  text2 = 'Some text here';
  newText2 = '';
  text3 = 'Some text here';
  newText3 = '';
  text4 = 'Some text here';
  newText4 = '';
  toggleEditing() {
    this.editing = !this.editing;
  }
  toggleEditing2() {
    this.editing2 = !this.editing2;
  }
  toggleEditing3() {
    this.editing3 = !this.editing3;
  }
  toggleEditing4() {
    this.editing4 = !this.editing4;
  }

  save() {
    this.text = this.newText;
    this.editing = false;
  }
  save2() {
    this.text2 = this.newText2;
    this.editing2 = false;
  }
  save3() {
    this.text3 = this.newText3;
    this.editing3 = false;
  }
  save4() {
    this.text4 = this.newText4;
    this.editing4 = false;
  }
  constructor() { }

  title = 'edowzori';
  sideBarOpen=true;
  ngOnInit(){}
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }

}
