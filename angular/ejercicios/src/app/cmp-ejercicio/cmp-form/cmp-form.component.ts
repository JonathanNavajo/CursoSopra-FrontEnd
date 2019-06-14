import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';
import { Tarea } from '../cmp-lista/cmp-tarea/tarea';

@Component({
  selector: 'app-cmp-form',
  templateUrl: './cmp-form.component.html',
  styles: []
})
export class CmpFormComponent implements OnInit {
  
  constructor(private _tareasServicio: TareasService) { }

  ngOnInit() {
  }

  add(nombre){
    let tarea = new Tarea('','',false);
    tarea.nombre = nombre;
    this._tareasServicio.anadirTarea(tarea);
    console.log(this._tareasServicio);
  }

}
