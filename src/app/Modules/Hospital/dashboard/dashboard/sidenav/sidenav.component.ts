import { Component, OnInit, Output , EventEmitter } from '@angular/core';
import { navbarData } from './nav-data';
import { ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { BreakpointObserver } from '@angular/cdk/layout';

interface SideNavToggle {

  collapsed: boolean;
}
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  
  avatar:string | undefined;


  constructor(private observer: BreakpointObserver){

  }

  ngOnInit(): void {
  }

  collapsed = true;
  navData = navbarData;


  toggleCollapse(): void{
    this.collapsed = !this.collapsed;
    
  }

  ngAfterViewInit(){
    this.observer.observe(['(max-width:800px)']).subscribe((res) => {
      if(res.matches){
        this.sidenav.mode = 'over';
        this.sidenav.close();
      } else{
        this.sidenav.mode = 'side';
        this.sidenav.open();
      }
    });
}
}

