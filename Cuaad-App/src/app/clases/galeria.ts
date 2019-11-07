
    export class Galeria {

        public sede;
        public tipo;
        public archivo: Array<any>;

    constructor(sede, tipo) {
        this.sede = sede;
        this.tipo = tipo;
		this.archivo = [];
    }
}
