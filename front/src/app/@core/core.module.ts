import { ModuleWithProviders, NgModule, Optional, Provider, SkipSelf } from '@angular/core';
import { MockModule } from './mock/mock.module';
import { throwIfAlreadyLoaded } from './module-import-guard';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { SocialLoginModule, SocialAuthServiceConfig, GoogleLoginProvider } from 'angularx-social-login';
import { InterceptorService } from './mock/services/Interceptor.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ThemeModule } from '../@theme/theme.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';


const googleLoginOptions = {
  scope: 'profile email'
};
const config :SocialAuthServiceConfig = {
  autoLogin: false,
  providers: [{
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider('576310716061-ine593m7u9kae4udvh9njktsliaikv6u.apps.googleusercontent.com', googleLoginOptions)
  }]
}
export function provideConfig(){
  return config
}

const socialLinks = [
    {
      url: 'https://www.linkedin.com/in/sauloaramos/',
      target: '_blank',
      icon: 'linkedin',
    },
    {
      url: 'https://web.facebook.com/Saulo.ramos.jr',
      target: '_blank',
      icon: 'facebook',
    },
    {
      url: 'https://github.com/Heremitta',
      target: '_blank',
      icon: 'github',
    },
  ];
const PROVIDERS:Provider[] = [
    ...MockModule.forRoot().providers,
    InterceptorService,
    { provide: STEPPER_GLOBAL_OPTIONS, useValue: { showError: true } },
    { provide: MAT_DATE_LOCALE, useValue: 'pt-BR' },
    {provide: 'SocialAuthServiceConfig', useFactory: provideConfig}
]
@NgModule({
    imports:[SocialLoginModule,ThemeModule,MatProgressBarModule],
    exports:[SocialLoginModule,MatProgressBarModule],
    declarations:[]
})
export class CoreModule{
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
    static forRoot(): ModuleWithProviders<CoreModule> {
        return {
          ngModule: CoreModule,
          providers: [
            ...PROVIDERS,
          ],
        };
      }
}