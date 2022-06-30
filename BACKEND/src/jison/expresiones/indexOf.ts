import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Expression } from '../abstract/express';
import { tipoString, Type } from '../symbols/type';
import { Retorno } from '../abstract/retorno';
import { Singleton } from '../patron_singleton/singleton';
import { Issue } from '../error/issue';

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
    nodoDec.agregarHijo(this.identificador)
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

    if(vector == null || vector == undefined) throw Singleton.getInstance().add_errores(new Issue("Semantico", `Error en la expresion indexOf verifique el id ${this.identificador}`, this.line, this.column))

    const index = vector.value.indexOf(elem.value)
    
    result = {
        value: index,
        type: Type.INT
    }
    
    return result
  }
}
