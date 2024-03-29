import { Environment } from './../symbols/enviroment';
import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";

export class Continue extends Instruccion {
  constructor(
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public getNodo() {
    var nodoDec = new nodo("continue");
    return nodoDec;
}

  public executar(env: Environment): Continue {    
    return this;
  }
}
