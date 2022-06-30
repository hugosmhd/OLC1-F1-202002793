import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Expression } from '../abstract/express';
import { tipoString, Type } from '../symbols/type';
import { Retorno } from '../abstract/retorno';
import { Singleton } from '../patron_singleton/singleton';
import { Issue } from '../error/issue';

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

    if(express == null) throw Singleton.getInstance().add_errores(new Issue("Semantico", `Error en la expresion toCharArray verifique la expresion`, this.line, this.column))
        
    if (express.type == Type.STRING) {
      const array: any = []
      for (let i = 0; i < express.value.length; i++) {
        array.push(express.value.charAt(i))
      }
      result = {
        value: array,
        type: Type.CHAR
      }        
    } else {
      throw Singleton.getInstance().add_errores(new Issue("Semantico", `La funcion toCharArray solo acepta cadenas`, this.line, this.column))
    }
    
    return result
  }
}
