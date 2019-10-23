import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  { path: 'inicio', loadChildren: './pages/inicio/inicio.module#InicioPageModule' },
  { path: 'lugares', loadChildren: './pages/lugares/lugares.module#LugaresPageModule' },
  { path: 'agenda', loadChildren: './pages/agenda/agenda.module#AgendaPageModule' },
  { path: 'eventos', loadChildren: './pages/eventos/eventos.module#EventosPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
