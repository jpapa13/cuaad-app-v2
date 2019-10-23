import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeadersComponent } from './headers/headers.component';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeadersComponent,
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule
  ],
  exports: [
    HeadersComponent,
    MenuComponent
  ]
})
export class ComponentsModule { }
