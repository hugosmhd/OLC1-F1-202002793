import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Expression } from '../abstract/express';
import { tipoString, Type } from '../symbols/type';
import { Retorno } from '../abstract/retorno';

export class IndexOf extends Expression {
  constructor(
    public identificador: string,
    public expresion: Expression,
    line: number,
    column: number
  ) {
    super(line, column);    
  }

  public getNodo() {
    var nodoDec = new nodo("INDEXOF");
    nodoDec.agregarHijo_nodo(this.expresion.getNodo())
    return nodoDec;
}

  public executar(env: Environment): Retorno {  

    let result = {
        value: null,
        type: Type.error
    };  

    const vector = env.get_array(this.identificador)
    const elem = this.expresion.executar(env);

    if (vector != null) {
        const index = vector.value.indexOf(elem.value)
        
        result = {
            value: index,
            type: Type.INT
        }
    }
    
    
    return result
  }
}
