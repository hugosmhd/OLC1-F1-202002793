import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Expression } from '../abstract/express';
import { tipoString, Type } from '../symbols/type';
import { Retorno } from '../abstract/retorno';

export class Round extends Expression {
  constructor(
    public expresion: Expression,
    line: number,
    column: number
  ) {
    super(line, column); 
  }

  public getNodo() {
    var nodoDec = new nodo("ROUND");
    nodoDec.agregarHijo_nodo(this.expresion.getNodo())
    return nodoDec;
}

  public executar(env: Environment): Retorno {

    let result = {
        value: 0,
        type: Type.error
    };  

    var express = this.expresion.executar(env)

    if (express.type == Type.DOUBLE) {      
      result = {
        value: Math.round(express.value),
        type: Type.INT
      }        
  }
    
    return result
  }
}
