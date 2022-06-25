import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Expression } from '../abstract/express';
import { tipoString, Type } from '../symbols/type';
import { Retorno } from '../abstract/retorno';

export class ToCharArray extends Expression {
  constructor(
    public expresion: Expression,
    line: number,
    column: number
  ) {
    super(line, column);    
  }

  public getNodo() {
    var nodoDec = new nodo("TOCHARARRAY");
    nodoDec.agregarHijo_nodo(this.expresion.getNodo())
    return nodoDec;
}

  public executar(env: Environment): Retorno {  

    let result = {
        value: null,
        type: Type.error
    };  

    var express = this.expresion.executar(env)

    console.log("---- *** TOCHARARRAY");
    console.log(express);    
    console.log("---- *** TOCHARARRAY");
    

    if (express.type == Type.STRING) {
        result = {
            value: express.value.length,
            type: Type.INT
        }        
    }
    
    return result
  }
}
