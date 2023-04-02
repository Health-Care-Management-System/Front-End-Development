import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InviteDoctorDialogComponent } from '../invite-doctor-dialog/invite-doctor-dialog.component';

@Component({
  selector: 'app-manage-team',
  templateUrl: './manage-team.component.html',
  styleUrls: ['./manage-team.component.css']
})
export class ManageTeamComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  public openInviteDoctors() :void{
    const ref = this.dialog.open(InviteDoctorDialogComponent,{width: '500px', height: '450px'});
  }
}
