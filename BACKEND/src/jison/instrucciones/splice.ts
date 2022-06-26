import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Type } from '../symbols/type';
import { Instruccion } from '../abstract/instruccion';
import { Expression } from '../abstract/express';

export class Splice extends Instruccion {
  constructor(
    public identificador: string,
    public index: Expression,
    public expresion: Expression,
    line: number,
    column: number
  ) {
    super(line, column);    
  }

  public getNodo() {
    var nodoDec = new nodo("SPLICE");
    // nodoDec.agregarHijo_nodo(this.expresion.getNodo())
    return nodoDec;
}

  public executar(env: Environment) {  
    const vector = env.get_array(this.identificador)
    const ind = this.index.executar(env)
    const expres = this.expresion.executar(env)
    if (vector != null && expres != null && ind != null) {
        vector.value.splice(ind.value, 0, expres.value)
    }
  }
}
