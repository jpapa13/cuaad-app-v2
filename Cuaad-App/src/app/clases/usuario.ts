export class Usuario {
        public nombre;
        public token;
        public tipo;
        public usuario;
        public pass;

    constructor(usuario, pass) {
        this.usuario = usuario;
        this.pass = pass;
    }
    constructor(){}
}