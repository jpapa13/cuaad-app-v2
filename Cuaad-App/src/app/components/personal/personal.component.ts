import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { DirectorioDetalleComponent } from '../directorio-detalle/directorio-detalle.component';

@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss'],
})
export class PersonalComponent implements OnInit {

  constructor(private modalCtrl: ModalController) { }

  ngOnInit() {}

  async verDetalle() {

    const modal = await this.modalCtrl.create({
     component: DirectorioDetalleComponent,
     componentProps: {

     }
   });

    modal.present();

 }

}
