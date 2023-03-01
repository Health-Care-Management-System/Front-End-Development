import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';



@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  // constructor() { }

  ngOnInit(): void  {
    Aos.init({disable: 'mobile'});
    }
    

}
