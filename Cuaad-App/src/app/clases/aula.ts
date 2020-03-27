export class Aula {
    public nombre
    public profesor
    public edificio
    public clase
    constructor(){
        this.edificio = ''
        //this.setClase()
    }
    public setClase(){
        switch(this.edificio){
            case 'AHUEN':
                if(this.nombre <= '0055C'){ 
                    this.clase = 'AlaNorte'
                }else if(this.nombre <= '0063'){
                    this.clase = 'AlaPatio'
                }else if(this.nombre <= '0084' ){
                    this.clase = 'AlaSur'
                }else{
                    this.clase = 'OtroAHUEN'
                }
                break
            default:
                this.clase = this.edificio
                break
        }
    }
    compareEdificio( b:Aula ) {
        if ( this.edificio < b.edificio ){
          return -1;
        }
        if ( this.edificio > b.edificio ){
          return 1;
        }
        return 0;
      }
}
