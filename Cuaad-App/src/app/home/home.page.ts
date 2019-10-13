import { Component } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  constructor( public actionSheetController: ActionSheetController,
               public navCtrl: NavController,
               private domSanitizer: DomSanitizer ) {}


    


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






