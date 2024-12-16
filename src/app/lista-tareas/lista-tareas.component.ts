import { Component } from '@angular/core';
import { TareaComponent, Tarea } from "./tarea/tarea.component";
import { EditarTareaComponent } from "./editar-tarea/editar-tarea.component";
import { AgregarTareaService } from '../agregar-tarea.service';

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

  constructor(private tareaServices:AgregarTareaService){

  }
  
  obtenerTarea(tarea: Tarea){
    this.tareas = this.tareaServices.obtenerTarea(tarea); 
  }
  
  editarTarea(id:number){
    this.edirTarea = this.tareaServices.editarTarea(id);
  }
  
  tareaEditada(tarea2:Tarea){
    this.tareaServices.tareaEditada(tarea2);
  }

}
