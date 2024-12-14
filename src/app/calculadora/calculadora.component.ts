import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OperacionComponent } from "./operacion/operacion.component";
import { ResultadoComponent } from "../resultado/resultado.component";

@Component({
  selector: 'app-calculadora',
  standalone: true,
  imports: [FormsModule, OperacionComponent, ResultadoComponent],
  templateUrl: './calculadora.component.html',
  styleUrl: './calculadora.component.css'
})
export class CalculadoraComponent {
  resultadoPadre:number | null = null;
  
  procesarResultado(resultado: number){
    this.resultadoPadre = resultado;
  }
}
