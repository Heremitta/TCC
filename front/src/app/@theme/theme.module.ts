import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';
import { FooterComponent } from './components/footer/footer.component';
import {MatButtonModule} from '@angular/material/button';
import { DashboardLayoutComponent, VisitorLayoutComponent } from './layout';
import { HeaderVisitorComponent } from './components/header-visitor/header-visitor.component';
import { HeaderDashboardComponent } from './components/header-dashboard/header-dashboard.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { MenuComponent } from './components/menu/menu.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { PhoneDirective } from './directives/phone.directive';
import { MenuLateralComponent } from './components/menu-lateral/menu-lateral.component';
import {MatMenuModule} from '@angular/material/menu';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';

const PIPES:any[]=[

]
const COMPONENTES:any=[
    FooterComponent,
    VisitorLayoutComponent,
    HeaderVisitorComponent,
    HeaderDashboardComponent,
    MenuComponent,
    DashboardLayoutComponent,
    MenuLateralComponent
]
const DIRECTIVES:any=[
  PhoneDirective
]
@NgModule({
    imports:[
        CommonModule,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatMenuModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        MatDialogModule,
        MatSelectModule
    ],
    exports:[CommonModule,
        ...COMPONENTES,
        ...PIPES,
        ...DIRECTIVES,
        MatButtonModule,
        MatToolbarModule,
        MatIconModule,
        MatDividerModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatTableModule,
        MatSortModule,
        MatTooltipModule,
        MatDialogModule,
        MatSelectModule
      
      ],
    declarations:[...COMPONENTES,...PIPES,...DIRECTIVES]
})
export class ThemeModule{
  static forRoot(): ModuleWithProviders<ThemeModule> {
    return {
      ngModule: ThemeModule,
      providers: [
        
      ]
    };
  }
}