import { Component, OnInit } from '@angular/core';
import { newcomponentdata } from '../new/newdata';

@Component({
  selector: 'app-rejected',
  templateUrl: './rejected.component.html',
  styleUrls: ['./rejected.component.css']
})
export class RejectedComponent implements OnInit {

  constructor() { }
  rejecteddata=newcomponentdata;
  ngOnInit(): void {
  }

}
