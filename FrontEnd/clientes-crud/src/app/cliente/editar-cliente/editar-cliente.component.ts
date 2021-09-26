import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/cliente.service';
import { ICliente } from 'src/app/modelos/cliente.model';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  formularioEditarCliente = new FormGroup({
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

  id!:string;
  cliente:ICliente={
    id:0,
    nome:'',
    sobrenome:'',
    cpf:'',
    nacionalidade:'',
    email:'',
    telefone:'',
    endereco:{
      id:0,
      logradouro:'',
      cidade:'',
      estado:'',
      cep:''
    }
  };
  estados:string[]=["AC", "AL", "AM", "AP", "BA", "CE", "DF", "ES", "GO", "MA", "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN", "RO", "RS", "RR", "SC", "SE", "SP", "TO"];

  constructor(private clienteService:ClienteService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    
    this.id=this.route.snapshot.paramMap.get('id')!;
    this.clienteService.getCliente(this.id).subscribe(res=>{
      this.cliente.id=res.id;
      this.cliente.endereco.id=res.endereco.id;
      this.formularioEditarCliente.get('nome')?.setValue(res.nome);
      this.formularioEditarCliente.get('sobrenome')?.setValue(res.sobrenome);
      this.formularioEditarCliente.get('cpf')?.setValue(res.cpf);
      this.formularioEditarCliente.get('nacionalidade')?.setValue(res.nacionalidade);
      this.formularioEditarCliente.get('cep')?.setValue(res.endereco.cep);
      this.formularioEditarCliente.get('estado')?.setValue(res.endereco.estado);
      this.formularioEditarCliente.get('logradouro')?.setValue(res.endereco.logradouro);
      this.formularioEditarCliente.get('cidade')?.setValue(res.endereco.cidade);
      this.formularioEditarCliente.get('email')?.setValue(res.email);
      this.formularioEditarCliente.get('telefone')?.setValue(res.telefone);
    });    
  } 
  
  editarCliente() {
    
    this.cliente.nome=this.formularioEditarCliente.get('nome')?.value;
    this.cliente.sobrenome=this.formularioEditarCliente.get('sobrenome')?.value;
    this.cliente.cpf=this.formularioEditarCliente.get('cpf')?.value;
    this.cliente.nacionalidade=this.formularioEditarCliente.get('nacionalidade')?.value;
    this.cliente.email=this.formularioEditarCliente.get('email')?.value;
    this.cliente.telefone=this.formularioEditarCliente.get('telefone')?.value;
    this.cliente.endereco.logradouro=this.formularioEditarCliente.get('logradouro')?.value;
    this.cliente.endereco.cidade=this.formularioEditarCliente.get('cidade')?.value;
    this.cliente.endereco.estado=this.formularioEditarCliente.get('estado')?.value;
    
    this.clienteService.putCliente(this.id,this.cliente).subscribe();
    this.router.navigateByUrl('/clientes');
  }

}
