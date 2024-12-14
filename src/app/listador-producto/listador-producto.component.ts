import { Component } from '@angular/core';

@Component({
  selector: 'app-listador-producto',
  standalone: true,
  imports: [],
  templateUrl: './listador-producto.component.html',
  styleUrl: './listador-producto.component.css'
})
export class ListadorProductoComponent {
  descripcion:string = "" ;
  precio:number = 0;


}
