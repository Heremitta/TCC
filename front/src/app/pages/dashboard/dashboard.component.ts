import { DOCUMENT } from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, RouterOutlet } from '@angular/router';
import { userResultApi } from '../../@core/data/userResultApi.model';
import { UserDbService } from '../../@core/mock/localDb/UserDb.service';
import { ThemeService } from '../../@core/mock/services/theme.service';
import { UserService } from '../../@core/mock/services/user.service';
import { animacaoDeRota } from '../../@theme/route-animations';
import { MENU_ITEMS } from '../visitor/menu.visitor';
import { menu, MENU_LATERAL_ITEMS } from './menu-lateral';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [animacaoDeRota]
})
export class DashboardComponent implements OnInit {
  menu :menu[]
  rotaAtual
  user
  menuOpen = true
  titleMenus=[]

  constructor(@Inject(DOCUMENT) private _document: Document,private _snackBar:MatSnackBar,private _userDbService:UserDbService,private _router:Router,public themeService: ThemeService, private _userService:UserService) { 
    this.menu =  MENU_LATERAL_ITEMS
    this.menu.forEach(menu=>{
      this.titleMenus.push(menu.title)
    })
    this.rotaAtual = this._router.url
    this.user = this._userService.user
  }

  changeMenu(){
    if(!this.menuOpen){
      this.titleMenus.forEach((menu,inde)=>{
        this.menu[inde].title = this.titleMenus[inde]
      })

    }
    else{
      this.menu.forEach(element => {
        element.title = ''
      })
    }
    this.menuOpen = !this.menuOpen
  }
  ngOnInit() {
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
     horizontalPosition:'center',
     verticalPosition:'top'
    });
  }
  routing(e){
    console.log(e)
    this._router.navigate([e])
  }
  changeTheme(event){
    this.themeService.darkMode.next(!this.themeService.darkMode.value)
    if(this.themeService.darkMode.value){
      this._document.body.classList.add('dark-theme')
    }else{
      if(this._document.body.classList.contains('dark-theme'))
      this._document.body.classList.remove('dark-theme')
    }
  }
  prepareRoute(outlet: RouterOutlet){
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation']
  }
  logout(){
    this.user = undefined
    this._userService.user = undefined
    this._userDbService.userDb.clear()
    this.openSnackBar('You has been logout!','fechar')
    this._router.navigate(['/pages'])
  }
}
