import { BaseSeletor } from './base.seletor';

export class ItemProdutoSeletor extends BaseSeletor{

  public dataInicioFabricacao: Date;
  public dataFinalFabricacao: Date;
  public dataInicioVencimento: Date;
  public dataFinalVencimento: Date;
  public dataInicioRecebimento: Date;
  public dataFinalRecebimento: Date;
  public lote: string;
  public nomeProduto: string;
  public marca: string;
  public codigoBarras: string;
  public nomeCorredor: string;
  public nomeCategoria: string;
}
