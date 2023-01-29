import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ICliente } from 'src/app/Modelo/icliente';
import { ServicioClienteService } from 'src/app/Servicios/servicio-cliente.service';

@Component({
  selector: 'app-borrar-cliente',
  templateUrl: './borrar-cliente.component.html',
  styleUrls: ['./borrar-cliente.component.css']
})
export class BorrarClienteComponent {
  constructor(private rutaActiva: ActivatedRoute, private servicioCliente: ServicioClienteService, private miRuta: Router) {
  }
  cliente!: ICliente;

  borrar(id: number) {
    let opcion = confirm("¿Seguro que quieres borrar al cliente?");
    if (opcion) {
      this.servicioCliente.borrarCliente(id)
      this.miRuta.navigate(["/clientes/"])
    }

  }

  ngOnInit() {
    let id = this.rutaActiva.snapshot.params["id"]
    this.cliente = this.servicioCliente.getCliente(id);
  }
}
