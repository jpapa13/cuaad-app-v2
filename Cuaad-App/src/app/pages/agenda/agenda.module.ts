import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { AgendaPage } from './agenda.page';
import { ComponentsModule } from '../../components/components.module';
import { MenuDirectorioComponent } from 'src/app/components/menu-directorio/menu-directorio.component';

const routes: Routes = [
  {
    path: '',
    component: AgendaPage
  }
];

@NgModule({
  entryComponents:[
    MenuDirectorioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    ComponentsModule
  ],
  declarations: [AgendaPage]
})
export class AgendaPageModule {}
