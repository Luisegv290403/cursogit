import { Injectable } from '@angular/core';
import { Tarea } from './lista-tareas/tarea/tarea.component';

@Injectable({
  providedIn: 'root'
})
export class AgregarTareaService {
  tarea: Tarea | null = null;
  tareas:Tarea[] = [];
  edirTarea: Tarea | null = null;
  constructor() { }

  obtenerTarea(tarea: Tarea):Tarea[]{
    this.tarea = tarea;
    this.tareas.push(this.tarea);
    return this.tareas;
  }
  editarTarea(id:number):Tarea|null{
    this.tareas.forEach((tareas) => {
      if(tareas.getId() == id){
        this.edirTarea = tareas;
      }  
    });
    return this.edirTarea;
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
