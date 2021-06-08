import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { userResultApi } from '../../../@core/data/userResultApi.model';

@Component({
  selector: 'app-header-dashboard',
  templateUrl: './header-dashboard.component.html',
  styleUrls: ['./header-dashboard.component.scss']
})
export class HeaderDashboardComponent  {
  public changeMenu = true
  @Output()
  logoHome:EventEmitter<string> = new EventEmitter()
  @Output()
  logout:EventEmitter<string> = new EventEmitter()
  @Output()
  darkModeEmiter:EventEmitter<string> = new EventEmitter()
  @Output()
  toggleMenu:EventEmitter<string> = new EventEmitter()
  @Input() 
  darkMode 
  @Input()
  user:userResultApi
}
