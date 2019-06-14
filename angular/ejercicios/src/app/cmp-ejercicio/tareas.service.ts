import { Injectable, EventEmitter } from '@angular/core';
import { Tarea } from './cmp-lista/cmp-tarea/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
private _listaTareas: Array<Tarea> = [];
private _numeroTarea: number = 1;

  constructor() { }
  get tareas(): Array<Tarea> {
    return this._listaTareas;
  }

  eliminarTarea(id){
    // let listaAux: Array<Tarea> = [];
    // for(let item of this._listaTareas){
    //   if(item.id != id){
    //     listaAux.push(item);
    //   }
    // }
    // this._listaTareas = listaAux;
    // console.log(this._listaTareas)

    let tarea = this._listaTareas.find((tarea) => {
      return tarea.id == id;
    })
    let posicion = this._listaTareas.indexOf(tarea);

    this._listaTareas.splice(posicion, 1);

  }


  hacerTarea(id){
    for(let item of this._listaTareas){
      if(item.id === id){
        item.completa = !item.completa;
      }
    }
  }

  anadirTarea(tarea){
    tarea.id = this._numeroTarea;
    this._numeroTarea++;
    this._listaTareas.push(tarea);
  }

}
