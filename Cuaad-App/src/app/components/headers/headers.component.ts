import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
})
export class HeadersComponent implements OnInit {

  @Input() titulo: string;

  constructor(public actionSheetController: ActionSheetController,
              private navCtrl: NavController,
              public auth: AuthService) { }

  ngOnInit() {}

  async presentActionSheet() {
    if(this.auth.isLogged()){
      const actionsheet = await this.actionSheetController.create({
        header: 'Configuraciones',
        buttons: [{
          text: 'logout',
          icon: 'undo',
          handler: () => {
            console.log(this.auth.isLogged());
            this.auth.log = false;
          }
        },
        {
          text: 'Cambia tu aula',
          icon: 'swap',
          handler: () => {
            this.navCtrl.navigateRoot('/lugares')
          }
        }]
      });
      await actionsheet.present();
    }else{
      const actionsheet = await this.actionSheetController.create({
        header: 'Configuraciones',
        buttons: [{
          text: 'login',
          icon: 'log-in',
          handler: () => {
            console.log('Delete clicked');
            console.log(this.auth.isLogged());
            this.navCtrl.navigateRoot('/config-agenda')
          }
        }]
      });
      await actionsheet.present();
    }
  }

  login(){
    this.navCtrl.navigateRoot('/login')

  }

}
