import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';
import { ProdutosRoutingModule } from './produtos-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProdutoDetalheComponent


  ],
  imports: [
    CommonModule,
    ProdutosRoutingModule,
    FormsModule,
  ]
})
export class ProdutosModule { }
