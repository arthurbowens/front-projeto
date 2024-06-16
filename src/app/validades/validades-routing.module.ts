import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadeListagemComponent } from './validade-listagem/validade-listagem.component';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';

const routes: Routes = [
  {path: "", component: ValidadeListagemComponent},
  {path: "", component: ProdutoDetalheComponent},
  { path: 'detalhe', component: ProdutoDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidadesRoutingModule { }
