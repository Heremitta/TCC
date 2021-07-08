import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';
import { ThemeModule } from '../../@theme/theme.module';
import { DashboardRouterModule } from './dashboard-routing.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BoxDialogEditListUsersComponent } from './pages/list-users/components/box-dialog-edit-list-users/box-dialog-list-users.component';
import { BoxDialogExcludeListUsersComponent } from './pages/list-users/components/box-dialog-exclude-list-users/box-dialog-exclude-list-users.component';
import { ListTypesComponent } from './pages/list-types/list-types.component';
import { BoxDialogEditTypeComponent } from './pages/list-types/components/box-dialog-edit-type/box-dialog-edit-type.component';
import { BoxSialogDeleteTypesComponent } from './pages/list-types/components/box-dialog-delete-types/box-dialog-delete-types.component';
import { MessagesComponent } from './pages/messages/messages.component';
import { ChatComponent } from './components/chat/chat.component';
import { ChatService } from './components/chat/chat.service';
import { ConexaoSocketService } from './components/chat/connection/connectionSocket';

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
    BoxSialogDeleteTypesComponent,
    MessagesComponent,
    MessagesComponent,
    ChatComponent,
  ],
  providers: [ChatService, ConexaoSocketService],
})
export class DashboardModule {}
