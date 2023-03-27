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

team_members = [
  {
  image:'../../../assets/img/team3.jpeg',
  profession:'Founder, C.E.O',
  name:'Maryland Nicolosi'
  },
  {
  image:'../../../assets/img/team1.jpg',
  profession:'Web designer',
  name:'Thomsan V Lan'
  },
  {
  image:'../../../assets/img/team2.jpeg',
  profession:'Marketing Manager',
  name:'Orella Berners'
  },

];
  constructor() { }

  ngOnInit(): void {
  }

}
