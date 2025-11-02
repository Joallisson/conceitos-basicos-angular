import { Component } from '@angular/core';

@Component({
  selector: 'app-calculator',
  imports: [],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number = 0;

  calcResult(){
    this.resultado = this.numero1 + this.numero2;
    console.log(this.numero1 + ' + ' + this.numero2 + ' = ' + this.resultado)
  }

}
