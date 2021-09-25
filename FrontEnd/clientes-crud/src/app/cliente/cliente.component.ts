import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../cliente.service';
import { Cliente } from '../modelos/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes!: Cliente[];

  constructor(private clienteService: ClienteService) { }
  
  ngOnInit(): void {
    this.clienteService.getClientes()
    .subscribe(res => this.clientes = res
    );
  }




}
