import { Component, OnInit, Input } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-headers',
  templateUrl: './headers.component.html',
  styleUrls: ['./headers.component.scss'],
})
export class HeadersComponent implements OnInit {

  @Input() titulo: string;

  constructor(public actionSheetController: ActionSheetController) { }

  ngOnInit() {}

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
