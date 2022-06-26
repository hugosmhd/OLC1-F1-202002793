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
    console.log("hola desde tochararray");   
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

    
    
    if (express.type == Type.STRING) {
      const array: any = []
      // console.log("---- *** TOCHARARRAY");
      // console.log(express);    
      for (let i = 0; i < express.value.length; i++) {
        // console.log(express.value.charAt(i));
        array.push(express.value.charAt(i))
      }
      // console.log("---- *** TOCHARARRAY");
      result = {
        value: array,
        type: Type.CHAR
      }        
  }
    
    return result
  }
}
