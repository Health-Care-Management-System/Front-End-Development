import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  pat_name: string;
  pat_ID: number;
  doc_name: string;
  time: string;
  actions1:string;
  actions2:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {pat_ID: 1, pat_name: 'John Perera', doc_name: 'De Silva', time: 'H' , actions1:'Reject' , actions2:'Accept'},
//   {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
//   {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
//   {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
//   {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
//   {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
//   {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
//   {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
//   {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
//   {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-new-appoinment',
  templateUrl: './new-appoinment.component.html',
  styleUrls: ['./new-appoinment.component.css']
})
export class NewAppoinmentComponent implements OnInit {

  displayedColumns: string[] = ['pat_ID', 'pat_name', 'doc_name', 'time' , 'actions1' , 'actions2'];
  dataSource = ELEMENT_DATA;
  constructor() { }

  ngOnInit(): void {
  }

}
