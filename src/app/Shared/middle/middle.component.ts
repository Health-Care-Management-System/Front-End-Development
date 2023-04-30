import { Component, OnInit } from '@angular/core';
import * as Aos from 'aos';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SlidesOutputData } from 'ngx-owl-carousel-o';
import { Features } from './middlepagedata'; 

@Component({
  selector: 'app-middle',
  templateUrl: './middle.component.html',
  styleUrls: ['./middle.component.css']
})
export class MiddleComponent implements OnInit {

  Website_features= Features;
  
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

  blogSections = [
    {
      id:'1',
      blogImage:'../../../assets/img/blog-1.jpg',
      blogTitle:'Teating for the people',
      blogText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et vero mollitia nemo corporis consequatur aspernatur distinctio dignissimos velit nam.'
    }
     , 
     {
      id:'1',
      blogImage:'../../../assets/img/blog-2.jpeg',
      blogTitle:'Teating for the people',
      blogText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et vero mollitia nemo corporis consequatur aspernatur distinctio dignissimos velit nam.'
    },
    {
      id:'1',
      blogImage:'../../../assets/img/blog-3.jpeg',
      blogTitle:'Teating for the people',
      blogText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et vero mollitia nemo corporis consequatur aspernatur distinctio dignissimos velit nam.'
    },
    {
      id:'1',
      blogImage:'../../../assets/img/blog-4.jpeg',
      blogTitle:'Teating for the people',
      blogText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et vero mollitia nemo corporis consequatur aspernatur distinctio dignissimos velit nam.'
    },  {
      id:'1',
      blogImage:'../../../assets/img/blog-5.jpg',
      blogTitle:'Teating for the people',
      blogText:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas et vero mollitia nemo corporis consequatur aspernatur distinctio dignissimos velit nam.'
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


