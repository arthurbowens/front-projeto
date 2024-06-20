import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [

    { path: '', redirectTo: 'validades', pathMatch: 'full'},
    { path: 'validades',
    loadChildren: () => import('./validades/validades.module').then(m => m .ValidadesModule)},
    { path: '', redirectTo: 'produtos', pathMatch: 'full'},
    { path: 'produtos',
    loadChildren: () => import('./produtos/produtos.module').then(m => m .ProdutosModule)},
    { path: '', redirectTo: 'corredor', pathMatch: 'full'},
    { path: 'corredor',
    loadChildren: () => import('./corredor/corredor.module').then(m => m .CorredorModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
