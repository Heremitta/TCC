import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface itemMenu{
  link:string,
  title?:string,
  icon?:string,
  left?:boolean
}

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.scss']
})
export class MenuLateralComponent implements OnInit {
  @Output()
  routingEmiter:EventEmitter<string> = new EventEmitter()
  @Input()
  menu:itemMenu[]=[]
  @Input()
  rotaAtual

  constructor() { }

  ngOnInit() {
  }
  emitRouting(e){ 
    setTimeout(() => {
      this.rotaAtual = e
    }, 10);
    this.routingEmiter.emit(e)
}
}
