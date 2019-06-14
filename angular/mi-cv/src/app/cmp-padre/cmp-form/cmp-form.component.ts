import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-cmp-form',
  templateUrl: './cmp-form.component.html',
  styleUrls: ['./cmp-form.component.css']
})
export class CmpFormComponent implements OnInit {
  @Input() nombre: string = '';
  @Input() apellidos: string = '';
  @Input() correo: string = '';
  @Output() avisarCambio1 = new EventEmitter<string>();
  @Output() avisarCambio2 = new EventEmitter<string>();
  @Output() avisarCambio3 = new EventEmitter<string>();

  cambiarNombre(event){
    this.avisarCambio1.emit(event.target.value);
  }

  cambiarApellido(event){
    this.avisarCambio2.emit(event.target.value);
  }

  cambiarCorreo(event){
    this.avisarCambio3.emit(event.target.value);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
