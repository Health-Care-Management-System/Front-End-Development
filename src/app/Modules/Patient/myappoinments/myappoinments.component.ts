import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myappoinments',
  templateUrl: './myappoinments.component.html',
  styleUrls: ['./myappoinments.component.css']
})
export class MyappoinmentsComponent implements OnInit {
  data = [
    {
      name: 'John Doer',
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
