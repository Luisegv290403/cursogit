import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tarea',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './tarea.component.html',
  styleUrl: './tarea.component.css'
})
export class TareaComponent {
  titulo:string | null = null;
  descripcion:string | null = null;
  id:number = 0;


  @Output() tareas = new EventEmitter<Tarea>();

  
  enviarTarea(){
    if(this.titulo && this.descripcion){
      this.id++;
      const tarea:Tarea = new Tarea(this.titulo, this.descripcion);
      tarea.setId(this.id);
      this.tareas.emit(tarea);
    }
  }

}
export class Tarea{
  private id:number = 0;
  private titulo:string;
  private descipcion:string;
  constructor(titulo:string, descripcion:string){
    this.titulo=titulo;
    this.descipcion = descripcion;
  }
  setId(id:number){
    this.id = id;
  }
  getTitulo():string{
    return this.titulo;
  }
  setTitulo(titulo:string){
    this.titulo = titulo;
  }
  getDescripcion():string{
    return this.descipcion;
  }
  setDescripcion(descripcion:string){
    this.descipcion = descripcion;
  }
  getId():number{
    return this.id;
  }
}