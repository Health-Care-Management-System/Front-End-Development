import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { MaterialModule } from '../../../../material/material.module';
import { NewAppoinmentComponent } from './new-appoinment/new-appoinment.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';

@NgModule({
  declarations: [

    NotificationsComponent,
    SettingsComponent,
    ManageTeamComponent,
    NewAppoinmentComponent,
    ManageServiceComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
