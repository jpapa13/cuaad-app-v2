import { Component, OnInit } from '@angular/core';
//import { aulasService} from 'src/app/services/aulas.service'
import { HorariosService } from 'src/app/services/horarios.service'
@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
})
export class HorarioComponent implements OnInit {


  //claseActual:any;
  fondoCard = '-Fondo-card';
  numAula = '-Num-aula';
  fondoMaestro = '-ion-item';
  letraMaestro = '-letra-label';

constructor(private sHorarios: HorariosService){
}

 /* nuevaClase(clase){
    if(this.claseActual == clase){
      return false
    }
    this.claseActual = clase
    console.log(clase)
    return true
  }*/

  ngOnInit(){
    this.sHorarios.getAllAulas()
    console.log('llamando')
  };
}
