import { Injectable } from '@angular/core';
import { ICliente } from '../Modelo/icliente';

@Injectable({
  providedIn: 'root'
})
export class ServicioClienteService {

  constructor() { }


  getClientes() {
    return this.listaClientes
  }

  getCliente(id: number) {
    let pos: number = this.listaClientes.findIndex(e => e.id == id);
    return this.listaClientes[pos];
  }

  nuevoCliente(cliente: ICliente) {
    this.listaClientes.push(cliente);
  }

  modificarCliente(cliente: ICliente) {
    let pos: number = this.listaClientes.findIndex(e => e.id == cliente.id)
    this.listaClientes[pos].nombre=cliente.nombre
    this.listaClientes[pos].cargo=cliente.cargo
  }

  borrarCliente(id: number) {
    let pos: number = this.listaClientes.findIndex(e => e.id == id);
    this.listaClientes.splice(pos, 1);
  }

  listaClientes: Array<ICliente> = [
    {
      id: 1,
      nombre: 'Ana',
      cargo: 'Programadora',
    },
    {
      id: 2,
      nombre: 'Elena',
      cargo: 'Administrativa',
    },
    {
      id: 3,
      nombre: 'Juan',
      cargo: 'Analista',
    },
    {
      id: 4,
      nombre: 'Luis',
      cargo: 'Programador',
    },
    {
      id: 5,
      nombre: 'Maria',
      cargo: 'Diseñadora',
    },
    {
      id: 6,
      nombre: 'Pedro',
      cargo: 'Marketing',
    }
  ]
}
