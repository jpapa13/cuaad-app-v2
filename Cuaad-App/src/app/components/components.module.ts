import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { HorarioComponent } from './horario/horario.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MenuDirectorioComponent } from './menu-directorio/menu-directorio.component';
import { DirectorioDetalleComponent } from './directorio-detalle/directorio-detalle.component';
import { MapaComponent } from './mapa/mapa.component';
import { DirectorioService } from 'src/app/services/directorio.service';




@NgModule({
  entryComponents: [
    DetalleComponent,
    DirectorioDetalleComponent,
    MapaComponent
  ],
  declarations: [
    HeadersComponent,
    MenuComponent,
    DetalleComponent,
    HorarioComponent,
    MenuDirectorioComponent,
    DirectorioDetalleComponent,
    MapaComponent,
    DirectorioService
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    DragDropModule,
    
  ],
  exports: [
    HeadersComponent,
    MenuComponent,
    DetalleComponent,
    HorarioComponent,
    MenuDirectorioComponent,
    DirectorioDetalleComponent,
    MapaComponent,
    DirectorioService
  ]
})
export class ComponentsModule { }
