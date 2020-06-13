import { Component, OnInit } from '@angular/core';
import { DirectorioService } from 'src/app/services/directorio.service'
import { PopoverController, ModalController } from '@ionic/angular';
import { MenuDirectorioComponent } from 'src/app/components/menu-directorio/menu-directorio.component';
import { DirectorioDetalleComponent } from '../../components/directorio-detalle/directorio-detalle.component';
@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {
  item = this.sDirectorio.cuaad.areas;
  constructor(private popOverCtrl: PopoverController,
              private sDirectorio:DirectorioService,
              private modalCtrl: ModalController) { }


  async mostrarAreas( event ){
      
    const popO = await this.popOverCtrl.create({
        
      component: MenuDirectorioComponent,
      event: event,
      
    });

    await popO.present();

    const { data } = await popO.onWillDismiss();
    console.log(data);
    
  }

  ngOnInit() {
  }

  async verDetalle() {

    const modal = await this.modalCtrl.create({
     component: DirectorioDetalleComponent,
     componentProps: {

     }
   });

    modal.present();

 }

}
