import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CalculadoraComponent } from "./calculadora/calculadora.component";
import { ListaTareasComponent } from "./lista-tareas/lista-tareas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CalculadoraComponent, ListaTareasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Lista Tareas';
}
