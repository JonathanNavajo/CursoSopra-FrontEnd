import { Component, OnInit, Output, Input } from '@angular/core';
import { TareasService } from '../../tareas.service';
import { Tarea } from './tarea';

@Component({
  selector: 'app-cmp-tarea',
  templateUrl: './cmp-tarea.component.html',
  styleUrls: ['./cmp-tarea.component.css']
})
export class CmpTareaComponent implements OnInit {
  @Input() tarea: Tarea;
  constructor(private _tareasServicio: TareasService) { }

  ngOnInit() {
  }

  hacer(id){
    this._tareasServicio.hacerTarea(id);
    console.log('TAREA REALIZADA')
  }

  eliminar(id){
    this._tareasServicio.eliminarTarea(id);
    console.log('TAREA ELIMINADA')
  }


  
  
}
