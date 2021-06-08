import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ThemeService } from '../../../@core/mock/services/theme.service';

export interface itemMenu{
  link:string,
  title?:string,
  icon?:string,
  left?:boolean
}
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {
  @Output() darkModeEmiter:EventEmitter<string> = new EventEmitter()
  darkMode
  @Output()
  routingEmiter:EventEmitter<string> = new EventEmitter()
  @Input()
  menu:itemMenu[]=[]
  @Input()
  rotaAtual

  
  confereRota(value){
      return (this.rotaAtual === value) && this.rotaAtual.length === value.length
   }
  emitRouting(e){ 
      setTimeout(() => {
        this.rotaAtual = e
      }, 10);
      this.routingEmiter.emit(e)
  }
}
