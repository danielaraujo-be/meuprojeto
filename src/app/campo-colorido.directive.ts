import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {

  constructor(
    private elementRef: ElementRef,
    private rederer: Renderer2
  ) {
  }

  @HostListener('focus') focus() {
    this.rederer.setStyle(this.elementRef.nativeElement, 'background-color', 'yellow');
  }

  @HostListener('blur') blur() {
    this.rederer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
  }

}
