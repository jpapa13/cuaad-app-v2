import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-menu-directorio',
  templateUrl: './menu-directorio.component.html',
  styleUrls: ['./menu-directorio.component.scss'],
})
export class MenuDirectorioComponent implements OnInit {

  item = Array(15);

  constructor( private popOverCtrl: PopoverController ) { }

  ngOnInit() {}

  onClick( area: any){
    
    this.popOverCtrl.dismiss({
      item: area
    })

  }

}
