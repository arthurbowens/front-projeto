import { BaseSeletor } from './base.seletor';

export class ProdutoSeletor extends BaseSeletor{

  public descricao: string;
  public marca: string;
  public unidadeMedida: string;
  public quantidade: number;
  public codigoBarras: string;
  public categoria: string;
  public lote: string;
  public precoCompra: number;
  public precoVenda: number;
  public dataFabricacao: Date;
  public dataRecebimento: Date;
  public dataVencimento: Date;
}


