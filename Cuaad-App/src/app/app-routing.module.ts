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
  { path: 'eventos', loadChildren: './pages/eventos/eventos.module#EventosPageModule' },
  { path: 'detalle-evento', loadChildren: './pages/detalle-evento/detalle-evento.module#DetalleEventoPageModule' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },  { path: 'config-agenda', loadChildren: './pages/config-agenda/config-agenda.module#ConfigAgendaPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
