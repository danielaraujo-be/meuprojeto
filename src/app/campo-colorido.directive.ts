import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appCampoColorido]'
})
export class CampoColoridoDirective {
  @Input('appCampoColorido') cor = 'gray';

  @HostBinding('style.backgroundColor') styleBackgroundColor: string;

  @HostListener('focus') focus() {
    this.styleBackgroundColor = this.cor;
  }

  @HostListener('blur') blur() {
    this.styleBackgroundColor = 'transparent';
  }

}
