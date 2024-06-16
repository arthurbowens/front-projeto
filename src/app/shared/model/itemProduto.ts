import { Produto } from "./produto";

export class ItemProduto {
  public idItemProduto: number;
  public lote: string;
  public precoCompra: number;
  public precoVenda: number;
  public dataFabricacao: Date;
  public dataRecebimento: Date;
  public dataVencimento: Date;
  public produto: Produto;
}
