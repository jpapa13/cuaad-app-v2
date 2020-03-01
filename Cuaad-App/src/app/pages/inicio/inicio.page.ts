import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Galeria } from '../../clases/galeria';


import { DetalleComponent } from '../../components/detalle/detalle.component';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

 public archivo: any [];
 public galeriaHuenti: Galeria;
 public galeriaMusica: Galeria;
 public galeriaArtes: Galeria;
 public galeria: Galeria;
// public  url = '192.168.64.2/cuaad-app-v2/BaseBackend/index.php/';

  constructor( private request: RequestService,
               private modalCtrl: ModalController ) {
              this.galeriaHuenti = new Galeria ( 'Huentitan', 'imagen' );
              this.galeriaMusica = new Galeria ( 'Música', 'imagen' );
              this.galeriaArtes = new Galeria ( 'Artes', 'imagen' );
              this.galeria = new Galeria('Todos', 'imagen');
              this.getAllBanners();
  }

  getAllBanners() {
    this.request.getBanners(this.galeriaHuenti)
    .subscribe((Response: any) => {

    console.log(Response);
    if (Response.status === true) {
        console.log('Respuesta satisfactoria Huenti');
        this.galeriaHuenti.archivo = Response.data;
        this.galeria.archivo = this.galeria.archivo.concat(this.galeriaHuenti.archivo);
        console.log(this.galeriaHuenti.archivo);
      } else {
        console.log('Error:');
        console.log(Response);
      }
    });

    this.request.getBanners(this.galeriaMusica)
    .subscribe((Response: any) => {

    console.log(Response);
    if (Response.status === true) {
        console.log('Respuesta satisfactoria Música');
        this.galeriaMusica.archivo = Response.data;
        this.galeria.archivo = this.galeria.archivo.concat(this.galeriaMusica.archivo);
        console.log(this.galeriaMusica.archivo);
      } else {
        console.log('Error:');
        console.log(Response);
      }
    });

    this.request.getBanners(this.galeriaArtes)
    .subscribe((Response: any) => {

    console.log(Response);
    if (Response.status === true) {
        console.log('Respuesta satisfactoria Artes');
        this.galeriaArtes.archivo = Response.data;
        this.galeria.archivo = this.galeria.archivo.concat(this.galeriaArtes.archivo);
        console.log(this.galeriaArtes.archivo);
      } else {
        console.log('Error:');
        console.log(Response);
      }
    });
  }

  async verDetalle() {

    const modal = await this.modalCtrl.create({
     component: DetalleComponent,
     componentProps: {

     }
   });

    modal.present();

 }

}
