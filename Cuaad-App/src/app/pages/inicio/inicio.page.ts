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

          this.archivo = [];
          this.galeriaHuenti = new Galeria ( 'Huentitan', 'imagen' );

          this.http.post(this.url + 'componentes/lugares/galeria', this.galeriaHuenti, {}).then((Response) => {
            this.archivo = Response.data;
            console.log(Response);
            if (Response.data.status) {

              this.galeriaHuenti.archivo = Response.data;

            } else {
              console.log(Response.data);

            }

          });
  }



}
