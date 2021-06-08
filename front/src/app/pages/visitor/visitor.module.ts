import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { VisitorComponent } from './visitor.component';
import { VisitorRoutingModule } from './visitor-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { ThemeModule } from '../../@theme/theme.module';
// import { AppRoutingModule } from '../../app-routing.module';

@NgModule({
  imports: [
    // CommonModule,
    VisitorRoutingModule,
    ThemeModule,
  ],
  declarations: [
    VisitorComponent,
    HomeComponent,
  ]
})
export class VisitorModule { }
