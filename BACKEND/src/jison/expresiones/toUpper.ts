import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Expression } from '../abstract/express';
import { tipoString, Type } from '../symbols/type';
import { Retorno } from '../abstract/retorno';

export class ToUpper extends Expression {
  constructor(
    public expresion: Expression,
    line: number,
    column: number
  ) {
    super(line, column); 
  }

  public getNodo() {
    var nodoDec = new nodo("TOUPPER");
    nodoDec.agregarHijo_nodo(this.expresion.getNodo())
    return nodoDec;
}

  public executar(env: Environment): Retorno {
    let result = {
        value: null,
        type: Type.error
    };  

    var express = this.expresion.executar(env)

    
    
    if (express.type == Type.STRING) {      
      result = {
        value: express.value.toUpperCase(),
        type: Type.STRING
      }        
  }
    
    return result
  }
}
