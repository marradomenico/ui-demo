import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[hover-pointer]'
})
export class HoverPointerDirective {
  constructor(private el: ElementRef) { }
  
  @HostListener('mouseenter') onMouseEnter() {
    this.el.nativeElement.style.cursor = 'pointer';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.el.nativeElement.style.cursor = 'default';
  }

}
