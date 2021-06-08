import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';

@Component({
    selector: 'app-visitor-layout',
    styleUrls: ['./visitor.layout.scss'],
    template:`
        <div [ngClass]="{'dark-theme': darkMode}" class="layout d-flex flex-column justify-content-between relative">
            <app-header-visitor (logoHome)="logoEmit($event)" class="header">
                <div >
                    <ng-content select="app-menu"></ng-content>
                </div>
            </app-header-visitor>
            <div class="padding-padrao content">
                <ng-content select="div.outlet"></ng-content>
            </div>
            <div class="footer-cover">
                <div class="footer">
                    <app-footer (logoFooter)="logoEmit($event)"></app-footer>
                </div>
            </div>
        </div>
    `
})
export class VisitorLayoutComponent implements OnInit {
    @Input()
    darkMode
    @Output()
    logoEmiter:EventEmitter<string> = new EventEmitter()
    constructor() { }
  
    ngOnInit() {
    }
    logoEmit(logoHome){
        this.logoEmiter.emit(logoHome)
    }
  
  }