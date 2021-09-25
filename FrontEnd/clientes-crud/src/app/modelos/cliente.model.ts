import { Endereco } from "./endereco.model";

export interface Cliente {
    id: number,
    nome: string,
    sobrenome: string,
    CPF: string,
    nacionalidade: string,
    email: string,
    telefone: string,
    endereco: Endereco;
}
