import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginUser =
  { 
    usuario: 'Admin',
    contrasena: '1234'
  };

  constructor(private requestService:RequestService,
              private navCtrl :NavController) { }

  ngOnInit() {
  }

  async login( fLogin: NgForm ){

    if(fLogin.invalid) { return;}
    else{
      
      this.navCtrl.navigateRoot('/inicio')

    }
    
    this.requestService.postLogin( this.loginUser.usuario, this.loginUser.contrasena );



   }
    
  }

