import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-make-an-appoinment-with-doctor',
  templateUrl: './make-an-appoinment-with-doctor.component.html',
  styleUrls: ['./make-an-appoinment-with-doctor.component.css']
})
export class MakeAnAppoinmentWithDoctorComponent implements OnInit {

  searchText: any;
  sideBarOpen = true;
  streetControl = new FormControl('');
  filteredBooks: Observable<any[]> | undefined;
  books: any[] = [];
  phone: any;
  date: any;
  time: any;
  doctorName: any;
  doctorSpeciality: any;


  constructor(private formBuilder: FormBuilder, private http: HttpClient,private route: ActivatedRoute) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:8080/apihospital/all').subscribe((data) => {
      this.books = data;
      this.filteredBooks = this.streetControl.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
        map((value) => this._filter(value || '', this.books))
      );
    });
    this.route.queryParams.subscribe(params => {
      this.doctorName = params['doctorName'];
      this.doctorSpeciality = params['doctorSpeciality'];
    });
  }

  private _filter(value: string, books: any[]): any[] {
    const filterValue = value.toLowerCase();
    return this.books.filter((book) => book.name.toLowerCase().includes(filterValue));
  }

  onSubmit() {
    const hospital = this.streetControl.value;
    const phone = this.phone;
    const date = this.date;
    const time = this.time;
    const doctorSpeciality=this.doctorSpeciality;
    const doctorName=this.doctorName;

    const data = {

      searchText: hospital,
      bookingDate: date,
      bookingTime: time,
      doctorSpeciality:doctorSpeciality,
      doctorName:doctorName,

    };

    this.saveAppoinmentData(data);
  }
  saveAppoinmentData(data: any) {
    const url = 'http://localhost:8080/apiappoinment/add';
    const headers = { 'Content-Type': 'application/json' };
    this.http.post(url, data, { headers }).subscribe(
      (response) => {
        console.log('Data saved successfully.', response);
      },
      (error) => {
        console.log('Error occurred while saving the data.', error);
      }
    );
  }

  leftToolBarToggler() {
    this.sideBarOpen = !this.sideBarOpen;
  }
}
