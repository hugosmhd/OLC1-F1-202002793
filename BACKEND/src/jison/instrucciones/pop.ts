import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Type } from '../symbols/type';
import { Instruccion } from '../abstract/instruccion';

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
    if (vector != null) {
        vector.value.pop()
    }
  }
}
