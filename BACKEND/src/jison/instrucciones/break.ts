import { Environment } from './../symbols/enviroment';
import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";

export class Break extends Instruccion {
  constructor(
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public getNodo() {
    var nodoDec = new nodo("break");
    return nodoDec;
}

  public executar(env: Environment): Break {    
    return this;
  }
}
