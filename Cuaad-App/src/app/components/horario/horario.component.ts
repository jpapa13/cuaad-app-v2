import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import {Aula} from '../../clases/aula';
@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
})
export class HorarioComponent implements OnInit {
  aulas: Aula[];
  aulasAARTE: Aula[];
  aulasAAUDI: Aula[];
  aulasACTEA: Aula[];
  aulasAMUSI: Aula[];
  aulasAPOSGR: Aula[];
  aulasATALLE: Aula[];
  aulasATECNO: Aula[];
  aulasAlaNorte: Aula[];
  aulasAlaPatio: Aula[];
  aulasAlaSur: Aula[];
  aulasOtroAHUEN: Aula[];
  aulasDefault: Aula[]; 
  edificios = [];
  claseActual:any;

  fondoCard = '-Fondo-card';
  numAula = '-Num-aula';
  fondoMaestro = '-ion-item';
  letraMaestro = '-letra-label';

  constructor(private request: RequestService) {
    this.aulas = new Array()
    this.aulasAARTE = new Array()
    this.aulasAAUDI = new Array()
    this.aulasACTEA = new Array()
    this.aulasAMUSI = new Array()
    this.aulasAPOSGR = new Array()
    this.aulasATALLE = new Array()
    this.aulasATECNO = new Array()
    this.aulasAlaNorte = new Array()
    this.aulasAlaPatio = new Array()
    this.aulasAlaSur = new Array()
    this.aulasOtroAHUEN = new Array()
    this.aulasDefault = new Array()
    this.edificios = new Array()
    this.claseActual = 'CUAAD'
  }

  compareClase(a:Aula, b:Aula) {
    if ( a.clase < b.clase ){
      return -1;
    }
    else if ( a.clase > b.clase ){
      return 1;
    }else{
      if(a.edificio =='APOSGR'){
        return a.nombre - b.nombre
      }else{
        if(a.nombre < b.nombre)
          return -1;
        else if(a.nombre > b.nombre)
          return 1
      }
    }
    return 0;
  }

  getAllAulas() {
    this.request.getAulas()
    .subscribe((Response: any) => {
      if (Response.status === true) {
        Response.data.forEach(element => {
          const aulat = new Aula() 
          this.aulas.push(Object.assign(aulat, element));
          aulat.setClase()
        });
        console.log('Respuesta satisfactoria aulas');
        this.aulas.sort(this.compareClase)
        this.separarPorClases()
        console.log(this.aulas);
      } else {
        console.log('Error:');
        console.log(Response);
      }
    });
  }

  nuevaClase(clase){
    if(this.claseActual == clase){
      return false
    }
    this.claseActual = clase
    console.log(clase)
    return true
  }

  separarPorClases(){
    this.aulas.forEach(element => {
      switch(element.clase){
        case 'AARTE':
          this.aulasAARTE.push(element)
          break
        case 'AAUDI':
          this.aulasAAUDI.push(element)
          break
        case 'ACTEA':
          this.aulasACTEA.push(element)
          break
        case 'AMUSI':
          this.aulasAMUSI.push(element)
          break
        case 'APOSGR':
          this.aulasAPOSGR.push(element)
          break
        case  'ATALLE':
          this.aulasATALLE.push(element)
          break
        case 'ATECNO':
          this.aulasATECNO.push(element)
          break
        case 'AlaNorte':
          this.aulasAlaNorte.push(element)
          break
        case 'AlaPatio':
          this.aulasAlaPatio.push(element)
          break
        case 'AlaSur':
          this.aulasAlaSur.push(element)
          break
        case 'OtroAHUEN':
          this.aulasOtroAHUEN.push(element)
          break
        default:
          this.aulasDefault.push(element)
      }
    });
    this.edificios.push(['Artes',this.aulasAARTE])
    this.edificios.push(['Auditorio',this.aulasAAUDI])
    this.edificios.push(['Actea',this.aulasACTEA])
    this.edificios.push(['Música',this.aulasAMUSI])
    this.edificios.push(['Posgrados',this.aulasAPOSGR])
    this.edificios.push(['Talleres',this.aulasATALLE])
    this.edificios.push(['Tecnologias',this.aulasATECNO])
    this.edificios.push(['Ala norte',this.aulasAlaNorte])
    this.edificios.push(['Ala Patio',this.aulasAlaPatio])
    this.edificios.push(['Ala Sur',this.aulasAlaSur])
    this.edificios.push(['Otro',this.aulasOtroAHUEN])
    this.edificios.push(['Desconocido',this.aulasDefault])
    console.log(this.aulasAARTE)
    console.log(this.aulasAAUDI)
  }

  ngOnInit(){
    this.getAllAulas()
    console.log('llamando')
  };
}
