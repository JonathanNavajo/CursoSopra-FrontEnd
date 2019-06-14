import { Component, OnInit } from '@angular/core';
import { PeliculasService } from './peliculas.service';

@Component({
  selector: 'app-cmp-http',
  templateUrl: './cmp-http.component.html',
  styleUrls: ['./cmp-http.component.css']
})
export class CmpHttpComponent implements OnInit {
  generos: Array<any> = [];
  constructor(private peliculasServica: PeliculasService) { }

  ngOnInit() {
    this.peliculasServica.getGeneros().subscribe((datos) => {
      console.log(datos);
      this.generos = datos;
    })
  }

}

// los observables son objetos que encapsulan un valor, va guardando los DatosService, y cuando acaba, si no hay operadores, los emite a los subscriptores, si hay operadores va a ir pasando por ellos.... y cuando acabe se va a emitir a los subscritores del observable