import { Location } from '@angular/common';
import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackRoute]',
})
export class BackRouteDirective {
  constructor(private location: Location) {}

  @HostListener('click')
  onClick() {
    this.location.back();
  }
}
