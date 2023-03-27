import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css'],
  host: {
    '[attr.aria-valuenow]': 'myValue'
  }
})
export class PatientProfileComponent implements OnInit {
  myValue = 50;
  webDesignProgress = 80;
  websiteMarkupProgress = 72;
  suger=23;
  
  
  increaseWebDesignProgress() {
    if (this.webDesignProgress < 100) {
      this.webDesignProgress += 1;
    }
  }

  decreaseWebDesignProgress() {
    if (this.webDesignProgress > 0) {
      this.webDesignProgress -= 1;
    }
  }

  increaseWebsiteMarkupProgress() {
    if (this.websiteMarkupProgress < 100) {
      this.websiteMarkupProgress += 1;
    }
  }

  decreaseWebsiteMarkupProgress() {
    if (this.websiteMarkupProgress > 0) {
      this.websiteMarkupProgress -= 1;
    }
  }
  

  // Define the methods for increasing and decreasing each progress bar

  imageSource: string = 'https://mdbcdn.b-cdn.net/img/new/standard/nature/111.webp';
 

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
  // changeImage() {
  //   this.imageSource = 'https://example.com/new-image.jpg'; // Replace with the URL of the new image
  // }
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }

}
