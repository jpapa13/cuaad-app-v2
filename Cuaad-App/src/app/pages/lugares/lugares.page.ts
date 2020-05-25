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
  
  constructor() {}
}