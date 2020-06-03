import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Area } from '../clases/area';
import { Persona } from '../clases/persona';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class DirectorioService {
	cuaad : Area;
  constructor(private request: RequestService,
  			  private toastController: ToastController) { 
  	this.cuaad = new Area("cuaad");
  	this.getDirectorio();
  }

  async presentToast(messg) {
    const toast = await this.toastController.create({
      message: messg,
      duration: 2000
    });
    toast.present();
  }

  getDirectorio(){
  	this.request.getDirectorio()
		.subscribe((Response: any) => {
			console.log(Response);
			if (Response.status === true) 
			{
				this.getArea(Response.data.CUAAD,this.cuaad);
				console.log(this.cuaad);
			}
		},(error)=>{
        console.log('Error:');
          console.log(Response);
          console.log(error.error.data);
          this.presentToast(error.error.data);
      });
  }
  getArea(parent, area:Area){
  	personaTemp: Persona;
  	areaTemp : Area;
  	parent.personal.forEach(persona => { 
  		this.personaTemp = new Persona(persona.nombre, persona.puesto);
  		area.personal.push(this.personaTemp);
  	});
  	if(parent.hoja !== null){
  		Object.keys(parent.hoja).forEach(function(key) {
  			this.areaTemp = new Area(key);
	  		area.areas.push(this.areaTemp);
	  		this.getArea(parent.hoja[key],this.areaTemp);		  	
		},this); 
  	}else{
  		return;
  	}
  }
}
