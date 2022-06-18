import { Identificador } from './identificador';
import { Expression } from "../abstract/express";
import { Retorno } from "../abstract/retorno";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { DecrementOption } from './decrementOptions';
import nodo from '../grafo/nodo';

export class Decremento extends Expression {
  constructor(
    public identificador: string,
    public type: DecrementOption,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public getNodo() {
      var nodoDec = new nodo("DECREMENTO");
      if (this.type == DecrementOption.MENOSMENOS_POST) {
        nodoDec.agregarHijo(this.identificador)
        nodoDec.agregarHijo("--")
      } else if (this.type == DecrementOption.MENOSMENOS_PRE) {
        nodoDec.agregarHijo("--")
        nodoDec.agregarHijo(this.identificador)
      }
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

    if (this.type == DecrementOption.MENOSMENOS_POST && variable != null && envVar != null) {
        // console.log("POST") 
        result = {
            value: variable.value,
            type: Type.INT,
        }; 
        envVar.actualizar_variable(variable.id, variable.value - 1)      
    } else if(this.type == DecrementOption.MENOSMENOS_PRE && variable != null && envVar != null) {
        // console.log("PRE")   
        envVar.actualizar_variable(variable.id, variable.value - 1)      
        result = {
            value: variable.value,
            type: Type.INT,
        };     
        
    }
    // console.log(env)
    
    
    return result;
  }
}
