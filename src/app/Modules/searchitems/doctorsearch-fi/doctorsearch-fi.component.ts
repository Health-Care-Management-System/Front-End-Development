import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Observable } from 'rxjs';
import { startWith, map, debounceTime } from 'rxjs/operators';
@Component({
  selector: 'app-doctorsearch-fi',
  templateUrl: './doctorsearch-fi.component.html',
  styleUrls: ['./doctorsearch-fi.component.css']
})
export class DoctorsearchFiComponent implements OnInit {

  showMore: boolean = false;
  
  searchText: any;
  searchText2:any;
  searchText3: any;
  searchText4:any;

  bookscards: any;
  allbooks: any;
  selectedBook: any;

  displayFn(book: any): string {
    return book && book.name ? book.name : '';
  }
  displayFn2(book: any): string {
    return book ? book.city : '';
  }
  displayFn3(book: any): string {
    return book ? book.district : '';
  }
  displayFn4(book: any): string {
    return book ? book.hospital : '';
  }

  cards:any;
  city:any;
  books: any[] = [];
  cities: any[] = [];
  districts: any[] = [];
  hospitals: any[] = [];
  filterbooks() {
    if (!this.searchText) {
      this.books = this.allbooks;
      return;
    }
  
    if (this.selectedBook) {
      // Filter based on the selected book
      this.books = this.allbooks.filter((book: { name: string; }) => {
        return book.name.toLowerCase() === this.selectedBook.name.toLowerCase();
      });
    } else {
      // Filter based on the text input
      const filteredBooks = this.allbooks.filter((book: { name: string; }) => {
        const nameMatch = book.name.toLowerCase().includes(this.searchText.toLowerCase());
        return nameMatch;
      });
  
      if (filteredBooks.length === 0) {
        // Show an alert if no books match the search text
        alert("Name not found!");
      }
  
      this.books = filteredBooks;
    }
  }
  
  
  onOptionSelected(event: MatAutocompleteSelectedEvent) {
    this.selectedBook = event.option.value;
    this.filterbooks();
  }
  
  clearSelection() {
    this.selectedBook = null;
    this.filterbooks();
  }
  filterbooks2() {
    if (!this.searchText2) {
      this.books = this.allbooks;
      return;
    }
  
    if (this.selectedBook) {
      // Filter based on the selected book
      this.books = this.allbooks.filter((book: { city: string; }) => {
        return book.city.toLowerCase() === this.selectedBook.city.toLowerCase();
      });
    } else {
      // Filter based on the text input
      this.books = this.allbooks.filter((book: { city: string; }) => {
        const cityMatch = book.city.toLowerCase().includes(this.searchText2.toLowerCase());
        return cityMatch;
      });
    }
  }
  
  onOptionSelected2(event: MatAutocompleteSelectedEvent) {
    this.selectedBook = event.option.value;
    this.filterbooks2();
  }
  
  clearSelection2() {
    this.selectedBook = null;
    this.filterbooks2();
  }
    
  
  filterbooks3() {
    if (!this.searchText3) {
      this.books = this.allbooks;
      return;
    }
  
    if (this.selectedBook) {
      // Filter based on the selected book
      this.books = this.allbooks.filter((book: { district: string; }) => {
        return book.district.toLowerCase() === this.selectedBook.district.toLowerCase();
      });
    } else {
      // Filter based on the text input
      this.books = this.allbooks.filter((book: { district: string; }) => {
        const districtMatch = book.district.toLowerCase().includes(this.searchText3.toLowerCase());
        return districtMatch;
      });
    }
  }
  
  onOptionSelected3(event: MatAutocompleteSelectedEvent) {
    this.selectedBook = event.option.value;
    this.filterbooks3();
  }
  
  clearSelection3() {
    this.selectedBook = null;
    this.filterbooks3();
  }
  
  filterbooks4() {
    if (!this.searchText4) {
      this.books = this.allbooks;
      return;
    }
  
    if (this.selectedBook) {
      // Filter based on the selected book
      this.books = this.allbooks.filter((book: { hospital: string; }) => {
        return book.hospital.toLowerCase() === this.selectedBook.hospital.toLowerCase();
      });
    } else {
      // Filter based on the text input
      this.books = this.allbooks.filter((book: { hospital: string; }) => {
        const hospitalMatch = book.hospital.toLowerCase().includes(this.searchText4.toLowerCase());
        return hospitalMatch;
      });
    }
  }
  
  onOptionSelected4(event: MatAutocompleteSelectedEvent) {
    this.selectedBook = event.option.value;
    this.filterbooks4();
  }
  
  clearSelection4() {
    this.selectedBook = null;
    this.filterbooks4();
  }
  
 
  streetControl = new FormControl('');
  cityControl = new FormControl('');
  districtControl=new FormControl('');
  hospitalControl=new FormControl('');
  filteredDistricts: Observable<any[]> | undefined;
 filteredBooks: Observable<any[]> | undefined;
 filteredCities: Observable<any[]> | undefined;
  filteredHospitals: Observable<any[]> | undefined;


  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.http.get<any[]>("http://localhost:8070/api1/all").subscribe(
      data => {
        this.allbooks = data;
        this.books = data.slice(0, 30);
        
        // this.bookscards=data.slice(0, 36);
      },
      error => {
        console.log(error);
      });
      
    

   
    
      this.filteredBooks = this.streetControl.valueChanges.pipe(
        startWith(''),
        debounceTime(300),
       map(value => this._filter(value || '', this.books)),
    );
    this.filteredCities = this.cityControl.valueChanges.pipe(
      startWith(''),
      debounceTime(300),
     map(value => this._filter2(value || '', this.books)),
  );
  this.filteredDistricts = this.districtControl.valueChanges.pipe(
    startWith(''),
    debounceTime(300),
   map(value => this._filter3(value || '', this.books)),
);
this.filteredHospitals = this.hospitalControl.valueChanges.pipe(
  startWith(''),
  debounceTime(300),
 map(value => this._filter4(value || '', this.books)),
);
  
  
    
  




    
  


  }
  
 

  private _filter(value: string, books: any[]): any[] {
    const filterValue = value.toLowerCase();
    return this.books.filter(book => book.name.toLowerCase().includes(filterValue));
  }
  private _filter2(value: string, books: any[]): any[] {
    const filterValue = value.toLowerCase();
    return this.books.filter(book => book.city.toLowerCase().includes(filterValue));
  }
  private _filter3(value: string, books: any[]): any[] {
    const filterValue = value.toLowerCase();
    return this.books.filter(book => book.district.toLowerCase().includes(filterValue));
  }
  private _filter4(value: string, books: any[]): any[] {
    const filterValue = value.toLowerCase();
    return this.books.filter(book => book.hospital.toLowerCase().includes(filterValue));
  }
  




  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  
}


