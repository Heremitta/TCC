import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ThemeService } from '../../@core/mock/services/theme.service';
import { MENU_ITEMS } from '../visitor/menu.visitor';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent {
  darkMode;
  menu = [];
  rotaAtual;
  constructor(
    private router: Router,
    private themeService: ThemeService,
    private activeRoute: ActivatedRoute,
  ) {
    this.menu = MENU_ITEMS;
    this.darkMode = this.themeService.darkMode;
    this.rotaAtual = this.router.url;
  }
  routing(e) {
    this.router.navigate([e]);
  }
  changeTheme(event) {
    this.themeService.darkMode.next(!this.themeService.darkMode.value);
  }
  prepareRoute(outlet: RouterOutlet) {
    return (
      outlet &&
      outlet.activatedRouteData &&
      outlet.activatedRouteData['animation']
    );
  }
}
