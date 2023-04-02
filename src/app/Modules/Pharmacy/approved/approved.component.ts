import { Component, OnInit } from '@angular/core';
import { newcomponentdata } from '../new/newdata';

@Component({
  selector: 'app-approved',
  templateUrl: './approved.component.html',
  styleUrls: ['./approved.component.css']
})
export class ApprovedComponent implements OnInit {
 
  constructor() { }
  approveddata=newcomponentdata;
  ngOnInit(): void {
  }

}
