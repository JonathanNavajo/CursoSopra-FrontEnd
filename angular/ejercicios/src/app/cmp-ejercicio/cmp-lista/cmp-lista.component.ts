import { Component, OnInit } from '@angular/core';
import { TareasService } from '../tareas.service';
import { Tarea } from './cmp-tarea/tarea';

@Component({
  selector: 'app-cmp-lista',
  templateUrl: './cmp-lista.component.html',
  styleUrls: ['./cmp-lista.component.css']
})
export class CmpListaComponent implements OnInit {
  listaTar: Array<Tarea> = [];
  constructor(private _tareasServicio: TareasService) { }

  ngOnInit() {
    this.listaTar = this._tareasServicio.tareas;
  }

  

}
