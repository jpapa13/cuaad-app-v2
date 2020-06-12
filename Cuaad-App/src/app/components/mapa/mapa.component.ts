import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Geolocation, Geoposition } from '@ionic-native/geolocation/ngx';
import { Platform, ModalController } from '@ionic/angular';


declare var google;

interface Marker {
  position: {
    lat: number,
    lng: number,
  };
  title: string;
}

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styleUrls: ['./mapa.component.scss'],
})
export class MapaComponent implements OnInit {

  map = null;
  
  constructor(private geolocation: Geolocation, private ptl: Platform, private modalCtrl: ModalController) {
  }
  
/*    ionViewDidLoad(){
     this.ptl.ready().then(() =>{
       let mapOptions = {
         zoom: 13,
         mapTypeId: google.maps.MapTypeId.ROADMAP,
         mapTypeControl: false,
         StreetViewControl: false,
         fullscreenControl: false
       };

       this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

       this.geolocation.getCurrentPosition().then(pos =>{
         let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
         this.map.setCenter(latLng);
         this.map.setZoom(15);
       })
     });
   } */


   loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement = document.getElementById('map');
    // create LatLng object
    const myLatLng = {lat: 20.7405955, lng: -103.3121661};
    // create map
    this.map = new google.maps.Map(mapEle, {
     center: myLatLng,
     zoom: 15
    });
  
    google.maps.event.addListenerOnce(this.map, 'idle', () => {
     /*  this.renderMarkers(); */
      mapEle.classList.add('show-map');
      const marker = {
        position: {
          lat: 20.7405955,
          lng: -103.3121661
        },
        title:  'Donde Esta'
      };
      this.addMarker(marker);

    });
   
 /*    this.geolocation.getCurrentPosition().then(pos =>{
      let latLng = new google.maps.LatLng(pos.coords.latitude, pos.coords.longitude);
      this.map.setCenter(latLng);
      this.map.setZoom(15);
    }) */
  }

  addMarker(marker: Marker) {
    return new google.maps.Marker({
      position: marker.position,
      map: this.map,
      title: marker.title
    });
  }



  ngOnInit() {
    this.loadMap();
  }

  async regresar(){
    
    await this.modalCtrl.dismiss();

  }
}
