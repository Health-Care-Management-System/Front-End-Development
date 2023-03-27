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
 text3="230 Reviews";
   myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;
  showimage:boolean;
  showimage2:boolean;
  showimage3:boolean;
  showimage4:boolean;
  showimage6:boolean;
  showimage5:boolean;
  constructor() {this.showimage=false;
    this.showimage2=false;
    this.showimage3=false;
    this.showimage4=false;
    this.showimage5=false; 
    this.showimage6=false; }
  title = 'edowzori';
  sideBarOpen=true;

  ngOnInit(): void {
        this.filteredOptions = this.myControl.valueChanges.pipe(
          startWith(''),
          map(value => this._filter(value || '')),
        );
      }
      leftToolBarToggler(){
        this.sideBarOpen=!this.sideBarOpen;
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
