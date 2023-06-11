import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Observable, startWith, debounceTime, map } from 'rxjs';

@Component({
  selector: 'app-updateappoinments',
  templateUrl: './updateappoinments.component.html',
  styleUrls: ['./updateappoinments.component.css']
})
export class UpdateappoinmentsComponent implements OnInit {
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
  tests: any[] = [];

 
  constructor(private formBuilder: FormBuilder,private route: ActivatedRoute,private http: HttpClient) {
  }
  saveAppointmentData(data: any) {
    const url = 'http://localhost:8080/apiappoinment/add';
    this.http.post(url, data)
      .subscribe(res => {
        console.log('Data saved successfully.');
      }, error => {
        console.log('Error occurred while saving the data.');
      });
  }
  // const id = this.route.snapshot.paramMap.get('id');
  //   this.http.get(`http://localhost:8080/api1/${id}`).subscribe((data) => {
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
    this.http.get<any[]>(`http://localhost:8080/apiappoinment/${id}`).subscribe(
 
    data => {
        this.tests = data;
      
      });
   
    // this.http.get<any[]>(`http://localhost:8080/apihospital/all`).subscribe(
      this.http.get<any[]>(`http://localhost:8080/apihospital/all?name=${this.searchText}`).subscribe(
 
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
    
    const id = this.route.snapshot.paramMap.get('id'); // Get the ID from the URL parameter
    
    const data = {
      bookingDate: this.date,
        bookingTime: this.time,
        searchText: this.searchText,
        phone: this.phone
    };
  
    const url = `http://localhost:8080/apiappoinment/${id}`; // Update the URL with the appropriate endpoint
  
    this.http.put(url, data).subscribe(
      response => {
        
        console.log('Data updated successfully.', response);
      },
      error => {
       
        console.log('Error occurred while updating the data.', error);
      }
    );
  }

  leftToolBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
   }
 
  
}

