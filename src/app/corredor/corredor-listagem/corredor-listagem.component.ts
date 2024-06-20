import { Component } from '@angular/core';
import { Corredor } from '../../shared/model/corredor';
import { CorredorService } from '../../shared/service/corredor.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-corredor-listagem',
  //standalone: true,
  //imports: [],
  templateUrl: './corredor-listagem.component.html',
  styleUrl: './corredor-listagem.component.scss'
})
export class CorredorListagemComponent {

  public corredores: Corredor[] = [];

  constructor(private corredorService: CorredorService, private router: Router) {}

  ngOnInit(): void {
    this.listarTodosCorredores();
  }

  // Método para listar todos os corredores
  public listarTodosCorredores(): void {
    this.corredorService.listarTodos().subscribe(
      (resposta) => {
        this.corredores = resposta;
      },
      (error) => {
        console.error('Erro ao listar corredores', error);
        Swal.fire('Erro!', 'Erro ao listar corredores.', 'error');
      }
    );
  }

  // Método para adicionar um novo corredor
  public adicionarCorredor(): void {
    this.router.navigate(['corredor/novo']); // Navegue para a rota de criação de corredor
  }

  // Método para editar um corredor
  public editarCorredor(idCorredor: number): void {
    this.router.navigate(['corredor/editar', idCorredor]); // Navegue para a rota de edição, passando o ID do corredor
  }

  // Método para excluir um corredor
  public excluirCorredor(idCorredor: number): void {
    Swal.fire({
      title: 'Atenção!',
      text: 'Tem certeza que deseja excluir este corredor?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sim',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.corredorService.excluir(idCorredor).subscribe(
          (resposta) => {
            this.listarTodosCorredores(); // Atualize a lista de corredores após a exclusão
            Swal.fire('Sucesso!', 'Corredor excluído com sucesso.', 'success');
          },
          (error) => {
            console.error('Erro ao excluir corredor', error);
            Swal.fire('Erro!', 'Erro ao excluir corredor.', 'error');
          }
        );
      }
    });
  }

}
