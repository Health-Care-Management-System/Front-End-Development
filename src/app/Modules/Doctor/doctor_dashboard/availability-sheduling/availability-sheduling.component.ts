import { Time } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, startWith, map } from 'rxjs';
import { Availability } from './availability';


interface Food {
  value: string;
  viewValue: string;
}

interface Car {
  value: string;
  viewValue: string;
}
export interface PeriodicElement {
  Morning: string;
  Afternoon: string;
   Night: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Morning: '7.00 AM-8.00 AM', Afternoon: '1.00 AM-2.00 AM', Night:'7.00 AM-8.00 AM'},
  {Morning: '8.00 AM-9.00 AM', Afternoon: '2.00 AM-3.00 AM', Night: '8.00 AM-9.00 AM'},
  {Morning: '9.00 AM-10.00 AM', Afternoon: '3.00 AM-3.00 AM', Night: '9.00 AM-10.00 AM'},
  {Morning: '10.00 AM-12.00 AM', Afternoon: '4.00 AM-5.00 AM', Night: '10.00 AM-11.00 AM'},
  {Morning: '11.00 AM12.00 AM', Afternoon: '5.00 AM-6.00 AM', Night: '11.00 AM-12.00 AM'},
 
  
];

@Component({
  selector: 'app-availability-sheduling',
  templateUrl: './availability-sheduling.component.html',
  styleUrls: ['./availability-sheduling.component.css']
})
export class AvailabilityShedulingComponent implements OnInit {

  //@ts-ignore
  newAvailabity : Availability = new Availability();

  daysOfWeek = [
    { name: 'Monday', available: false, timeInterval: '' },
    { name: 'Tuesday', available: false, timeInterval: '' },
    { name: 'Wednesday', available: false, timeInterval: '' },
    { name: 'Thursday', available: false, timeInterval: '' },
    { name: 'Friday', available: false, timeInterval: '' },
    { name: 'Saturday', available: false, timeInterval: '' },
    { name: 'Sunday', available: false, timeInterval: '' }];

  displayedColumns: string[] = ['Morning', 'Afternoon',  'Night'];
  dataSource = ELEMENT_DATA;
  streetControl = new FormControl('');
  streets: string[] = ['asiri hospital', 'Nawaloka Hospital', 'Lanka Hospitals', 'Hemas hospitals'];
  filteredStreets: Observable<string[]> | undefined;
  
  
  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  datechanged($event: { target: { value: any; }; }){
    console.log($event.target.value);
  }
  

  title = 'edowzori';
  sideBarOpen=true;
  constructor(private http: HttpClient) {}
  ngOnInit(){
    
    
    this.filteredStreets = this.streetControl.valueChanges.pipe(
    startWith(''),
    map(value => this._filter(value || '', this.streets)),
  );
}
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }
  private _filter(value: string, options: string[]): string[] {
    const filterValue = this._normalizeValue(value);
    return options.filter(option => this._normalizeValue(option).includes(filterValue));
  }

  private _normalizeValue(value: string): string {
    return value.toLowerCase().replace(/\s/g, '');
  }
  saveData() {
    this.http.post(`http://localhost:8080/availability/add`, this.newAvailabity)
      .subscribe(() => {
        console.log('Data saved successfully');
      }, (error) => {
        console.error('Error saving data:', error);
      });
  }

  // updateData() {
  //   this.http.put('/http://localhost:8080/availability', this.daysOfWeek)
  //     .subscribe(() => {
  //       console.log('Data updated successfully');
  //     }, (error) => {
  //       console.error('Error updating data:', error);
  //     });
  // }
}

