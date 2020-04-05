import { Component} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HorariosService } from 'src/app/services/horarios.service'
@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage{
  
  e : any;
  edificio:any;
  constructor(private sHorarios: HorariosService) {
  }

  change(){
    this.sHorarios.getAulasEdificio(this.edificio);
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
         if(event.previousContainer.data == this.sHorarios.profesOtros && event.currentIndex == 0){//Saca al profe en segunda lista
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
      if (event.previousContainer.data == this.sHorarios.profesAsignados) { //Del primero al segundo
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
          this.sHorarios.profesAsignados.splice(event.previousIndex,0,'Vacio')
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

        console.log(this.sHorarios.profesOtros[event.previousIndex])
        this.e = this.sHorarios.profesOtros[event.previousIndex];
        if(this.e == '?' ||
            this.e == ''||
            this.e == undefined||
            this.e == null||
            this.e == 'Vacio'||
            this.e == ' '){ //TODO: Definir letrero para aulas sin maestro
          this.sHorarios.profesOtros.splice(event.previousIndex,1)
        }
      }
    }
  }
}