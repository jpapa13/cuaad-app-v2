import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { MapaComponent } from 'src/app/components/mapa/mapa.component';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';

declare var window: any;

@Component({
  selector: 'app-eventos-admin',
  templateUrl: './eventos-admin.page.html',
  styleUrls: ['./eventos-admin.page.scss'],
})
export class EventosAdminPage implements OnInit {

  fechaIni: Date = new Date();
  fechaFin: Date = new Date();
  customPickerOptions;
  customDate;

  tempImages: string[] = [];

  constructor(private modalCtrl: ModalController, private camera: Camera) { }

  ngOnInit() {

    this.customPickerOptions = {
      buttons: [{
        text: 'Hecho',
        handler: (evento) =>{
          console.log(evento);
        }
      }, {
        text: 'Cancelar',
        handler: () => {
        }
      }]
    };
  }

  
  
  cambioFecha( event ){
    console.log('ionChange', event);
    console.log('Date', new Date(event.detail.value));
    
    
  }

  cambioFechaFin( event ){
    console.log('ionChange', event);
    console.log('Date', new Date(event.detail.value));
    
    
  }
  
  async onClick(){
  

      const modal = await this.modalCtrl.create({
       component: MapaComponent,
       componentProps: {
 
         swipeToClose: true,
       },
     });
 
      modal.present();
 
   
  }

  libreria(){
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      correctOrientation: true,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
    
    this.camera.getPicture(options).then((imageData) => {
     // imageData is either a base64 encoded string or a file URI
     // If it's base64 (DATA_URL):
      const img = window.Ionic.WebView.convertFileSrc(imageData);
      this.tempImages.push(img);
    }, (err) => {
     // Handle error
    });
  }

}
