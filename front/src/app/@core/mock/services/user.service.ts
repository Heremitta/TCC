import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { User } from '../../data/user.model';
import { userResultApi } from '../../data/userResultApi.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  isLoged = new BehaviorSubject(false);
  users:User[]=[]
  types:any[]=[]
  private _user:Observable<userResultApi> | userResultApi

constructor(private _http:HttpClient) { }

  get user(){
    return this._user 
  }
  set user(user){
    this._user = user
  }

  getAllUsers():Observable<User[]>{
    return this._http.get<User[]>(environment.API+'user')
  }

  getUser(id){
    return this._http.get(environment.API+'user/'+id)
  }
  
  newUser(user):Observable<userResultApi>{
    this.user = <Observable<userResultApi>> this._http.post(environment.API+'user',user)
    return this.user
  }

  updateUser(user){
    return this._http.put(environment.API+'user',user)
  }

  deleteUser(id){
    return this._http.delete(environment.API+'user/'+id)
  }

  checkToken(token){
    return this._http.get(environment.API+'token/'+token)
  }


  //types  - NOTE > BETTER MAKE OTHER SERVIC FOR TYPES

  getAllUserTypes(){
    return this._http.get(environment.API+'user/types')
  }

  getUserTypes(){
    return this._http.get(environment.API+'user_types')
  }
  
  newUserTypes(user){
    return this._http.post(environment.API+'user_types',user)
  }

  updateUserTypes(user){
    return this._http.put(environment.API+'user_types',user)
  }

  deleteUserTypes(id){
    return this._http.delete(environment.API+'user_types/'+id)
  }


  getUserAndType(){
    return this._http.get(environment.API+'user&type')
  }
}
