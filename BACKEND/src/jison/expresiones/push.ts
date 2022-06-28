import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Expression } from '../abstract/express';
import { Type } from '../symbols/type';
import { Retorno } from '../abstract/retorno';

export class Push extends Expression {
  constructor(
    public identificador: string,
    public expresion: Expression,
    line: number,
    column: number
  ) {
    super(line, column);    
  }

  public getNodo() {
    var nodoDec = new nodo("PUSH");
    nodoDec.agregarHijo(this.identificador)
    nodoDec.agregarHijo_nodo(this.expresion.getNodo())
    return nodoDec;
}

  public executar(env: Environment): Retorno {  

    let result = {
        value: false,
        type: Type.BOOLEAN
    };  

    const vector = env.get_array(this.identificador)
    const elem = this.expresion.executar(env);
    if (vector != null && elem.type == vector.type) {
        vector.value.push(elem.value)
        
        result = {
            value: true,
            type: Type.BOOLEAN
        }
    }
    
    return result
  }
}
