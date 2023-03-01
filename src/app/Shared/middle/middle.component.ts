import { Component, OnInit } from '@angular/core';
import * as  AOS from 'aos';


@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void  {
    AOS.init({disable: 'mobile'});
    }
    

}
