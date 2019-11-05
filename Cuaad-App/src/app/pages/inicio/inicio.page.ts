import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Galeria } from '../../clases/galeria';
import { HTTP } from '@ionic-native/http/ngx';



@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage {

 public archivo: any [];
 public galeriaHuenti: Galeria;
 public  url = 'http://localhost/Cuaad-App/cuaad-app-v2/BaseBackend/index.php/';

  constructor( private request: RequestService,
               private http: HTTP ) {

              this.getAllBanners();
  }
  getAllBanners() {
    this.galeriaHuenti = new Galeria ( 'Huentitan', 'imagen' );
    this.request.getAllBanners(this.galeriaHuenti)
    .subscribe((Response: any) => {
      console.log(Response);

      if (Response.status === true) {
        console.log("Respuesta satisfactoria");
        this.galeriaHuenti.archivo = Response.data;
        console.log(this.galeriaHuenti.archivo);

      } else {
        console.log("Error:");
        console.log(Response);
      }

    });
  }




}
