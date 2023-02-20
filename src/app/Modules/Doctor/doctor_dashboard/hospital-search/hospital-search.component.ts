import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';



@Component({
  selector: 'app-hospital-search',
  templateUrl: './hospital-search.component.html',
  styleUrls: ['./hospital-search.component.css']
})
export class HospitalSearchComponent implements OnInit {
 text1="Asiri Hospitals";
 text2="Kandy";
   myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      }
      private _filter(value: string): string[] {
        const filterValue = value.toLowerCase();
    
        return this.options.filter(option => option.toLowerCase().includes(filterValue));
      }
    
  }




// import { Component, OnInit } from '@angular/core';
// import {FormControl} from '@angular/forms';
// import {Observable} from 'rxjs';
// import {map, startWith} from 'rxjs/operators';

// @Component({
//   selector: 'app-teast',
//   templateUrl: './teast.component.html',
//   styleUrls: ['./teast.component.css']
// })
// export class TeastComponent implements OnInit {
//   myControl = new FormControl('');
//   options: string[] = ['One', 'Two', 'Three'];
//   filteredOptions!: Observable<string[]>;
//   constructor() { }

//   ngOnInit(): void {
//     this.filteredOptions = this.myControl.valueChanges.pipe(
//       startWith(''),
//       map(value => this._filter(value || '')),
//     );
//   }
//   private _filter(value: string): string[] {
//     const filterValue = value.toLowerCase();

//     return this.options.filter(option => option.toLowerCase().includes(filterValue));
//   }

// }
