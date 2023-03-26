import { Component, OnInit } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatDatepickerModule } from '@angular/material/datepicker';

@Component({
  selector: 'app-make-an-apppoinment',
  templateUrl: './make-an-apppoinment.component.html',
  styleUrls: ['./make-an-apppoinment.component.css']
})
export class MakeAnApppoinmentComponent implements OnInit {
max: any; 
min:any;
  startDate = new Date();
  minDate = new Date(2023, 2, 22);
  maxDate = new Date(2023, 8, 22);
  invalidDates = [new Date(2023, 2, 22, 8), new Date(2023, 2, 22, 13), new Date(2023, 2, 22, 15), new Date(2023, 2, 22, 17), new Date(2023, 2, 22, 19), new Date(2023, 2, 22, 20)];
  dateClass = (date: Date) => {
    const highlightDate = this.invalidDates.find(d => d.getTime() === date.getTime());
    return highlightDate ? 'example-invalid-date' : undefined;
  }

  // addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
  //   this.startDate = event.value;
  // }
  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    this.startDate = event.value ?? new Date();
  }
  constructor() {}

  ngOnInit() {}

  
 
  

  
}
