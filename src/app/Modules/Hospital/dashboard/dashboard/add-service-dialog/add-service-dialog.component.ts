import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { startWith, map } from 'rxjs/operators';
import { SelectoptionsService } from './selectoptions.service';
import { speciality } from './specialities';



@Component({
  selector: 'app-add-service-dialog',
  templateUrl: './add-service-dialog.component.html',
  styleUrls: ['./add-service-dialog.component.css']
})
export class AddServiceDialogComponent implements OnInit {

  myControl = new FormControl();
  options: string[] = ['Angular 1', 'react 2', 'Option 3'];
  filteredOptions !: Observable<string[]>;
  filteredOptionsList!: Observable<speciality[]>;

  
  specilitiesArrayList!:speciality[];
  constructor(private service: SelectoptionsService) {
    this.specilitiesArrayList = this.service.getOptions();
  }

  ngOnInit(): void {
    // this.filteredOptions = this.myControl.valueChanges.pipe(
    //   startWith(''),
    //   map((value) => this._filter(value))
    // );
    this.filteredOptionsList = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._Listfilter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter((option) => option.toLowerCase().includes(filterValue));
  }
  private _Listfilter(value: string): speciality[] {
    const filterValue = value.toLowerCase();
    return this.specilitiesArrayList.filter((option) => option.name.toLowerCase().includes(filterValue) ||
    option.code.toLowerCase().includes(filterValue));
  }


  
}
