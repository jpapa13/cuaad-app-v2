import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Observable } from 'rxjs';
import { HTTP } from '@ionic-native/http/ngx';
import { Componente } from '../interfaces/interfaces';



@Injectable({
  providedIn: 'root'
})
export class RequestService {
  public option: any;
  public URL = environment.url;

  constructor( private http: HTTP,
               private https: HttpClient ) {
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
}

