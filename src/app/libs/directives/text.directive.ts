import { Directive, ElementRef, HostListener,Renderer2 } from '@angular/core';

@Directive({
  selector: '[appText]'
})
export class TextDirective {
  
  @HostListener('mouseenter') mouseEnter(eventData: Event) {
    this.renderer.setStyle(this.eleRef.nativeElement, 'font-size', '18px');
    this.renderer.setStyle(this.eleRef.nativeElement, 'transition', '0.5s');
    this.renderer.setStyle(this.eleRef.nativeElement, 'transform', 'rotate(0deg)');
  }

  @HostListener('mouseleave') mouseLeave(eventData: Event) {
    this.renderer.setStyle(this.eleRef.nativeElement, 'transform', 'rotate(360deg)');
    this.renderer.setStyle(this.eleRef.nativeElement, 'font-size', '15px');
  }
  
  constructor(private eleRef: ElementRef, private renderer: Renderer2) { }

  
}
