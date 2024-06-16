import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


export const routes: Routes = [

    { path: '', redirectTo: 'validades', pathMatch: 'full'},
    { path: 'validades',
    loadChildren: () => import('./validades/validades.module').then(m => m .ValidadesModule),

  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
