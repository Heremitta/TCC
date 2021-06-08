import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InterceptorService } from './@core/mock/services/Interceptor.service';
import { LoaderService } from './@core/mock/services/loader.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/auth/login/login.component';

const routes: Routes = [

  
  {
    path: '',
    redirectTo:'pages',
    pathMatch:'full',
  },
  { path:'pages',loadChildren: () => import('./pages/visitor/visitor.module').then(m => m.VisitorModule) },  
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  { path: 'dashboard', loadChildren: () => import('./pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
  {path: 'google', component: LoginComponent },
  {path: 'google/callback', component: LoginComponent },
  { path: '**', redirectTo:'pages' }

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true },
    LoaderService
  ]
})
export class AppRoutingModule { }
