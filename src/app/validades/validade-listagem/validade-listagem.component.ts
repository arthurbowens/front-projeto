import { Component } from '@angular/core';
import { ItemProduto } from '../../shared/model/itemProduto';
import { ItemProdutoSeletor } from '../../shared/model/seletor/itemProduto.seletor';
import { ItemProdutoService } from '../../shared/service/itemProduto.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-validade-listagem',
  //standalone: true,
  //imports: [],
  templateUrl: './validade-listagem.component.html',
  styleUrl: './validade-listagem.component.scss'
})


export class ValidadeListagemComponent {
  public validades: Array<ItemProduto> = new Array();
  public vacina: number;
  public seletor: ItemProdutoSeletor = new ItemProdutoSeletor();

  public totalPaginas: number = 0;
  public readonly TAMANHO_PAGINA: number = 3;

  constructor(
    private itemProdutoService: ItemProdutoService,
    private router: Router
  ) {}

  private listarTodosProdutos() {
    this.itemProdutoService.listarTodos().subscribe(
      (resultado) => {
        this.validades = resultado;
      },
      (erro) => {
        console.error('erro ao consultar todas vacinas', erro);
      }
    );
}

public pesquisar() {
  this.itemProdutoService.consultarComSeletor(this.seletor).subscribe(
    (resultado) => {
      this.validades = resultado;
    },
    (erro) => {
      console.error('erro ao consultar por seletor', erro);
    }
  );
}

public limpar() {
  this.seletor = new ItemProdutoSeletor();
}


}
