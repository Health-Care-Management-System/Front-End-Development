import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { map, Observable, startWith } from 'rxjs';

@Component({
  selector: 'app-make-an-apppoinment',
  templateUrl: './make-an-apppoinment.component.html',
  styleUrls: ['./make-an-apppoinment.component.css']
})
export class MakeAnApppoinmentComponent implements OnInit {
  sideBarOpen=true;
  districtControl=new FormControl('');

  districts: string[] = ['colombo', 'rathna', 'galle', 'badulla'];
  filteredDistricts: Observable<string[]> | undefined;
 
  
  

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.startDate = event.value;
  // }
 
  constructor() {}

  ngOnInit() {this.filteredDistricts = this.districtControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '', this.districts)),
  );}
  private _filter(value: string, options: string[]): string[] {
    const filterValue = this._normalizeValue(value);
    return options.filter(option => this._normalizeValue(option).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }

  
  leftToolBarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
   }
 
  

  
}
