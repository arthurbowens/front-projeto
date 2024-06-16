import { BaseSeletor } from './base.seletor';

export class ItemProdutoSeletor extends BaseSeletor{

  dataInicioFabricacao?: Date; // Propriedade opcional
  dataFinalFabricacao?: Date; // Propriedade opcional
  dataInicioVencimento?: Date; // Propriedade opcional
  dataFinalVencimento?: Date; // Propriedade opcional
  dataInicioRecebimento?: Date; // Propriedade opcional
  dataFinalRecebimento?: Date; // Propriedade opcional
  lote?: string; // Propriedade opcional
  nomeProduto: string;
  marca: string;
  codigoBarras: string;
  nomeCorredor: string;
  nomeCategoria: string;
}
