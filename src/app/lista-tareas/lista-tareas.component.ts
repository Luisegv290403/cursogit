import { Component } from '@angular/core';
import { TareaComponent, Tarea } from "./tarea/tarea.component";
import { EditarTareaComponent } from "./editar-tarea/editar-tarea.component";

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [TareaComponent, EditarTareaComponent],
  templateUrl: './lista-tareas.component.html',
  styleUrl: './lista-tareas.component.css'
})
export class ListaTareasComponent {
  tarea: Tarea | null = null;
  edirTarea: Tarea | null = null;
  

  tareas:Tarea[] = [];
  
  
  obtenerTarea(tarea: Tarea){
    this.tarea = tarea;
    this.tareas.push(this.tarea);
  }
  
  editarTarea(id:number){
    this.tareas.forEach((tareas) => {
      if(tareas.getId() == id){
        this.edirTarea = tareas;
      }  
    });
  }
  tareaEditada(tarea2:Tarea){
    this.tareas.forEach((tarea) => {
      if(tarea.getId() == tarea2.getId()){
        tarea.setTitulo(tarea2.getTitulo());
        tarea.setDescripcion(tarea2.getDescripcion());
      }
    })
  }

}
