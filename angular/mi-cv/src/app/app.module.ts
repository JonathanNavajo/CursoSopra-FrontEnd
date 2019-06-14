import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CmpPadreComponent } from './cmp-padre/cmp-padre.component';
import { CmpFormComponent } from './cmp-padre/cmp-form/cmp-form.component';
import { CmpCvComponent } from './cmp-padre/cmp-cv/cmp-cv.component';

@NgModule({
  declarations: [
    AppComponent,
    CmpPadreComponent,
    CmpFormComponent, 
    CmpCvComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
