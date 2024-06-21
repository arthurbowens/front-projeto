import { Component, OnInit } from '@angular/core';
import { ItemProduto } from '../../shared/model/itemProduto';
import { ItemProdutoSeletor } from '../../shared/model/seletor/itemProduto.seletor';
import { ItemProdutoService } from '../../shared/service/itemProduto.service';
import { Router } from '@angular/router';
import { Categoria } from '../../shared/model/categoria';
import { Corredor } from '../../shared/model/corredor';
import Swal from 'sweetalert2';
import { CorredorService } from '../../shared/service/corredor.service';
import { CategoriaService } from '../../shared/service/categoria.service';


@Component({
  selector: 'app-validade-listagem',
  //standalone: true,
  //imports: [],
  templateUrl: './validade-listagem.component.html',
  styleUrl: './validade-listagem.component.scss'
})


export class ValidadeListagemComponent implements OnInit {


  public seletor: ItemProdutoSeletor = new ItemProdutoSeletor();

  public totalPaginas: number = 0;
  public readonly TAMANHO_PAGINA: number = 3;

  public itemProdutos: Array<ItemProduto> = new Array;
  public categorias: Array<Categoria> = new Array;
  public corredores: Array<Corredor> = new Array;

  constructor(
    private itemProdutoService: ItemProdutoService,
    private corredorService: CorredorService,
    private categoriaService: CategoriaService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.listarTodosProdutos()

    this.corredorService.listarTodos().subscribe(
      resultado => {
        this.corredores = resultado;
      },
      erro => {
        console.log('Erro ao buscar corredoes' + erro)
      }
    )

    this.categoriaService.listarTodos().subscribe(
      resultado => {
        this.categorias = resultado;
      },
      erro => {
        console.log('Erro ao buscar categorias' + erro)
      }
    )

  }

  private listarTodosProdutos() {
    this.itemProdutoService.listarTodos().subscribe(
      (resultado) => {
        this.itemProdutos = resultado;
      },
      (erro) => {
        console.error('erro ao consultar todos item produtos', erro);
      }
    );
}

public pesquisar() {
  this.itemProdutoService.consultarComSeletor(this.seletor).subscribe(
    (resultado) => {
      this.itemProdutos = resultado;
    },
    (erro) => {
      console.error('erro ao consultar por seletor', erro);
    }
  );
}

public limpar() {
  this.seletor = new ItemProdutoSeletor();
}


editar(itemProdutoSelecionado: ItemProduto){
  this.router.navigate(['/vacinas/detalhe/'+ itemProdutoSelecionado.idItemProduto])
}

excluir(itemProdutoSelecionado: ItemProduto){
  Swal.fire({
    title: 'Deseja realmente excluir esse ITEM PRODUTO?',
    text: 'Essa ação não poderá ser desfeita!',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Sim, excluir!',
    cancelButtonText: 'Cancelar'
  }).then((result) => {
    if(result.isConfirmed){
      this.itemProdutoService.excluir(itemProdutoSelecionado.idItemProduto).subscribe(
        resultado => {
          this.pesquisar();
        },
        erro => {
          Swal.fire('Erro!', 'Erro ao excluir vacina: ' + erro.error.mensagem, 'error')
        }
      );
    }
  })
}


}
