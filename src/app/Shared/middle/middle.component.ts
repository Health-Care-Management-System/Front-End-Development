import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SlidesOutputData } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  activeSlides?: SlidesOutputData;
  getPassedData(data: SlidesOutputData) {
    this.activeSlides = data;
    console.log(this.activeSlides);
  }
  UserTesmonials = [
    {
      id: '1',
      userImage:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(4).webp',
      alt:'User 1',
      userName:'Alex Rey',
      userComment:'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'
    },
    {
      id: '2',
      userImage:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp',
      alt:'User 2',
      userName:'John Doe',
      userComment:'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'
    },
    {
      id: '3',
      userImage:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(5).webp',
      alt:'User 3',
      userName:'Maira Kate',
      userComment:'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'
    },
    {
      id: '4',
      userImage:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp',
      alt:'User 4',
      userName:'Anna Deynah',
      userComment:'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'
    },{
      id: '5',
      userImage:'https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp',
      alt:'User 5',
      userName:'Kelvin Rai',
      userComment:'Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid commodi.'
    }
  ];


  ngOnInit(): void  {
    Aos.init({disable: 'mobile'});
  }

  customOptions: OwlOptions = {
      loop: true,
      mouseDrag: true,
      touchDrag:true,
      pullDrag:true,
      dots:true,
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
          items: 3
        }
      },
      nav: false
  }

}


