import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { UserService } from '../../@core/mock/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class LogedGuard implements CanActivate {
  constructor(private _userService:UserService,private _router:Router){
    this._userService.isLoged.subscribe(logado=>{
      if(!logado){
        this._router.navigate(['/pages'])
      }
    })
  }
   canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return  this._userService.isLoged
     }
  }
  
