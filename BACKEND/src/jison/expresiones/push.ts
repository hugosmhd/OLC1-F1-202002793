import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Expression } from '../abstract/express';
import { Type } from '../symbols/type';
import { Retorno } from '../abstract/retorno';
import { Singleton } from '../patron_singleton/singleton';
import { Issue } from '../error/issue';

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
    if(vector == null || vector == undefined) throw Singleton.getInstance().add_errores(new Issue("Semantico", `Error en la expresion push no existe el vector con id ${this.identificador}`, this.line, this.column))
    
    const elem = this.expresion.executar(env);
    if (elem.type == vector.type) {
        vector.value.push(elem.value)        
        result = {
            value: true,
            type: Type.BOOLEAN
        }
    } else {
      throw Singleton.getInstance().add_errores(new Issue("Semantico", `El tipo de dato que se desea agregar no coincide con el tipo del arreglo`, this.line, this.column))
    }
    
    return result
  }
}
