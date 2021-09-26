import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ICliente } from './modelos/cliente.model';

@Injectable({
  providedIn: 'root'
})

export class ClienteService {

  constructor(private httpClient:HttpClient) { }

  private _url = "http://localhost:20004/api/Cliente";

  
  
  // GET
  getClientes(): Observable<ICliente[]>{
    return this.httpClient.get<ICliente[]>(this._url);
  }

  // GET by id
  getCliente(id:string):Observable<ICliente>{
    const url=`${this._url}/${id}`;
    return this.httpClient.get<ICliente>(url);
  }

  // POST
  postCliente(cliente: ICliente): Observable<ICliente>{
    return this.httpClient.post<ICliente>(this._url, cliente);
  }

  // PUT
  putCliente(id:string,cliente:ICliente){
    const url=`${this._url}/${id}`;
    return this.httpClient.put(url,cliente);
  }

  // DELETE
  deleteCliente(id: number){
    const url=`${this._url}/${id}`;
    return this.httpClient.delete(url);
  }

}
