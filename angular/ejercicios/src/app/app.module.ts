import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpEjercicioComponent } from './cmp-ejercicio/cmp-ejercicio.component';
import { CmpListaComponent } from './cmp-ejercicio/cmp-lista/cmp-lista.component';
import { CmpFormComponent } from './cmp-ejercicio/cmp-form/cmp-form.component';
import { CmpTareaComponent } from './cmp-ejercicio/cmp-lista/cmp-tarea/cmp-tarea.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpEjercicioComponent,
    CmpListaComponent,
    CmpFormComponent,
    CmpTareaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
