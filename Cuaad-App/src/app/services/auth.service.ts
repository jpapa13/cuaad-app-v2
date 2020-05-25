import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  log: any;

  constructor(private request: RequestService,
 			  private https: HttpClient,
  			  public storage: Storage) {
  	this.log = false;
  	storage.clear();
  }

  login(usuario: string, contraseña: string){
    const path = this.request.url + 'LoginCtrl/ingresar/';
    const data = {usuario, contraseña};
    return this.https.post(path, data);
  }

  public isLogged(){
  	return this.log;
  }

  public logIn(){
  	this.log = true;
  }
  logOut(){

  }
}
