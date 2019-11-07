import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Galeria } from '../../clases/galeria';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.page.html',
  styleUrls: ['./eventos.page.scss'],
})

export class EventosPage{
	
  public galeriaHuenti: Galeria;
  public galeriaMusica: Galeria;
  public galeriaArtes: Galeria;
  public galeria: Galeria;
  public galeria2: Galeria;
  constructor(private request: RequestService) {

			  this.galeriaHuenti = new Galeria ( 'Huentitan', 'imagen' ); 
			  this.galeriaMusica = new Galeria ( 'Musica', 'imagen' );
			  this.galeriaArtes = new Galeria ( 'Artes', 'imagen' );
			  this.galeria = new Galeria('Todos', 'imagen');
			  this.getAllBanners();
	  }

  getAllBanners() {
    this.request.getEventoBanners(this.galeriaHuenti)
    .subscribe((Response: any) => {
      console.log(Response);
      if (Response.status === true) {
        console.log("Respuesta satisfactoria Huentitan");
        this.galeriaHuenti.archivo = Response.data;
		this.galeria.archivo = this.galeria.archivo.concat(this.galeriaHuenti.archivo);
        console.log(this.galeriaHuenti.archivo);
      } else {
        console.log("Error:");
        console.log(Response);
      }
    });
	
	this.request.getEventoBanners(this.galeriaMusica)
    .subscribe((Response: any) => {
      console.log(Response);
      if (Response.status === true) {
        console.log("Respuesta satisfactoria Música");
        this.galeriaMusica.archivo = Response.data;
        console.log(this.galeriaMusica.archivo);
		this.galeria.archivo = this.galeria.archivo.concat(this.galeriaMusica.archivo);
      } else {
        console.log("Error:");
        console.log(Response);
      }
    });
	
	this.request.getEventoBanners(this.galeriaArtes)
    .subscribe((Response: any) => {
      console.log(Response);
      if (Response.status === true) {
        console.log("Respuesta satisfactoria Artes");
        this.galeriaArtes.archivo = Response.data;
		this.galeria.archivo = this.galeria.archivo.concat(this.galeriaArtes.archivo);
        console.log(this.galeriaArtes.archivo);
      } else {
        console.log("Error:");
        console.log(Response);
      }
    });	
  }

}
