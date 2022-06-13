import { Identificador } from './identificador';
import { Expression } from "../abstract/express";
import { Retorno } from "../abstract/retorno";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { IncrementOption } from './incrementOptions';

export class Incremento extends Expression {
  constructor(
    public identificador: string,
    public type: IncrementOption,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public executar(env: Environment): Retorno {
    const variable = env.get_variable(this.identificador)
    // console.log(variable)
    let result: Retorno = {
        value: null,
        type: Type.error,
    };

    if (this.type == IncrementOption.MASMAS_POST) {
        console.log("POST") 
        result = {
            value: variable.value,
            type: Type.INT,
        }; 
        env.actualizar_variable(variable.id, variable.value + 1)      
    } else if(this.type == IncrementOption.MASMAS_PRE) {
        console.log("PRE")   
        env.actualizar_variable(variable.id, variable.value + 1)      
        result = {
            value: variable.value,
            type: Type.INT,
        };     
        
    }
    // console.log(env)
    
    
    return result;
  }
}
