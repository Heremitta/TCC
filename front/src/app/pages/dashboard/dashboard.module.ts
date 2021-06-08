import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardRouterModule } from './dashboard-routing.module';
import {MatPaginatorModule} from '@angular/material/paginator';
import { BoxDialogEditListUsersComponent } from './components/box-dialog-edit-list-users/box-dialog-list-users.component';
import { BoxDialogExcludeListUsersComponent } from './components/box-dialog-exclude-list-users/box-dialog-exclude-list-users.component';
import { ListTypesComponent } from './pages/list-types/list-types.component';
import { BoxDialogEditTypeComponent } from './components/box-dialog-edit-type/box-dialog-edit-type.component';
import { BoxSialogDeleteTypesComponent } from './components/box-dialog-delete-types/box-dialog-delete-types.component';

@NgModule({
  imports: [
    ThemeModule,
    CommonModule,
    DashboardRouterModule,
    MatPaginatorModule,
  ],
  declarations: [
    DashboardComponent,
    ListUsersComponent,
    BoxDialogEditListUsersComponent,
    BoxDialogExcludeListUsersComponent,
    ListTypesComponent,
    BoxDialogEditTypeComponent,
    BoxSialogDeleteTypesComponent
  ]
})
export class DashboardModule { }
