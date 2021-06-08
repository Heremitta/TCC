import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { userResultApi } from '../../../@core/data/userResultApi.model';
import { UserService } from '../../../@core/mock/services/user.service';
import { GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { UserDbService } from '../../../@core/mock/localDb/UserDb.service';
@Injectable({
  providedIn: 'root'
})
export class SignInService {

constructor(private _userDbService:UserDbService,private authService: SocialAuthService,private _userService:UserService,private _http: HttpClient) {
  
 }

 signIn(login){
  this._userService.user = this._http.get<userResultApi>(environment.API+'auth/'+login.email+'/'+login.password)
  return this._userService.user
 }
 async isLoged(user:userResultApi){
   this._userService.user = user
   await this._userDbService.saveUser({userId:user.login.userId,token:user.token})
   this._userService.isLoged.next(true)
 }
}
