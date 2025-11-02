import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  imports: [FormsModule, CommonModule],
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.scss'
})
export class CalculatorComponent {
  numero1: number = 0;
  numero2: number = 0;
  resultado: number|null = null;

  calcResult(){
    this.resultado = this.numero1 + this.numero2;
  }

}
