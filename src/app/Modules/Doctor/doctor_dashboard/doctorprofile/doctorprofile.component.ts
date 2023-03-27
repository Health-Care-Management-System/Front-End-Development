import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-doctorprofile',
  templateUrl: './doctorprofile.component.html',
  styleUrls: ['./doctorprofile.component.css']
})
export class DoctorprofileComponent implements OnInit {
  imageSource: string = " ../assets/img/doctor.jpg ";
  mobilenumber='123888982';

  editing1 = false;
  editing2 = false;
  editing3 = false;
  editing4 = false;
  

  

  newText1 = '';

  newText2 = '';
 
  newText3 = '';
  
  newText4 = '';
  toggleEditing1() {
    this.editing1 = !this.editing1;
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

  save1() {
    this.address = this.newText1;
    this.editing1 = false;
  }
  save2() {
    this.mobilenumber = this.newText2;
    this.editing2 = false;
  }
  save3() {
    this.email = this.newText3;
    this.editing3 = false;
  }
  save4() {
    this.experiance = this.newText4;
    this.editing4 = false;
  } 
name='Dr. Harry';
speciality='Cardiologist';
img1=" ../assets/img/doctor.jpg ";
name2="Dr. Harry";
speciality2="Specialist of Cardiology";
address="Street ,vilage, distract , town";
speciality3="Cardiology";
email="www.charukacnadungamuwa@gmail.com";
experiance='12';
  constructor() { }

  title = 'edowzori';
  sideBarOpen=true;
  ngOnInit(){}
  changeImage() {
    const inputField = document.querySelector('input[type="file"]') as HTMLInputElement;
    inputField.click();
  }
  onFileSelected(event: any) {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.imageSource = reader.result as string;
      
    };
  }
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }

}
