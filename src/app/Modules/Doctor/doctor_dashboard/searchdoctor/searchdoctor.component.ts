import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { IDropdownSettings } from 'ng-multiselect-dropdown';


@Component({
  selector: 'app-searchdoctor',
  templateUrl: './searchdoctor.component.html',
  styleUrls: ['./searchdoctor.component.css']
})
export class SearchdoctorComponent implements OnInit {
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


  constructor() {
    this.showimage=false;
    this.showimage2=false;
    this.showimage3=false;
    this.showimage4=false;
    this.showimage5=false; 
    this.showimage6=false;
}
  title = 'edowzori';
  sideBarOpen=true;
 
  ngOnInit(): void {this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '')),
  ); 

  
  
}

private _filter(value: string): string[] {
  const filterValue = value.toLowerCase();

  return this.options.filter(option => option.toLowerCase().includes(filterValue));
}

  }


