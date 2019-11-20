    export class Evento {
        public id
        public titulo
        public descripcion
        public inicio
        public fin
        public ruta
        public nombre
        public lugar_fk
    constructor(id, titulo, descripcion, inicio, fin, ruta, nombre, lugar_fk) {
        this.id = id
        this.titulo = titulo
        this.descripcion = descripcion
        this.inicio = inicio
        this.fin = fin
        this.ruta = ruta
        this.nombre = nombre
        this.lugar_fk = lugar_fk
    }
}
