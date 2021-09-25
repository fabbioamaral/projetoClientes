import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Cliente } from './modelos/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private httpClient:HttpClient) { }

  private _url = "http://localhost:20004/api/Cliente";

  
  
  // GET
  getClientes(): Observable<Cliente[]>{
    return this.httpClient.get<Cliente[]>(this._url);
  }

  // POST
  postCliente(cliente: Cliente): Observable<Cliente>{
    return this.httpClient.post<Cliente>(this._url, cliente);
  }



}
