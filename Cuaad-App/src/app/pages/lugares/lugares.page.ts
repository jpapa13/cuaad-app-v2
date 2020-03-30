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
    this.listaUno = ['A - 1', 'A - 2', 'A - 3', 'A - 4', 'A - 5', 'Vacio'];
    this.listaDos = ['Sacar profe','B - 1', 'B - 2', 'B - 3', 'B - 4', 'B - 5'];
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
      if (event.currentIndex < event.previousIndex) { //de abajo pa para arriba
         if(event.previousContainer.data == this.listaDos && event.currentIndex == 0){//Saca al profe en segunda lista
          moveItemInArray(
            event.container.data,
            event.currentIndex - 1,
            event.previousIndex+1
          );
          console.log('NUEVA REGLA')
        }else{
          moveItemInArray(
            event.container.data,
            event.currentIndex + 1,
            event.previousIndex
          );
          console.log('ELSE')
        }
      } else if (event.currentIndex > event.previousIndex) { //arriba pa abajo
        moveItemInArray(
          event.container.data,
          event.currentIndex - 1,
          event.previousIndex
        );
      }
    } else { //intercambia con otra lista 

     

      
      if (event.previousContainer.data == this.listaUno) { //Del primero al segundo
        console.log('primero')
        if (event.currentIndex != 0) { //Intercambia
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex
          );

          transferArrayItem(event.container.data,
            event.previousContainer.data,
            event.currentIndex + 1,
            event.previousIndex
          );
        }else{ //Saca al profe
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex+1
          );
          this.listaUno.splice(event.previousIndex,0,'Vacio')
        }
      }else{ // del segundo al primero
        console.log('segundo')

        transferArrayItem(event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex
        );

        transferArrayItem(event.container.data,
          event.previousContainer.data,
          event.currentIndex + 1,
          event.previousIndex
        );

        console.log(this.listaDos[event.previousIndex])
        this.e = this.listaDos[event.previousIndex];
        if(this.e == '?' ||
            this.e == ''||
            this.e == undefined||
            this.e == null||
            this.e == 'Vacio'||
            this.e == ' '){ //TODO: Definir letrero para aulas sin maestro
          this.listaDos.splice(event.previousIndex,1)
        }
      }
    }



  }
}
