import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidadeListagemComponent } from './validade-listagem/validade-listagem.component';
import { ValidadesRoutingModule } from './validades-routing.module';
import { FormsModule } from '@angular/forms';
import { ProdutoDetalheComponent } from './produto-detalhe/produto-detalhe.component';


@NgModule({
  declarations: [
    ValidadeListagemComponent,
    ProdutoDetalheComponent

  ],
  imports: [
    CommonModule,
    ValidadesRoutingModule,
    FormsModule
  ]
})
export class ValidadesModule { }
