import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClienteService } from 'src/app/cliente.service';
import { ICliente } from 'src/app/modelos/cliente.model';
import { ClienteComponent } from '../cliente.component';

@Component({
  selector: 'app-criar-cliente',
  templateUrl: './criar-cliente.component.html',
  styleUrls: ['./criar-cliente.component.css']
})
export class CriarClienteComponent implements OnInit {

  estados:string[]=["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

  formularioCriarCliente = new FormGroup({
    nome: new FormControl('',[
      Validators.required,
      Validators.maxLength(120)]),
    sobrenome: new FormControl('',[
      Validators.required,
      Validators.maxLength(120)]),
    cpf: new FormControl('',[
      Validators.required]),
    nacionalidade: new FormControl('',[
      Validators.required,
      Validators.maxLength(70)]),
    cep: new FormControl('',[
      Validators.required]),
    estado: new FormControl('Selecione',[
      Validators.required]),
    cidade: new FormControl('',[
      Validators.required,
      Validators.maxLength(50)]),
    logradouro: new FormControl('',[
      Validators.required]),
    email: new FormControl('',[
      Validators.required,
      Validators.email,
      Validators.maxLength(70)],
      ),
    telefone: new FormControl('',[
      Validators.required])
  });

  constructor(private clienteService:ClienteService) { }

  ngOnInit(): void {
  }

  criarCliente(){    
    
    const cliente: ICliente = {
      id:0,
      nome:this.formularioCriarCliente.get('nome')?.value,
      sobrenome:this.formularioCriarCliente.get('sobrenome')?.value,
      nacionalidade:this.formularioCriarCliente.get('nacionalidade')?.value,
      cpf:this.formularioCriarCliente.get('cpf')?.value,
      endereco : {
        id:0,
        logradouro:this.formularioCriarCliente.get('logradouro')?.value,
        cep:this.formularioCriarCliente.get('cep')?.value,
        cidade:this.formularioCriarCliente.get('cidade')?.value,
        estado:this.formularioCriarCliente.get('estado')?.value,
      },
      email:this.formularioCriarCliente.get('email')?.value,
      telefone:this.formularioCriarCliente.get('telefone')?.value
    }

    this.clienteService.postCliente(cliente).subscribe();
    this.formularioCriarCliente.reset();
  }

}
