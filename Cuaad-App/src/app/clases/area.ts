import { Persona } from 'src/app/clases/persona';
export class Area {
        public areas : Area[];
        public nombre;
        public personal : Persona[];

    constructor(nombre){
    	this.nombre = nombre;
    	this.areas = new Array();
    	this.personal = new Array();
    }
}