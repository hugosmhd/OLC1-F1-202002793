import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Type } from '../symbols/type';
import { Instruccion } from '../abstract/instruccion';
import { Singleton } from '../patron_singleton/singleton';
import { Issue } from '../error/issue';

export class Pop extends Instruccion {
  constructor(
    public identificador: string,
    line: number,
    column: number
  ) {
    super(line, column);    
  }

  public getNodo() {
    var nodoDec = new nodo("POP");
    nodoDec.agregarHijo(this.identificador)
    return nodoDec;
}

  public executar(env: Environment) {  
    const vector = env.get_array(this.identificador)
    if(vector == null || vector == undefined) throw Singleton.getInstance().add_errores(new Issue("Semantico", `Error en la expresion pop no existe el vector con id ${this.identificador}`, this.line, this.column))
    
    vector.value.pop()
  }
}
