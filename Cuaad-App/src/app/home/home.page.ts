import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor( public actionSheetController: ActionSheetController ) {}
  async presentActionSheet() {
    const actionsheet = await this.actionSheetController.create({
      header: 'Configuraciones',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          console.log('Delete clicked');
        }
      }]
    });
    await actionsheet.present();
  }
}
