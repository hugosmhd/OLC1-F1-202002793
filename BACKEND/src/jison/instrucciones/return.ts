import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";

export class Return extends Instruccion {
  constructor(
    public express: Expression | null,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public getNodo() {
    var nodoDec = new nodo("return");
    if (this.express != null) {
      nodoDec.agregarHijo_nodo(this.express.getNodo())
    }
    return nodoDec;
}

  public executar(env: Environment): Return {    
    // if (this.express != null) {
    //     return this.express.executar(env);        
    // }
    return this;
  }
}
