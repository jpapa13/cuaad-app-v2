import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Componente } from '../interfaces/interfaces';
import { Galeria } from '../clases/galeria';


@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public option: any;
  private URL = environment.url;
  public  url = 'http://localhost/Cuaad-App/cuaad-app-v2/BaseBackend/index.php/';


  constructor( private https: HttpClient ) {
    this.option = {
      headers: new HttpHeaders({
        ' content_Type ': 'BaseBackend/applicaction/json',
        ' Authorization ': 'Bearer' + localStorage.getItem(' session_token ')
      })
    };
  }
      getMnuOpts() {
        return this.https.get<Componente[]>('/assets/data/menu.json');
      }


      getAllBanners(galeriaHuenti: Galeria) {

          const path =  this.url + 'componentes/lugares/galeria';
          return this.https.post(path, galeriaHuenti, {} );

      }

}

