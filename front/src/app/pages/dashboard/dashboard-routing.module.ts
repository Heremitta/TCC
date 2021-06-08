import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterceptorService } from '../../@core/mock/services/Interceptor.service';
import { LoaderService } from '../../@core/mock/services/loader.service';
import { DashboardComponent } from './dashboard.component';
import { LogedGuard } from './loged.guard';
import { ListTypesComponent } from './pages/list-types/list-types.component';
import { ListUsersComponent } from './pages/list-users/list-users.component';


const routes: Routes = [
    {path: '', component:DashboardComponent,
     canActivate:[LogedGuard],
     children:[
        {path: '', component:ListUsersComponent},
        {path: 'types', component:ListTypesComponent}
    ]    
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    LoaderService
  ]
})
export class DashboardRouterModule { 
  constructor(){}
}
