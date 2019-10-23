import { Component, OnInit } from '@angular/core';
import { RequestService } from '../../services/request.service';
import { Observable } from 'rxjs';
import { Componente } from '../../interfaces/interfaces';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentes: Observable<Componente[]>;

  constructor( private dataService: RequestService ) { }

  ngOnInit() {
    this.componentes = this.dataService.getMnuOpts();
  }

}
