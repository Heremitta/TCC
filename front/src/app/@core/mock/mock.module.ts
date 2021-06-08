import { ModuleWithProviders, NgModule, Provider } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeService } from './services/theme.service';
import { UserService } from './services/user.service';
import { LoaderService } from './services/loader.service';
import { InterceptorService } from './services/Interceptor.service';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
const PROVIDERS:any[]=[
  ThemeService,
  UserService,
  LoaderService,
  InterceptorService,
]
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers:[
    ...PROVIDERS
  ]
})
export class MockModule {
  constructor(){
    console.log('aewww')
  }
  static forRoot(): ModuleWithProviders<MockModule> {
    return {
      ngModule: MockModule,
      providers: [
        ...PROVIDERS,
      ],
    };
  }
}
