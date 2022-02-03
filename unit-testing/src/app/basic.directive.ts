import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[basic]'
})
export class BasicDirective {

  @HostBinding('style.border')
  border : string = '1px solid red'

  constructor() { }

  @HostListener('mouseenter')
  onIn() {
    this.border = '1px solid blue'
  }

  @HostListener('mouseleave')
  onOut() {
    this.border = '1px solid red'
  }
}
