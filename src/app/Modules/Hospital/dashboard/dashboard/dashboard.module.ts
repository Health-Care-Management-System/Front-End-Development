import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { MaterialModule } from '../../../../material/material.module';

@NgModule({
  declarations: [

    NotificationsComponent,
    SettingsComponent,
    ManageTeamComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MaterialModule
  ]
})
export class DashboardModule { }
