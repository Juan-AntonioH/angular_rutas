import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/Modelo/icliente';
import { ServicioClienteService } from 'src/app/Servicios/servicio-cliente.service';

@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent {
constructor(private rutaActiva: ActivatedRoute, private servicioCliente: ServicioClienteService, private miRuta: Router){
}
cliente!:ICliente

modificarDatos(){
  let opcion = confirm("¿Seguro que quieres modificar los datos de este cliente?");
  if (opcion) {
    this.servicioCliente.modificarCliente(this.cliente)
    this.miRuta.navigate(["/clientes/"])
  }
}


ngOnInit(){
  let id = this.rutaActiva.snapshot.params["id"]
  this.cliente = this.servicioCliente.getCliente(id)
}

}
