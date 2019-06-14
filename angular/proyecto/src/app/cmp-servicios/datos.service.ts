import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {

  private _datos: Array<string> = ['Dato 1'];
  datoEmitido = new EventEmitter<string>();

  constructor() { }

  get datos(): Array<string> {
    return this._datos;
  }

  addDato(dato: string): void {
    this._datos.push(dato);
    console.log(this._datos)
  }

  emitirDato(dato): void {
    this.datoEmitido.emit(dato);
  }
}
