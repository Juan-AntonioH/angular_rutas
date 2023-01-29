import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICliente } from 'src/app/Modelo/icliente';
import { ServicioClienteService } from 'src/app/Servicios/servicio-cliente.service';

@Component({
  selector: 'app-ficha-cliente',
  templateUrl: './ficha-cliente.component.html',
  styleUrls: ['./ficha-cliente.component.css']
})
export class FichaClienteComponent {
  constructor(private rutaActiva:ActivatedRoute, private servicioCliente:ServicioClienteService){}
  cliente!:ICliente

  ngOnInit(){
    let id = this.rutaActiva.snapshot.params["id"]
    this.cliente= this.servicioCliente.getCliente(id);
  }
}
