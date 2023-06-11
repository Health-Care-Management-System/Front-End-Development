import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-admin-nav',
  templateUrl: './admin-nav.component.html',
  styleUrls: ['./admin-nav.component.css']
})
export class AdminNavComponent implements OnInit {

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
