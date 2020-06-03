import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { MenuDirectorioComponent } from 'src/app/components/menu-directorio/menu-directorio.component';


@Component({
  selector: 'app-agenda',
  templateUrl: './agenda.page.html',
  styleUrls: ['./agenda.page.scss'],
})
export class AgendaPage implements OnInit {

  constructor(private popOverCtrl: PopoverController) { }


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

}
