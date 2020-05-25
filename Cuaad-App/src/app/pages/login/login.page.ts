import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { NgForm } from '@angular/forms';
import { NavController, ToastController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { Usuario } from '../../clases/usuario';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  usuario : Usuario;
  constructor(private requestService:RequestService,
              private navCtrl :NavController,
              public storage: Storage,
              public toastController: ToastController,
              public auth: AuthService) 
  {  
    this.usuario = new Usuario();
  }

  async presentToast(messg) {
    const toast = await this.toastController.create({
      message: messg,
      duration: 2000
    });
    toast.present();
  }

  async login( fLogin: NgForm ){
    if(fLogin.invalid) { 
          return;
    }else{   
      this.requestService.login( this.usuario.usuario, this.usuario.pass ).subscribe((Response: any) => {
        if (Response.status === true) {      
            //this.storage.set('token', Response.data.token);  
            //this.storage.set('token_exp', Response.data.token_expiracion); 
            this.storage.set('nombre', Response.data.nombre); 
            this.storage.set('role', Response.data.role); 
            this.navCtrl.navigateRoot('/inicio')
            this.auth.logIn();
            console.log(this.auth.log)
        }
      },(error)=>{
        console.log('Error:');
          console.log(Response);
          console.log(error.error.data);
          this.presentToast(error.error.data);
      });
    }

   }
   
  }

