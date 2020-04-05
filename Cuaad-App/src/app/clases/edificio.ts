export class Edificio{
	lista = [];	
	aulasAARTE: Aula[];
	aulasAAUDI: Aula[];
	aulasACTEA: Aula[];
	aulasAMUSI: Aula[];
	aulasAPOSGR: Aula[];
	aulasATALLE: Aula[];
	aulasATECNO: Aula[];
	aulasAlaNorte: Aula[];
	aulasAlaPatio: Aula[];
	aulasAlaSur: Aula[];
	aulasOtroAHUEN: Aula[];
	aulasDefault: Aula[]; 

	constructor(private request: RequestService) {
	    this.aulasAARTE = new Array()
	    this.aulasAAUDI = new Array()
	    this.aulasACTEA = new Array()
	    this.aulasAMUSI = new Array()
	    this.aulasAPOSGR = new Array()
	    this.aulasATALLE = new Array()
	    this.aulasATECNO = new Array()
	    this.aulasAlaNorte = new Array()
	    this.aulasAlaPatio = new Array()
	    this.aulasAlaSur = new Array()
	    this.aulasOtroAHUEN = new Array()
	    this.aulasDefault = new Array()
		this.lista = new Array()
  	}

  	separarPorClases(aulas){ //Todos los horarios
	    console.log(aulas)
	    aulas.forEach(element => {
	      switch(element.clase){
	        case 'AARTE':
	          this.aulasAARTE.push(element)
	          break
	        case 'AAUDI':
	          this.aulasAAUDI.push(element)
	          break
	        case 'ACTEA':
	          this.aulasACTEA.push(element)
	          break
	        case 'AMUSI':
	          this.aulasAMUSI.push(element)
	          break
	        case 'APOSGR':
	          this.aulasAPOSGR.push(element)
	          break
	        case  'ATALLE':
	          this.aulasATALLE.push(element)
	          break
	        case 'ATECNO':
	          this.aulasATECNO.push(element)
	          break
	        case 'AlaNorte':
	          this.aulasAlaNorte.push(element)
	          break
	        case 'AlaPatio':
	          this.aulasAlaPatio.push(element)
	          break
	        case 'AlaSur':
	          this.aulasAlaSur.push(element)
	          break
	        case 'OtroAHUEN':
	          this.aulasOtroAHUEN.push(element)
	          break
	        default:
	          this.aulasDefault.push(element)
	      }
	    });
	    this.lista.push(['Artes',this.aulasAARTE])
	    this.lista.push(['Auditorio',this.aulasAAUDI])
	    this.lista.push(['Actea',this.aulasACTEA])
	    this.lista.push(['Música',this.aulasAMUSI])
	    this.lista.push(['Posgrados',this.aulasAPOSGR])
	    this.lista.push(['Talleres',this.aulasATALLE])
	    this.lista.push(['Tecnologias',this.aulasATECNO])
	    this.lista.push(['Ala norte',this.aulasAlaNorte])
	    this.lista.push(['Ala Patio',this.aulasAlaPatio])
	    this.lista.push(['Ala Sur',this.aulasAlaSur])
	    this.lista.push(['Otro',this.aulasOtroAHUEN])
	    this.lista.push(['Desconocido',this.aulasDefault])
	}

	buscarProfe(aula,edificio){
		let value = 'Vacio'
		this.lista[edificio][1].forEach(element => {
			if(element.nombre == aula){
				value  = element.profesor;
				return
			}
		});
		return value
	}

}