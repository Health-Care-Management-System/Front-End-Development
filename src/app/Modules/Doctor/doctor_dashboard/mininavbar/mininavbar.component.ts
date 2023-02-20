import { Component,EventEmitter, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-mininavbar',
  templateUrl: './mininavbar.component.html',
  styleUrls: ['./mininavbar.component.css']
})
export class MininavbarComponent implements OnInit {
  @Output() toggleLeftToolBarForMe: EventEmitter<any> = new EventEmitter();
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
  constructor() { }

  ngOnInit(): void {
  }
  toggleLeftToolBar(){
this.toggleLeftToolBarForMe.emit();
  }
}
