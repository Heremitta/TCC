import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { userResultApi } from '../../../@core/data/userResultApi.model';
import { UserService } from '../../../@core/mock/services/user.service';
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser,
} from 'angularx-social-login';
import { UserDbService } from '../../../@core/mock/localDb/UserDb.service';
@Injectable({
  providedIn: 'root',
})
export class SignInService {
  private _userDbService: UserDbService;
  constructor(
    private authService: SocialAuthService,
    private _userService: UserService,
    private _http: HttpClient,
  ) {
    this._userDbService = this._userService.userDbService;
  }

  signIn(login) {
    this._userService.user$ = this._http.get<userResultApi>(
      environment.API + 'auth/' + login.email + '/' + login.password,
    );
    return this._userService.user$;
  }
  async isLoged(user: userResultApi) {
    this._userService.user$ = of(user);
    await this._userDbService.saveUser({
      userId: user.login.userId,
      token: user.token,
    });
    this._userService.isLoged.next(true);
  }
}
