import { Component, OnInit } from '@angular/core';
import { DirectorioService } from 'src/app/services/directorio.service';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-directorio-detalle',
  templateUrl: './directorio-detalle.component.html',
  styleUrls: ['./directorio-detalle.component.scss'],
})
export class DirectorioDetalleComponent implements OnInit {

  constructor(private sDirectorio: DirectorioService,
              private modalCtrl: ModalController) { }

  ngOnInit() {}

  async regresar(){
    
    await this.modalCtrl.dismiss();

  }

}
