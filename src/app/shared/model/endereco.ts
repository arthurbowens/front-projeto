import { Fornecedor } from "./fornecedor";

export class Endereco {
  public idEndereco: number;
  public pais: string;
  public estado: string;
  public cidade: string;
  public bairro: string;
  public rua: string;
  public numero: number;
  public complemento: string;
  public cep: string;
  public fornecedor: Fornecedor;

}
