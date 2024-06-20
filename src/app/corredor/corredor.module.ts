import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorredorRoutingModule } from './corredor-routing.module';
import { CorredorListagemComponent } from './corredor-listagem/corredor-listagem.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CorredorListagemComponent
  ],
  imports: [
    CommonModule,
    CorredorRoutingModule,
    FormsModule
  ]
})
export class CorredorModule { }
