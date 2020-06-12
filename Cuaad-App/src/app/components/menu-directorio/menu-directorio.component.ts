import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { DirectorioService } from 'src/app/services/directorio.service'

@Component({
  selector: 'app-menu-directorio',
  templateUrl: './menu-directorio.component.html',
  styleUrls: ['./menu-directorio.component.scss'],
})
export class MenuDirectorioComponent implements OnInit {

  item = this.sDirectorio.cuaad.areas;

  constructor( private popOverCtrl: PopoverController,
                private sDirectorio:DirectorioService ) {
                console.log(this.item);
                 }

  ngOnInit() {}

  onClick( area: any){
    console.log(area)
    this.sDirectorio.actual = area;    
    this.popOverCtrl.dismiss({
      item: area
    })

  }

}
