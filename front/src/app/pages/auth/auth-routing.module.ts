import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterceptorService } from '../../@core/mock/services/Interceptor.service';
import { LoaderService } from '../../@core/mock/services/loader.service';
import { AuthComponent } from './auth.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [{ path: '', component: AuthComponent,
  children:[
    {path:'',component:LoginComponent,data:{animation: 'login'}},
    {path:'cadastro',component:CadastroComponent,data:{animation: 'cadastro'}},
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    LoaderService
  ]
})
export class AuthRoutingModule { }
