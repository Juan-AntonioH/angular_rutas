import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClientesComponent } from './Clientes/clientes/clientes.component';
import { NuevoClienteComponent } from './Clientes/nuevo-cliente/nuevo-cliente.component';
import { ModificarClienteComponent } from './Clientes/modificar-cliente/modificar-cliente.component';
import { BorrarClienteComponent } from './Clientes/borrar-cliente/borrar-cliente.component';
import { FichaClienteComponent } from './Clientes/ficha-cliente/ficha-cliente.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { InicioComponent } from './inicio/inicio.component';
import { Error404Component } from './error404/error404.component';

@NgModule({
  declarations: [
    AppComponent,
    ClientesComponent,
    NuevoClienteComponent,
    ModificarClienteComponent,
    BorrarClienteComponent,
    FichaClienteComponent,
    HeaderComponent,
    FooterComponent,
    InicioComponent,
    Error404Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
