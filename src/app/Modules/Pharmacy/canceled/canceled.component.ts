import { Component, OnInit } from '@angular/core';
import { newcomponentdata } from '../new/newdata';

@Component({
  selector: 'app-canceled',
  templateUrl: './canceled.component.html',
  styleUrls: ['./canceled.component.css']
})
export class CanceledComponent implements OnInit {
  
  constructor() { }
  canceleddata=newcomponentdata;
  ngOnInit(): void {
  }

}
