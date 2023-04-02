import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { MaterialModule } from '../../../../material/material.module';
import { NewAppoinmentComponent } from './new-appoinment/new-appoinment.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';
import { AddServiceDialogComponent } from './add-service-dialog/add-service-dialog.component';
import { InviteDoctorDialogComponent } from './invite-doctor-dialog/invite-doctor-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [

    NotificationsComponent,
    SettingsComponent,
    ManageTeamComponent,
    NewAppoinmentComponent,
    ManageServiceComponent,
    AddServiceDialogComponent,
    InviteDoctorDialogComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  entryComponents:[AddServiceDialogComponent],
})
export class DashboardModule { }
