import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../tarea/tarea.component';

@Component({
  selector: 'app-editar-tarea',
  standalone: true,
  imports: [],
  templateUrl: './editar-tarea.component.html',
  styleUrl: './editar-tarea.component.css'
})
export class EditarTareaComponent {
  @Input() edirTarea:Tarea | null = null;
  @Output() tareaEditada = new EventEmitter<Tarea>;

  editarTarea(id:number, titulo:string, descripcion:string){
    if(this.edirTarea){
      this.edirTarea.setId(id);
      this.edirTarea.setTitulo(titulo);
      this.edirTarea.setDescripcion(descripcion);

      this.tareaEditada.emit(this.edirTarea);
      this.edirTarea = null;
    }

  }
}
