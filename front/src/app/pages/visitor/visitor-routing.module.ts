import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VisitorComponent } from './visitor.component';

const routes: Routes = [
    {path: '', component:VisitorComponent,
    children:[
        {path:'', component:HomeComponent}
    ]    
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisitorRoutingModule { }
