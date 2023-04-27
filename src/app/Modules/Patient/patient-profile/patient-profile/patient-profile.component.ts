import { HttpClient } from '@angular/common/http';
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

  imageSource: string =  "/assets/img/sinna2.jpg";
 

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

  
  save(index: number) {
    const id = this.cards[index].empId; // use the ID of the card you want to update
    const updatedData = { ...this.cards[index], empName: this.newText }; // include all existing data and replace the name field with the new value
  
    this.http.put(`http://localhost:8070/api/${id}`, updatedData).subscribe(() => {
      
      this.cards[index] = updatedData;
      this.editing = false;
    });
  }
  save2(index: number) {
    const id = this.cards[index].empId; 
    const updatedData = { ...this.cards[index], email: this.newText2 }; 
    this.http.put(`http://localhost:8070/api/${id}`, updatedData).subscribe(() => {
 
      this.cards[index] = updatedData;
      this.editing2 = false;
    });
  }
  save3(index: number) {
    const id = this.cards[index].empId; // use the ID of the card you want to update
    const updatedData = { ...this.cards[index], empNumber: this.newText3 }; // include all existing data and replace the name field with the new value
  
    this.http.put(`http://localhost:8070/api/${id}`, updatedData).subscribe(() => {
      
      this.cards[index] = updatedData;
      this.editing3 = false;
    });
  }
  save4(index: number) {
    const id = this.cards[index].empId; 
    const updatedData = { ...this.cards[index], empAddress: this.newText4 }; 
  
    this.http.put(`http://localhost:8070/api/${id}`, updatedData).subscribe(() => {
     
      this.cards[index] = updatedData;
      this.editing4 = false;
    });
  }
  cards:any;
  constructor(private http: HttpClient) { }

  title = 'edowzori';
  sideBarOpen=true;
  ngOnInit(){
    let response2= this.http.get("http://localhost:8070/api/all");
    response2.subscribe((data)=>this.cards=data);
  }
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
