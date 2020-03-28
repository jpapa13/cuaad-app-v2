import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  listaUno: any[];
  listaDos: any[];
  espacio: any;
  e : any;
  constructor() {
    this.listaUno = ['A - 1', 'A - 2', 'A - 3', 'A - 4', 'A - 5', ''];
    this.listaDos = ['B - 1', 'B - 2', 'B - 3', 'B - 4', 'B - 5'];
    this.espacio = '';
  }

  ngOnInit() {
  }


  drop(event: CdkDragDrop<string[]>) {
    console.log('evento: ', event);



    if (event.previousContainer === event.container) { //Intercambia la misma lista
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      if (event.currentIndex < event.previousIndex) { //de arriba para abajo
        moveItemInArray(
          event.container.data,
          event.currentIndex + 1,
          event.previousIndex
        );
      } else if (event.currentIndex > event.previousIndex) { //abajo pa arriba
        moveItemInArray(
          event.container.data,
          event.currentIndex - 1,
          event.previousIndex
        );
      }
    } else { //intercambia con otra lista 

      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);

      transferArrayItem(event.container.data,
        event.previousContainer.data,
        event.currentIndex + 1,
        event.previousIndex
      );
      if (event.previousContainer.data == this.listaUno) { //Del primero al segundo
        console.log('primero')
      }else{ // del segundo al primero
        console.log('segundo')
        console.log(this.listaDos[event.previousIndex])
        this.e = this.listaDos[event.previousIndex];
        if(this.e == '?' ||
            this.e == ''||
            this.e == undefined||
            this.e == null||
            this.e == ' '){ //TODO: Definir letrero para aulas sin maestro
          this.listaDos.splice(event.previousIndex,1)
        }
      }
    }



    /*for (let i = 0; i < this.listaDos.length; i++) {
      if (this.listaDos[i] === this.espacio) {
        this.listaDos.splice(i, 1);
      }

    }*/

    /*for (let vacio = 0; vacio < this.listaUno.length; vacio++){
      if (this.listaUno[vacio] === this.espacio) {
        this.listaUno.splice(this.listaDos[vacio], 1 , this.listaUno.toString[vacio]);
      }
    }*/
  }
}






