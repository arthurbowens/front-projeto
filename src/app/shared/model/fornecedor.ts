import { Endereco } from "./endereco";

export class Fornecedor {
  public idFornecedor: number;
  public nome: string;
  public telefone: string;
  public cnpj: string;
  public enderecos: Endereco[];
}
