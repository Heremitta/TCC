import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ThemeModule } from '../../@theme/theme.module';
import { LoginComponent } from './login/login.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { SignupService } from './cadastro/signup.service';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import {MatFormFieldModule} from '@angular/material/form-field';
// import { MatInputModule } from '@angular/material/input'


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    CadastroComponent,
  ],
  imports: [
    // CommonModule,
    AuthRoutingModule,
    ThemeModule,
  ],
  providers:[SignupService]
})
export class AuthModule { }
