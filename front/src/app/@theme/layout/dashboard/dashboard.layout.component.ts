import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dashboard-layout',
  styleUrls: ['./dashboard.layout.component.scss'],
  template:`
  <div [ngClass]="{'dark-theme': darkMode}" class="layout   ">
    <app-header-dashboard class="header" [user]="user" (toggleMenu)="menuEmit($event);toggleMenu = !toggleMenu" [darkMode]="darkMode" (logout)="logout.emit('logout')" (darkModeEmiter)="darkModeEmiter.emit('darkModeEmiter')" (logoHome)="logoEmit($event)" >
        <div >
            <ng-content select="app-menu"></ng-content>
        </div>
    </app-header-dashboard>
<div class="content">
      <div class="menu-lateral" [ngClass]="{'close': !toggleMenu}">
      <ng-content select="app-menu-lateral"></ng-content>
    </div>
    <div class="content-outlet">
        <ng-content class="outlet" select="div.outlet"></ng-content>
    </div>
</div>
    <div class="footer-cover">
        <div class="footer">
            <app-footer (logoFooter)="logoEmit($event)"></app-footer>
        </div>
    </div>
</div>
`
})
export class DashboardLayoutComponent implements OnInit {
  @Output()
  darkModeEmiter:EventEmitter<string> = new EventEmitter()
  @Input()
  user
  @Output()
  logoEmiter:EventEmitter<string> = new EventEmitter()
  @Output()
  logout:EventEmitter<string> = new EventEmitter()
  @Output()
  menuEmiter:EventEmitter<string> = new EventEmitter()
  @Input()
  darkMode
  toggleMenu = true
  constructor() { }

  ngOnInit() {
  }
  menuEmit(event){
    this.menuEmiter.emit(event)
  }
  logoEmit(logoHome){
    this.logoEmiter.emit(logoHome)
  }
}
