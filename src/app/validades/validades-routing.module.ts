import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ValidadeListagemComponent } from './validade-listagem/validade-listagem.component';

const routes: Routes = [
  {path: "validade-listagem", component: ValidadeListagemComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ValidadesRoutingModule { }
