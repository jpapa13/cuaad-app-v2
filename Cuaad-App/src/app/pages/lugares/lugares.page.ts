import { Component} from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { HorariosService } from 'src/app/services/horarios.service';
import { RequestService } from 'src/app/services/request.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage{
  
  e : any;
  edificio:any;
  vacio = {profesor:{ nombre:'Vacio', apellido: '...'}}
  constructor(private sHorarios: HorariosService,
              private request: RequestService) {}

  change(){
    this.sHorarios.getAulasEdificio(this.edificio);
  }

  drop(event: CdkDragDrop<string[]>) {
    console.log('evento: ', event);

    if (event.previousContainer === event.container) { //Intercambia la misma lista
      if(event.container.data == this.sHorarios.profesAsignados){ //Es en la primer lista
        const detalle_1 = this.sHorarios.profesAsignados[event.currentIndex].detalle_id
        const detalle_2 = this.sHorarios.profesAsignados[event.previousIndex].detalle_id
        console.log(detalle_1)//profesor Vacio
        console.log(detalle_2)
        if(detalle_1 == 'null'){
          console.log('Por vacio')
          const aula = this.sHorarios.aulasAsignadas[event.currentIndex] //aula
          console.log(aula)
          const edificioNombre = this.sHorarios.edificio.lista[this.edificio][1][0].edificio
          console.log(edificioNombre)
          this.request.asignarHorario(detalle_2, aula, edificioNombre).subscribe((Response: any) => {
            console.log(Response);
          });
        }else{
          this.request.intercambiarHorario(detalle_1,detalle_2).subscribe((Response: any) => {
            console.log(Response);
            this.sHorarios.profesAsignados[event.currentIndex].detalle_id = Response.data.detalle2.id;
            this.sHorarios.profesAsignados[event.previousIndex].detalle_id = Response.data.detalle1.id;
          });
          //console.log('No vacio')
        }
      }
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
        if (event.currentIndex != 0) { // NO Intercambia
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex
          );
         }else{ //Saca al profe
          console.log(event.container.data)
          console.log(this.sHorarios.profesAsignados)
          //console.log(event.previousContainer.data.profesor)
          transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex+1
          );
          
          //console.log(this.sHorarios.profesOtros[event.currentIndex+1])
          var body = {detalle_id:this.sHorarios.profesOtros[event.currentIndex+1].detalle_id}          
        }
        this.request.borrarHorario(body).subscribe((Response: any) => {
          console.log(Response.data.id);
          this.sHorarios.profesOtros[event.currentIndex+1].detalle_id = Response.data.id
        });
        this.sHorarios.profesAsignados.splice(event.previousIndex,0,this.vacio)
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
        //console.log(this.sHorarios.profesAsignados[event.currentIndex + 1])
        console.log(this.sHorarios.profesAsignados[event.currentIndex]) //elemento arrastrado
        const detalle_id = this.sHorarios.profesAsignados[event.currentIndex].detalle_id
        const aula = this.sHorarios.aulasAsignadas[event.currentIndex] //aula
        console.log(this.edificio)
        const edificioNombre = this.sHorarios.edificio.lista[this.edificio][1][0].edificio
        console.log(this.sHorarios.profesOtros[event.previousIndex])
        this.request.asignarHorario(detalle_id, aula, edificioNombre).subscribe((Response: any) => {
          console.log(Response);
          this.sHorarios.profesAsignados[event.currentIndex].detalle_id = Response.data.id
        });
        this.e = this.sHorarios.profesOtros[event.previousIndex];
        if(this.e.profesor.nombre == 'Vacio'){ //TODO: Definir letrero para aulas sin maestro
          this.sHorarios.profesOtros.splice(event.previousIndex,1)
        }else{
          var body = {detalle_id:this.e.detalle_id}
          this.request.borrarHorario(body).subscribe((Response: any) => {
            console.log(Response.data.id);
            this.sHorarios.profesOtros[event.previousIndex].detalle_id = Response.data.id;
          });
        }
      }
    }
  }
}