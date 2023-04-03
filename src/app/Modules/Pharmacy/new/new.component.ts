import { Component, OnInit } from '@angular/core';
import {newcomponentdata} from './newdata';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {

  constructor() { }
  newdata=newcomponentdata;
  ngOnInit(): void {
  }
 
}
