import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ICliente } from 'src/app/Modelo/icliente';
import { ServicioClienteService } from 'src/app/Servicios/servicio-cliente.service';

@Component({
  selector: 'app-nuevo-cliente',
  templateUrl: './nuevo-cliente.component.html',
  styleUrls: ['./nuevo-cliente.component.css']
})

export class NuevoClienteComponent {

  constructor(private servicioCliente: ServicioClienteService, private miRuta: Router) {
  }

  cliente: ICliente = {
    id: 0,
    nombre: "Pepito",
    cargo: 'Probador de colchones',
  }

  nuevoCliente() {
    if (!isNaN(this.cliente.id) && this.cliente.id != 0) {
      let opcion = confirm("¿Seguro que los datos son correctos?");
      if (opcion) {
        this.servicioCliente.nuevoCliente(this.cliente)
        alert("El cliente fue añadido correctamente")
        this.miRuta.navigate(["/clientes/"])
      }
    } else {
      alert("Rellena bien los campos")
    }

  }

  // enviar(datos: NgForm) {
  //   let opcion = confirm("¿Seguro que los datos son correctos?");
  //   if (opcion) {
  //     this.servicioCliente.nuevoCliente(datos.value)
  //     alert("El cliente fue añadido correctamente")
  //     this.miRuta.navigate(["/clientes/"])
  //   }
  // }
}
