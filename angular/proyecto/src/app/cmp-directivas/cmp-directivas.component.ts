import { Component, OnInit } from '@angular/core';
import { ArgumentOutOfRangeError } from 'rxjs';

@Component({
  selector: 'app-cmp-directivas',
  templateUrl: './cmp-directivas.component.html',
  styleUrls: ['./cmp-directivas.component.css']
})
export class CmpDirectivasComponent implements OnInit {
  aplicaLetraAzul: boolean = true;
  miColor: string = 'black';
  colores: Array<string> = ['green', 'yellow', 'orange'];
  pelicula = {
    titulo: 'Peli 1',
    descripcion: 'Descripcion 1'
  }

  cambiarColor(nuevoColor){
    this.miColor = nuevoColor.target.value;
  }
  constructor() { }

  ngOnInit() {
  }

}
