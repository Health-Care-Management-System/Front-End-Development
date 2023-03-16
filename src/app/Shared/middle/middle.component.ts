import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {
  ngOnInit(): void  {
    Aos.init({disable: 'mobile'});
  }

  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag:true,
      pullDrag:true,
      dots:false,
      navSpeed: 700,
      navText: ['', ''],
      responsive: {
        0: {
          items: 1
        },
        400: {
          items: 2
        },
        740: {
          items: 3
        },
        940: {
          items: 4
        }
      },
      nav: false
  }

}


