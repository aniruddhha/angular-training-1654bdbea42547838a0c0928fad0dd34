import { Directive, HostBinding, HostListener } from '@angular/core';
// ng g directive name
@Directive({
  selector: '[appMagic]'
})
export class MagicDirective {

  @HostBinding('style.width')
  width : string = '200px'

  @HostBinding('style.font-size')
  font : string = '2rem'

  constructor() { }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.width = '300px'
    this.font = '3rem'
  }

  @HostListener('mouseleave')
  onMouseExit() {
    this.width = '200px'
    this.font = '2rem'
  }
}
