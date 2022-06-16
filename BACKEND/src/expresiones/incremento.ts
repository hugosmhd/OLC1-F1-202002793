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
    // nodoDec.agregarHijo(this.tipo + "");
    // nodoDec.agregarHijo(this.nombre[0]);
    // nodoDec.agregarHijo2(this.expresion.getNodo());
    return nodoDec;
}

  public executar(env: Environment): Retorno {
    const variable = env.get_variable(this.identificador)
    const envVar = env.get_env(this.identificador)
    // console.log(variable)
    let result: Retorno = {
        value: null,
        type: Type.error,
    };

    if (this.type == IncrementOption.MASMAS_POST && variable != null && envVar != null) {
        // console.log("POST") 
        result = {
            value: variable.value,
            type: Type.INT,
        }; 
        envVar.actualizar_variable(variable.id, variable.value + 1)      
    } else if(this.type == IncrementOption.MASMAS_PRE && variable != null && envVar != null) {
        // console.log("PRE")   
        envVar.actualizar_variable(variable.id, variable.value + 1)      
        result = {
            value: variable.value,
            type: Type.INT,
        };     
        
    }
    // console.log(env)
    
    
    return result;
  }
}
