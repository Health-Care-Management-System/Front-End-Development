import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  edowzservices =[
   {
    image:'../../../assets/img/abt1.png',
    title:'Professional' , 
    titlespan:'Search Best Online',
    description:'Amet consectetur adipisicing eliteiuim sete eiuode tempor  incididunt.',
  } , 
  {
    image:'../../../assets/img/abt2.png',
    title:'Appointment' , 
    titlespan:'Get Instant',
    description:'Amet consectetur adipisicing eliteiuim sete eiuode tempor  incididunt.',
  } , 
  {
    image:'../../../assets/img/abt3.png',
    title:'Feedback' , 
    titlespan:'Leave Your',
    description:'Amet consectetur adipisicing eliteiuim sete eiuode tempor  incididunt.',
  } 
];
  constructor() { }

  ngOnInit(): void {
  }

}
