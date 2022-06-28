import { Identificador } from './identificador';
import { Expression } from "../abstract/express";
import { Retorno } from "../abstract/retorno";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { IncrementOption } from './incrementOptions';
import nodo from '../grafo/nodo';

export class Incremento extends Expression {
  constructor(
    public identificador: string,
    public type: IncrementOption,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public getNodo() {
    var nodoDec = new nodo("INCREMENTO");
    if (this.type == IncrementOption.MASMAS_POST) {
      nodoDec.agregarHijo(this.identificador)
      nodoDec.agregarHijo("++")
    } else if (this.type == IncrementOption.MASMAS_PRE) {
      nodoDec.agregarHijo("++")
      nodoDec.agregarHijo(this.identificador)
    }
    return nodoDec;
}

  public executar(env: Environment): Retorno {
    const variable = env.get_variable(this.identificador)
    const envVar = env.get_env(this.identificador)
    let result: Retorno = {
        value: null,
        type: Type.error,
    };

    if (this.type == IncrementOption.MASMAS_POST && variable != null && envVar != null) {
        result = {
            value: variable.value,
            type: Type.INT,
        }; 
        envVar.actualizar_variable(variable.id, variable.value + 1)      
    } else if(this.type == IncrementOption.MASMAS_PRE && variable != null && envVar != null) {
        envVar.actualizar_variable(variable.id, variable.value + 1)      
        result = {
            value: variable.value,
            type: Type.INT,
        };     
        
    }
    
    
    return result;
  }
}
