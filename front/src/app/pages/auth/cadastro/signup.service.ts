import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../../../@core/data/user.model';
import { userResultApi } from '../../../@core/data/userResultApi.model';
import { UserDbService } from '../../../@core/mock/localDb/UserDb.service';
import { UserService } from '../../../@core/mock/services/user.service';

@Injectable({
  providedIn: 'root',
})
export class SignupService {
  private _userDbService: UserDbService;

  constructor(private _userService: UserService, private _http: HttpClient) {
    this._userDbService = this._userService.userDbService;
  }

  signUp(user: User) {
    return this._userService.newUser(user);
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
