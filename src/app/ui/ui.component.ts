import { Component } from '@angular/core';
import { Formula } from '../formula/formula.component';

@Component({
  selector: 'app-ui',
  standalone: true,
  imports: [],
  templateUrl: './ui.component.html',
  styleUrl: './ui.component.css'
})
export class UiComponent {

  public altura: number = 0;

  public base: number = 0;

  public resultado: number = 0;

  getFormula(): number {
    this.resultado = Formula(this.altura, this.base);
    return this.resultado;
  }

  Actualizar_altura(event: Event): void {
    this.altura = parseFloat((event.target as HTMLInputElement).value);
  }

  Actualizar_base(event: Event): void {
    this.base = parseFloat((event.target as HTMLInputElement).value);
  }

}
