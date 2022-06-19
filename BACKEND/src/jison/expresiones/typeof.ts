import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Expression } from '../abstract/express';
import { tipoString } from '../symbols/type';
import { Retorno } from '../abstract/retorno';

export class Typeof extends Expression {
  constructor(
    public expresion: Expression,
    line: number,
    column: number
  ) {
    super(line, column);
    console.log("hola desde typeof");
    
  }

  public getNodo() {
    var nodoDec = new nodo("TYPEOF");
    nodoDec.agregarHijo_nodo(this.expresion.getNodo())
    // nodoDec.agregarHijo(this.tipo + "");
    // nodoDec.agregarHijo(this.nombre[0]);
    // nodoDec.agregarHijo2(this.expresion.getNodo());
    return nodoDec;
}

  public executar(env: Environment): Retorno {    
    // console.log("ejecutando el break");
    var valor = this.expresion.executar(env)
    console.log("DESDE TYPEOF");
    console.log(valor);    
    console.log("DESDE TYPEOF");
    
    return {
      value: tipoString(valor.type),
      type: valor.type
    };
  }
}
