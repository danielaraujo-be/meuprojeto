import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {
  @HostBinding('style.backgroundColor') styleBackgroundColor: string;

  @HostListener('focus') focus() {
    this.styleBackgroundColor = 'green';
  }

  @HostListener('blur') blur() {
    this.styleBackgroundColor = 'transparent';
  }

}
