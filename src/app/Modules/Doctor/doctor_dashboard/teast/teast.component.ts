import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import {Observable} from 'rxjs';
import {debounceTime, map, startWith} from 'rxjs/operators';

@Component({
  selector: 'app-teast',
  templateUrl: './teast.component.html',
  styleUrls: ['./teast.component.css']
})
export class TeastComponent implements OnInit {
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
      this.books = this.allbooks.filter((book: { name: string; }) => {
        const nameMatch = book.name.toLowerCase().includes(this.searchText.toLowerCase());
        return nameMatch;
      });
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
    this.http.get<any[]>("http://localhost:8080/api1/all").subscribe(
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
  makeFavorite(book: any) {
    if (book.favorite) {
      // Book is already a favorite, remove it
      this.removeFromFavorites(book);
    } else {
      // Book is not a favorite, add it
      this.addToFavorites(book);
    }
  }

  addToFavorites(book: any) {
    book.favorite = true; // Set the favorite status to true


    // Send the book data to the backend for addition
    this.http.post('http://localhost:8080/apihospitalfavorite/add', book)
      .subscribe(
        () => {
          console.log('Book added to favorites successfully');

          book.isFavorite = true; // Update the favorite status locally
        },
        (error) => console.error('Failed to add book to favorites:', error)
      );

      this.http.put(`http://localhost:8080/apihospital/${book.id}`, { favorite: true })

      .subscribe(
        (response) => {

          console.log('Book updated successfully', response);

          // Handle success
        },
        (error) => {
          console.error('Error updating book', error);
          // Handle error
        }
      );
  }

  removeFromFavorites(book: any) {

    book.favorite = false;
    // Send the book's ID to the backend for deletion
    this.http.delete(`http://localhost:8080/apihospitalfavorite/delete/${book.id}`,book)
      .subscribe(
        () => {
          console.log('Book removed from favorites successfully');

          book.isFavorite = false; // Update the favorite status locally
        },
        (error) => console.error('Failed to remove book from favorites:', error)
      );
      this.http.put(`http://localhost:8080/apihospital/${book.id}`, { favorite: false })
    .subscribe(
        (response) => {

          console.log('Book updated successfully', response);

          // Handle success
        },
        (error) => {
          console.error('Error updating book', error);
          // Handle error
        }
      );
  }
}







