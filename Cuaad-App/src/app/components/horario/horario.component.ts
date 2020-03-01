import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.component.html',
  styleUrls: ['./horario.component.scss'],
})
export class HorarioComponent implements OnInit {


/*   clase = {
    nombre: 'Posgrados',
    nombre2: 'AlaNorte'
  }; */

  css = 'Posgrados';

  clase = [
    'Posgrados', 'AlaNorte'
  ];

  fondoCard = '-Fondo-card';
  numAula = '-Num-aula';
  fondoMaestro = '-ion-item';
  letraMaestro = '-letra-label';
/*   fondo: object = {
    switch(fondo = true ) {
      case value:

        break;

      default:  
        break;
    };
  }
 */
constructor() {

   }


}
