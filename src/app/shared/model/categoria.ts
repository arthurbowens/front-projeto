import { Corredor } from "./corredor";
import { Produto } from "./produto";

export class Categoria {
  public idCategoria: number;
  public tipo: string;
  public corredor: Corredor;
  public produtos: Produto[];
nome: any;
}
