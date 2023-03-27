import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {myControl = new FormControl('');
options: string[] = ['One', 'Two', 'Three'];
filteredOptions!: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {this.filteredOptions = this.myControl.valueChanges.pipe(
    startWith(''),
    map((value: any) => this._filter(value || '')),
  ); 
  }private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
  
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
  

}
