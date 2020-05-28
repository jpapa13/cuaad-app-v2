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



@NgModule({
  entryComponents: [
    DetalleComponent
  ],
  declarations: [
    HeadersComponent,
    MenuComponent,
    DetalleComponent,
    HorarioComponent,
    PersonalComponent
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
    PersonalComponent
  ]
})
export class ComponentsModule { }
