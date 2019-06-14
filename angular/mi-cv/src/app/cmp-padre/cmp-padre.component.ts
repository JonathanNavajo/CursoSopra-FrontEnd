import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cmp-padre',
  templateUrl: './cmp-padre.component.html',
  styleUrls: ['./cmp-padre.component.css']
})
export class CmpPadreComponent implements OnInit {

  nombrePadre: string = '';
  apellidosPadre: string = '';
  correoPadre: string= '';

  cambiarNombre(nuevoNombre){
    this.nombrePadre = nuevoNombre;
  }

  cambiarApellidos(nuevoApellido){
    this.apellidosPadre = nuevoApellido;
  }

  cambiarCorreo(nuevoCorreo){
    this.correoPadre = nuevoCorreo;
  }

  constructor() { }

  ngOnInit() {
  }

}
