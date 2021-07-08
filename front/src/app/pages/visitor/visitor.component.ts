import { AfterContentInit, Component, Inject, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ThemeService } from '../../@core/mock/services/theme.service';
import { MENU_ITEMS } from './menu.visitor';
import { authRoute } from '../../@theme/route-animations';
import { of, Subscription } from 'rxjs';
import { UserDbService } from '../../@core/mock/localDb/UserDb.service';
import { userIndexed } from '../../@core/data/userIndexed.model';
import { UserService } from '../../@core/mock/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DOCUMENT } from '@angular/common';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-visitor',
  templateUrl: './visitor.component.html',
  styleUrls: ['./visitor.component.scss'],
  // animations: [authRoute],
})
export class VisitorComponent implements AfterContentInit {
  darkMode;
  menu = [];
  rotaAtual;
  constructor(
    @Inject(DOCUMENT) private _document: Document,
    private _snackBar: MatSnackBar,
    private _userService: UserService,
    private _userDbService: UserDbService,
    private _router: Router,
    private _themeService: ThemeService,
  ) {
    this.menu = MENU_ITEMS;
    this.darkMode = this._themeService.darkMode;
    this.rotaAtual = this._router.url;
  }

  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    let user;
    this.checkUserIndexedDb().then((e) => {
      user = e;
      if (user) {
        if ('token' in user) {
          this.haveToken(user);
        }
      } else {
        if (!this._userService.isLoged.value) {
          this._userDbService.userDb.clear();
        }
        this._userService.isLoged.next(false);
      }
    });
  }
  haveToken(user) {
    this._userService.user$ = this._userService.checkToken(user.token);
    let sub: Subscription = this._userService.user$.subscribe((login) => {
      if ('login' in login) {
        this._userService.isLoged.next(true);
        this._userDbService.saveUser({
          token: login.token,
          userId: login.login.userId,
        });
        this._router.navigate(['/dashboard']);
      }
      this._userService.isLoged.value ? sub.unsubscribe() : '';
    });
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 4000,
      horizontalPosition: 'center',
      verticalPosition: 'top',
    });
  }
  async checkUserIndexedDb(): Promise<userIndexed> {
    return await (<Promise<userIndexed>>this._userDbService.getUser());
  }
  routing(e) {
    this._router.navigate([e]);
  }
  changeTheme(event) {
    this._themeService.darkMode.next(!this._themeService.darkMode.value);
    if (this._themeService.darkMode.value) {
      this._document.body.classList.add('dark-theme');
    } else {
      if (this._document.body.classList.contains('dark-theme'))
        this._document.body.classList.remove('dark-theme');
    }
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
