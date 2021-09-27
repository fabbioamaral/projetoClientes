import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private http:HttpClient) { }

  consultaCEP(cep:string){

    // Nova variável "cep" somente com dígitos
    cep=cep.replace(/\D/g,'');

    // Verifica se campo cep possui valor informado
    if(cep!==''){
      // REGEX para validar o cep
      const validaCep=/^[0-9]{8}$/;

      // Valida o formato do cep
      if(validaCep.test(cep)){
        return this.http.get(`//viacep.com.br/ws/${cep}/json`);
      }
    }

    return of({});
  }
}
