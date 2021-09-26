import { IEndereco } from "./endereco.model";

export interface ICliente {
    id:number,
    nome: string,
    sobrenome: string,
    cpf: string,
    nacionalidade: string,
    email: string,
    telefone: string,
    endereco: IEndereco
}
