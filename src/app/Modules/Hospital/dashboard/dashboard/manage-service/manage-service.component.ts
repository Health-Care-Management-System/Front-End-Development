import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AddServiceDialogComponent } from '../add-service-dialog/add-service-dialog.component';

@Component({
  selector: 'app-manage-service',
  templateUrl: './manage-service.component.html',
  styleUrls: ['./manage-service.component.css']
})
export class ManageServiceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // openAddServiceDialog(){
  //   this.dialog.open(AddServiceDialogComponent);
  // }
}
