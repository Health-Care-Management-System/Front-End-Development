import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-history-review',
  templateUrl: './history-review.component.html',
  styleUrls: ['./history-review.component.css']
})
export class HistoryReviewComponent implements OnInit {
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
  title=`shyam kannna`;
  subtitle=`Male; 30 years and 3 months`;
  image="https://material.angular.io/assets/img/examples/shiba2.jpg";
  longText2="Meeting has been reshedule for 28 may....";
  constructor() { }
  // title = 'edowzori';
  sideBarOpen=true;
  ngOnInit(){}
  leftToolBarToggler(){
   this.sideBarOpen=!this.sideBarOpen;
  }

  

}
