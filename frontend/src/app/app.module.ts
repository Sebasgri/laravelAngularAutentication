import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { IngresarComponent } from './components/ingresar/ingresar.component';
import { CerrarComponent } from './components/cerrar/cerrar.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    IngresarComponent,
    CerrarComponent,
    PerfilComponent,
    RequestResetComponent,
    ResponseResetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
