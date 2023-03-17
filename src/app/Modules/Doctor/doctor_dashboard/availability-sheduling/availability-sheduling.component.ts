import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  Evening: string;
  Night: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {Morning: '7.00 AM', Afternoon: '7.00 AM', Evening: '7.00 AM',Night:' 7.00 AM'},
  {Morning: '7.00 AM', Afternoon: '7.00 AM', Evening: '7.00 AM',Night: '7.00 AM'},
  {Morning: '7.00 AM', Afternoon: '7.00 AM', Evening: '7.00 AM',Night: '7.00 AM'},
  {Morning: '7.00 AM', Afternoon: '7.00 AM', Evening: '7.00 AM',Night: '7.00 AM'},
  {Morning: '7.00 AM', Afternoon: '7.00 AM', Evening: '7.00 AM',Night: '7.00 AM'},
 
  
];

@Component({
  selector: 'app-availability-sheduling',
  templateUrl: './availability-sheduling.component.html',
  styleUrls: ['./availability-sheduling.component.css']
})
export class AvailabilityShedulingComponent implements OnInit {
  displayedColumns: string[] = ['Morning', 'Afternoon', 'Evening', 'Night'];
  dataSource = ELEMENT_DATA;
  
  
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
  ngOnInit(){}
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }

}
