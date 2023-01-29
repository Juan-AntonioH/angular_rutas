import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ICliente } from 'src/app/Modelo/icliente';
import { ServicioClienteService } from 'src/app/Servicios/servicio-cliente.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent {
  constructor(private clientesService: ServicioClienteService, private miRuta: Router) {

  }
  clientes!: Array<ICliente>

  nuevoCliente() {
    this.miRuta.navigate(["/clientes/nuevo"])
  }

  infoCliente(id: number) {
    this.miRuta.navigate(["/clientes/" + id])
  }

  editCliente(id: number) {
    this.miRuta.navigate(["/clientes/modificar/" + id])
  }

  borrarCliente(id: number) {
    this.miRuta.navigate(["/clientes/borrar/" + id])
  }


  ngOnInit() {
    this.clientes = this.clientesService.getClientes()
  }

}
