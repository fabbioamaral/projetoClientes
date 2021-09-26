import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClienteService } from '../cliente.service';
import { ICliente } from '../modelos/cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes!: ICliente[];
  

  constructor(private clienteService: ClienteService, private router:Router) { }
  
  ngOnInit(): void {
    this.clienteService.getClientes()
    .subscribe(res => this.clientes = res
    );
  }

  excluirCliente(id:number){    
    this.clienteService.deleteCliente(id).subscribe();
    this.clientes=this.clientes.filter(item=>item.id!=id);    
  }


}
