import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Cliente } from 'src/app/modelos/cliente.model';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent implements OnInit {

  estados:string[]=["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

  cliente!:Cliente;

  formularioCriacao = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

}
