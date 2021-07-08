import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../../data/user.model';
import { userResultApi } from '../../data/userResultApi.model';
import { UserDbService } from '../localDb/UserDb.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  isLoged = new BehaviorSubject(false);
  users: User[] = [];
  types: any[] = [];
  readonly defaultAvatar = '../../../../assets/images/user_default.png';
  private _user$: Observable<userResultApi>;

  constructor(private _http: HttpClient, public userDbService: UserDbService) {}

  get user$(): Observable<userResultApi> {
    return this._user$;
  }
  set user$(user) {
    this._user$ = user;
  }

  getAllUsers(): Observable<User[]> {
    return this._http.get<User[]>(environment.API + 'user');
  }

  getUser(id) {
    return this._http.get(environment.API + 'user/' + id);
  }

  newUser(user): Observable<userResultApi> {
    try {
      this.user$ = this._http.post<userResultApi>(
        environment.API + 'user',
        user,
      );
    } catch (err) {
      console.error(err);
    }
    return this.user$;
  }

  logout() {
    this.user$ = undefined;
    this.userDbService.clear();
  }
  updateUser(user) {
    return this._http.put(environment.API + 'user', user);
  }

  deleteUser(id) {
    return this._http.delete(environment.API + 'user/' + id);
  }

  checkToken(token) {
    return this._http.get<userResultApi>(environment.API + 'token/' + token);
  }

  //types  - NOTE > BETTER MAKE OTHER SERVIC FOR TYPES

  getAllUserTypes() {
    return this._http.get(environment.API + 'user/types');
  }

  getUserTypes() {
    return this._http.get(environment.API + 'user_types');
  }

  newUserTypes(user) {
    return this._http.post(environment.API + 'user_types', user);
  }

  updateUserTypes(user) {
    return this._http.put(environment.API + 'user_types', user);
  }

  deleteUserTypes(id) {
    return this._http.delete(environment.API + 'user_types/' + id);
  }

  getUserAndType() {
    return this._http.get(environment.API + 'user&type');
  }
}
