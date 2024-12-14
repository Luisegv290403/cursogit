import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-operacion',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './operacion.component.html',
  styleUrl: './operacion.component.css'
})
export class OperacionComponent {
  numero1:number | null = null;
  numero2:number | null = null;

  @Output() resultado = new EventEmitter<number>();

  resultadoSuma(){
    if(this.numero1 && this.numero2){
      const resultado = this.numero1 + this.numero2;
      this.resultado.emit(resultado);
    }

  }
}
