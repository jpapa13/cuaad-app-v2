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
  public  url = 'http://localhost/cuaad-app-v2/BaseBackend/index.php/';


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

      getBanners(galeria: Galeria) {
          const path =  this.url + 'componentes/lugares/galeria';
          return this.https.post(path, galeria, {} );
      }

      getEventoBanners(galeria: Galeria){
          const path =  this.url + 'componentes/eventos/banners';
          return this.https.post(path, galeria, {} );
      }
      getHorarios(){
        const path =  this.url + 'componentes/horarios';
        return this.https.get(path);
      }
      borrarHorario(detalle_id: any){
        const path =  this.url + 'componentes/horarios/borrar';
        return this.https.post(path, detalle_id,{});
      } 
      asignarHorario(detalle_id, aula, edificio){ //
        const path =  this.url + 'componentes/horarios/asignar';
        return this.https.post(path, {'detalle_id':detalle_id, 'aula': aula, 'edificio': edificio},{});
      }
      intercambiarHorario(detalle_1, detalle_2){
        const path =  this.url + 'componentes/horarios/intercambiar';
        return this.https.post(path, {'detalle_1':detalle_1,'detalle_2':detalle_2},{});
      } 
      getAulas(){
          const path =  this.url + 'componentes/aulas';
          return this.https.get(path);
      }

      postLogin(usuario: string, contraseña: string){
        
        const path = this.url + 'LoginCtrl/ingresar/';
    
        const data= {usuario, contraseña}


        this.https.post(`${path}`, data).subscribe(resp =>{
          console.log(resp);
        });

      
      }



      }

    

