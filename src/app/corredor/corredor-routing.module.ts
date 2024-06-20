import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorredorListagemComponent } from './corredor-listagem/corredor-listagem.component';

const routes: Routes = [
  {path: "", component: CorredorListagemComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorredorRoutingModule { }
