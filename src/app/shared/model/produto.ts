import { Categoria } from "./categoria";
import { Fornecedor } from "./fornecedor";
import { ItemProduto } from "./itemProduto";

export class Produto {
  public idProduto: number;
  public descricao: string;
  public marca: string;
  public unidadeMedida: string;
  public quantidade: number;
  public codigoBarras: string;
  public categoria: Categoria;
  public fornecedores: Fornecedor[];
  public itemProdutos: ItemProduto[];

}
