import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BorrarClienteComponent } from './Clientes/borrar-cliente/borrar-cliente.component';
import { ClientesComponent } from './Clientes/clientes/clientes.component';
import { FichaClienteComponent } from './Clientes/ficha-cliente/ficha-cliente.component';
import { ModificarClienteComponent } from './Clientes/modificar-cliente/modificar-cliente.component';
import { NuevoClienteComponent } from './Clientes/nuevo-cliente/nuevo-cliente.component';
import { Error404Component } from './error404/error404.component';
import { InicioComponent } from './inicio/inicio.component';


const routes: Routes = [{path:"",component:InicioComponent},
  {path:"clientes",component:ClientesComponent},
  {path:"clientes/nuevo",component:NuevoClienteComponent},
  {path:"clientes/:id",component:FichaClienteComponent},
  {path:"clientes/borrar/:id",component:BorrarClienteComponent},
  {path:"clientes/modificar/:id",component:ModificarClienteComponent},
  {path:"**",component:Error404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
