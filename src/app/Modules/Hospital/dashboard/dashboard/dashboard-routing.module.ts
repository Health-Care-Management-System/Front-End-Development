import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageServiceComponent } from './manage-service/manage-service.component';
import { ManageTeamComponent } from './manage-team/manage-team.component';
import { NewAppoinmentComponent } from './new-appoinment/new-appoinment.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SettingsComponent } from './settings/settings.component';
import { SidenavComponent } from './sidenav/sidenav.component';

const routes: Routes = [
    {
        path:'',component: SidenavComponent,
        children:[
            {
                path:'dashboardbody' , component:DashboardComponent
            },
            {
                path:'new-appoinment' , component:NewAppoinmentComponent
            },
            {
                path:'notifications' , component:NotificationsComponent
            },
            {
                path:'settings' , component:SettingsComponent
            },
            {
                path:'manage-team' , component:ManageTeamComponent
            },
            {
                path:'manage-service' , component:ManageServiceComponent
            }
            
        ] 
    },
    {
        path:'*' ,redirectTo:'/dashboardbody' , pathMatch:'full'
    }
];

@NgModule({
    imports: [
      RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }