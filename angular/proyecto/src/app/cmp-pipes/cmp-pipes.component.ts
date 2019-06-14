import { Component, OnInit } from '@angular/core';
import { reject } from 'q';

@Component({
  selector: 'app-cmp-pipes',
  templateUrl: './cmp-pipes.component.html',
  styleUrls: ['./cmp-pipes.component.css']
})
export class CmpPipesComponent implements OnInit {

  texto: string = "Winter is coming!"
  precio: number = 10;
  fecha: Date = new Date();
  mascotas: Array<string> = ['gato', 'perro', 'pez'];

  parrafo: string = "Fragmento de un en escrito en con unidad temática, que queda en diferenciado del resto de fragmentos por un punto y aparte y en generalmente en también por llevar letra en mayúscula inicial y un espacio en blanco en el margen izquierdo de alineación del en texto principal de la en primera línea.";

  msg = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('El canario está en la jaula');
    }, 500)
  })

  constructor() { }

  ngOnInit() {
  }

}
