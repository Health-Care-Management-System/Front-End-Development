import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-patient-navbar',
  templateUrl: './patient-navbar.component.html',
  styleUrls: ['./patient-navbar.component.css']
})
export class PatientNavbarComponent implements OnInit {
  @Output() toggleLeftToolBarForMe: EventEmitter<any> = new EventEmitter();
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }

  constructor() { window.addEventListener('scroll' , function(){
    var matToolBar = document.querySelector("mat-toolbar");
    matToolBar?.classList.toggle("sticky" , window.scrollY>0);
  }) }

  ngOnInit(): void {
  }
  toggleLeftToolBar(){
    this.toggleLeftToolBarForMe.emit();
      }

}
