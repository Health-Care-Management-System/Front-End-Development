import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
export interface PeriodicElement {
  name: string;
  time: string;
  method: String;
  approval: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {time:'12', name: 'Hydrogen', method: "online", approval: 'yes'},
  {time:'11', name: 'Hydrogen', method: "online", approval: 'yes'},
  {time:'12', name: 'Hydrogen', method: "online", approval: 'yes'},
  {time:'11', name: 'Hydrogen', method: "online", approval: 'yes'},
   {time: '2', name: 'Helium', method: "online", approval: 'yes'},
   {time: '3', name: 'Lithium', method: "online", approval: 'yes'},
 {time: '4', name: 'Beryllium',method: "online", approval: 'yes'},
 
];

@Component({
  selector: 'app-showrequest',
  templateUrl: './showrequest.component.html',
  styleUrls: ['./showrequest.component.css']
})
export class ShowrequestComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;


  data = [
    {
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      date: '2023-2-11',
      time: '08.30 p.m',
      status: 'Active'
    },
    {
      name: 'Alex Ray',
      email: 'alex.ray@gmail.com',
      date: '2023-2-11',
      time: '08.30 p.m',
      status: 'Onboarding'
    },
    {
      name: 'Kate Hunington',
      email: 'kate.hunington@gmail.com',
      date: '2023-2-11',
      time: '08.30 p.m',
      status: 'Awaiting'
    },{
      name: 'John Doe',
      email: 'john.doe@gmail.com',
      date: '2023-2-11',
      time: '08.30 p.m',
      status: 'Active'
    },
    {
      name: 'Alex Ray',
      email: 'alex.ray@gmail.com',
      date: '2023-2-11',
      time: '08.30 p.m',
      status: 'Onboarding'
    },
    {
      name: 'Kate Hunington',
      email: 'kate.hunington@gmail.com',
      date: '2023-2-11',
      time: '08.30 p.m',
      status: 'Awaiting'
    }
  ];
  constructor() { }

  title = 'edowzori';
  sideBarOpen=true;
  ngOnInit(){}
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }

}
