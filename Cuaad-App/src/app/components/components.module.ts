import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { DetalleComponent } from './detalle/detalle.component';
import { HorarioComponent } from './horario/horario.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { PersonalComponent } from "./personal/personal.component";
import { MenuDirectorioComponent } from './menu-directorio/menu-directorio.component';
import { DirectorioDetalleComponent } from './directorio-detalle/directorio-detalle.component';




@NgModule({
  entryComponents: [
    DetalleComponent,
    DirectorioDetalleComponent
  ],
  declarations: [
    HeadersComponent,
    MenuComponent,
    DetalleComponent,
    HorarioComponent,
    PersonalComponent,
    MenuDirectorioComponent,
    DirectorioDetalleComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
    DragDropModule
  ],
  exports: [
    HeadersComponent,
    MenuComponent,
    DetalleComponent,
    HorarioComponent,
    PersonalComponent,
    MenuDirectorioComponent,
    DirectorioDetalleComponent
  ]
})
export class ComponentsModule { }
