import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-funcionario-card',
  templateUrl: './funcionario-card.component.html',
  styles: [`
    .card-block {
      text-transform: uppercase;
      color: blue;
    }
    `]
})
export class FuncionarioCardComponent {
  @Input() funcionario: any;

  getEstilosCartao() {
    return {
      'border-width.px': this.funcionario.id,
      backgroundColor: this.funcionario.id % 2 == 0 ? 'lightblue' : 'lightgreen'
    };
  }

  isAdmin() {
    return this.funcionario.nome.startsWith('T');
  }
}
