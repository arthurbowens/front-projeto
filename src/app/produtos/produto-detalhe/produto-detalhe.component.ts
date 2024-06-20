import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../../shared/service/produto.service'; // Importe o serviço de produto
import { ActivatedRoute, Router } from '@angular/router'; // Importe ActivatedRoute e Router
import { Produto } from '../../shared/model/produto'; // Importe o modelo de produto
import { Fornecedor } from '../../shared/model/fornecedor'; // Importe o modelo de fornecedor
import { Categoria } from '../../shared/model/categoria'; // Importe o modelo de categoria
import { FornecedorService } from '../../shared/service/fornecedor.service';
import { CategoriaService } from '../../shared/service/categoria.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produto-detalhe',
  //standalone: true,
  //imports: [ProdutoModule],
  templateUrl: './produto-detalhe.component.html',
})
export class ProdutoDetalheComponent implements OnInit {
  // Atributos para armazenar os dados dos fornecedores e categorias
  public fornecedores: Array<Fornecedor> = new Array<Fornecedor>();
  public categorias: Array<Categoria> = new Array<Categoria>();

  // Atributo para armazenar os dados do produto
  public produto: Produto = new Produto();

  // Atributo para armazenar o ID do produto (se for edição)
  public idProduto: number;
produtoSeletor: any;
produtoFormGroup: any;

  constructor(
    private produtoService: ProdutoService, // Injete o serviço de produto
    private router: Router, // Injete o Router
    private fornecedorService: FornecedorService, // Injete o serviço de fornecedor
    private categoriaService: CategoriaService, // Injete o serviço de categoria
    private route: ActivatedRoute // Injete o ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Obtenha o ID do produto da URL
    this.route.params.subscribe((params) => {
      this.idProduto = params['id'];
      // Se existir um ID, busque o produto
      if (this.idProduto) {
        this.buscarProduto();
      }
    });

    // Consulte todos os fornecedores
    this.fornecedorService.listarTodos().subscribe(
      (resposta) => {
        this.fornecedores = resposta;
      },
      (erro) => {
        Swal.fire('Erro ao consultar fornecedores!', erro, 'error');
      }
    );

    // Consulte todas as categorias
    this.categoriaService.listarTodos().subscribe(
      (resultado) => {
        this.categorias = resultado;
      },
      (erro) => {
        console.error('Erro ao consultar categorias', erro);
      }
    );
  }

  // Método para salvar o produto
  public salvar(): void {
    if (this.idProduto) {
      // Se for edição, atualize o produto
      this.atualizar();
    } else {
      // Se for novo, insira o produto
      this.inserir();
    }
  }

  // Método para inserir um novo produto
  public inserir(): void {
    this.produtoService.salvar(this.produto).subscribe(
      (resposta) => {
        this.produto = resposta;
        Swal.fire('Produto salvo com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao salvar um produto!', erro, 'error');
      }
    );
  }
  voltar() {
    throw new Error('Method not implemented.');
  }

  // Método para atualizar o produto
  public atualizar(): void {
    this.produtoService.atualizar(this.produto).subscribe(
      (resposta) => {
        Swal.fire('Produto atualizado com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire(
          'Erro ao atualizar o produto: ' + erro.error.mensagem,
          'error'
        );
      }
    );
  }

  // Método para buscar o produto por ID
  public buscarProduto(): void {
    this.produtoService.consultarPorId(this.idProduto).subscribe(
      (produto) => {
        this.produto = produto;
      },
      (erro) => {
        Swal.fire('Erro ao buscar um produto!', erro, 'error');
      }
    );
  }}
