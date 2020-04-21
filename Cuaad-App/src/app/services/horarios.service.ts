import { Injectable } from '@angular/core';
import { RequestService } from 'src/app/services/request.service';
import { Aula } from '../clases/aula';
import { Edificio } from '../clases/edificio';
@Injectable({
	providedIn: 'root'
})
export class HorariosService {
	aulas: Aula[];
	edificio : Edificio; 		//para mostrar profes y horarios
	edificioTodos : Edificio;	//para todas las aulas
	profesOtros = [];
	profesAsignados = [];
	aulasAsignadas = [];
	aulasTodas = [];

	constructor(private request: RequestService) {
	    this.aulas = new Array()
	    this.profesAsignados = new Array()
	    this.aulasAsignadas = new Array()
	    this.aulasTodas = new Array()
	    this.edificio = new Edificio()
	    this.edificioTodos = new Edificio()
	    this.getAllHorarios()
	    this.getAllAulas()
	}

	getAllHorarios() {
		this.request.getHorarios()
		.subscribe((Response: any) => {
		  if (Response.status === true) {
		    Response.data.forEach(element => {
		    	let arraySplit = element.profesor.split(',');
		    	element.profesor = {
					apellido: arraySplit[0],
					nombre: arraySplit[1]
				}			
		      const aulat = new Aula() 
		      this.aulas.push(Object.assign(aulat, element));
		      aulat.setClase()
		    });
		    console.log('Respuesta satisfactoria aulas');
		    this.aulas.sort(this.compareClase)
		    console.log(this.aulas)
		    this.edificio.separarPorClases(this.aulas)
		    console.log(this.aulas);
		    this.getProfesOtros()
		  } else {
		    console.log('Error:');
		    console.log(Response);
		  }
		});
	}
	getAllAulas() {
		this.request.getAulas()
		.subscribe((Response: any) => {
		  if (Response.status === true) {
		    Response.data.forEach(element => {
		      const aulat = new Aula() 
		      this.aulasTodas.push(Object.assign(aulat, element));
		      aulat.setClase()
		    });
		    console.log('Respuesta satisfactoria aulas Todas');
		    console.log(Response.data);
		    this.aulasTodas.sort(this.compareClase)
		    this.edificioTodos.separarPorClases(this.aulasTodas)
		    console.log(this.aulasTodas);
		  } else {
		    console.log('Error:');
		    console.log(Response);
		  }
		});
	}
	compareClase(a:Aula, b:Aula) {
		if ( a.clase < b.clase ){
		  return -1;
		}
		else if (a.clase > b.clase) {
			return 1;
		} else {
			if (a.edificio == 'APOSGR') {
				return a.nombre - b.nombre
			} else {
				if (a.nombre < b.nombre)
					return -1;
				else if (a.nombre > b.nombre)
					return 1
			}
		}
		return 0;
	}

	
  	getProfesOtros(){
	  	this.profesOtros = new Array;
	  	this.profesOtros.push({profesor: {nombre:'Sacar profe',
	  										apellido:'↓'}})
	  	this.edificio.aulasOtroAHUEN.forEach(element=> {
	  		this.profesOtros.push(element)
	  	});
  	}
/*
	getAulasEdificio(i){
		this.profesAsignados = new Array;
		this.aulasAsignadas = new Array;
		this.edificio.lista[i][1].forEach(element => {
			this.profesAsignados.push(element.profesor)
			this.aulasAsignadas.push(element.nombre)
		});
	}*/
	getAulasEdificio(i){
		this.profesAsignados = new Array;
		this.aulasAsignadas = new Array;
		this.edificioTodos.lista[i][1].forEach(element => {
			this.profesAsignados.push(this.edificio.buscarProfe(element.nombre,i))
			this.aulasAsignadas.push(element.nombre)
		});
	}

	
}