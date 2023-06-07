import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ActivatedRoute } from '@angular/router';
import { debounceTime, map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-make-an-apppoinment',
  templateUrl: './make-an-apppoinment.component.html',
  styleUrls: ['./make-an-apppoinment.component.css']
})
export class MakeAnApppoinmentComponent implements OnInit {
 
 
   searchText: any;
  sideBarOpen=true;
  districtControl=new FormControl('');

  districts: string[] = ['colombo', 'rathna', 'galle', 'badulla'];
  filteredDistricts: Observable<string[]> | undefined;


  // books: any[] | undefined;
 
  filteredBooks: Observable<any[]> | undefined;
 
  streetControl = new FormControl('');
selectedBook: any;
books: any[] = [];
  phone: any;
  date: any;
  time: any;
  hospitalControl: any;

 
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private http: HttpClient) {
  }
  saveAppointmentData(data: any) {
    const url = 'http://localhost:8070/apiappoinment/add';
    this.http.post(url, data)
      .subscribe(res => {
        console.log('Data saved successfully.');
      }, error => {
        console.log('Error occurred while saving the data.');
      });
  }
  // const id = this.route.snapshot.paramMap.get('id');
  //   this.http.get(`http://localhost:8070/api1/${id}`).subscribe((data) => {
  //     this.doctor = data;
  //   });
  // }
  ngOnInit() {

    this.filteredDistricts = this.districtControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
      map(value => this._filterDistricts(value || ''))
    );
    const id = this.route.snapshot.paramMap.get('id');
   
    // this.http.get<any[]>(`http://localhost:8070/apihospital/all`).subscribe(
      this.http.get<any[]>(`http://localhost:8070/apihospital/all?name=${this.searchText}`).subscribe(
 
    data => {
        this.books = data;
        this.filteredBooks = this.streetControl.valueChanges.pipe(
          startWith(''),
          debounceTime(300),
          map(value => this._filter(value || '', this.books)),
        );
      });
  }
  _filterDistricts(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  
  private _filter(value: string, books: any[]): any[] {
    const filterValue = value.toLowerCase();
    return this.books.filter(book => book.name.toLowerCase().includes(filterValue));
  }
  onSubmit() {
    const name = (<HTMLInputElement>document.getElementById('name')).value;
    const phone = (<HTMLInputElement>document.getElementById('phone')).value;
    const date = (<HTMLInputElement>document.getElementById('date')).value;
    const time = (<HTMLInputElement>document.getElementById('time')).value;

    const data = {
      name: name,
      phone: phone,
      date: date,
      time: time
    };

    this.saveAppointmentData(data);
  }


  leftToolBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
   }
 
  
}
