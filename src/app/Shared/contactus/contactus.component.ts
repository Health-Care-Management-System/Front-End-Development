import { Component, OnInit } from '@angular/core';
import {FormControl , FormGroup , FormBuilder, Validators} from '@angular/forms';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private fb : FormBuilder,private http: HttpClient) { }
  reactiveform !: FormGroup;
   emailPtn = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
   mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"
   registerArray:any={};

  formData = {
    name: '',
    email: '',
    telephone: '',
    message:''
  };

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.formData);
    this.http.post('http://localhost:8080/api/send-email/dinirangapremanayake@gmail.com', this.formData)
      .subscribe(
        response => {
          console.log('Email sent successfully!', response);
          // Reset the form after successful submission
          this.formData = {
            name: '',
            email: '',
            telephone: '',
            message: ''
          };
        },
        error => {
          console.error('Error sending email:', error);
        }
      );
  }

}
