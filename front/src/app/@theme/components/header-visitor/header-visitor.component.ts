import { Component, Input, OnInit, Output } from '@angular/core';
import {EventEmitter} from '@angular/core';


@Component({
  selector: 'app-header-visitor',
  templateUrl: './header-visitor.component.html',
  styleUrls: ['./header-visitor.component.scss']
})
export class HeaderVisitorComponent implements OnInit {
  @Output()
  logoHome:EventEmitter<string> = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
}
