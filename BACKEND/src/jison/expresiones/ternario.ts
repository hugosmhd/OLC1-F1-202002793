import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Expression } from '../abstract/express';
import { Type } from '../symbols/type';
import { Retorno } from '../abstract/retorno';
import { Instruccion } from '../abstract/instruccion';

export class Ternario extends Expression {
  constructor(
    public condicion: Expression,
    public verdadero: Expression | Instruccion,
    public falso: Expression | Instruccion,
    line: number,
    column: number
  ) {
    super(line, column);    
  }

  public getNodo() {
    var nodoDec = new nodo("TERNARIO");
    nodoDec.agregarHijo_nodo(this.condicion.getNodo())
    var verdadero = new nodo("TRUE")
    var falso = new nodo("FALSO")
    verdadero.agregarHijo_nodo(this.verdadero.getNodo())
    falso.agregarHijo_nodo(this.falso.getNodo())
    nodoDec.agregarHijo_nodo(verdadero)
    nodoDec.agregarHijo_nodo(falso)
    // nodoDec.agregarHijo_nodo(this.expresion.getNodo())
    return nodoDec;
}

  public executar(env: Environment): Retorno {  

    let result = {
        value: null,
        type: Type.error
    };

    const evaluar = this.condicion.executar(env);
    
    if (evaluar.value) {        
        const v = this.verdadero.executar(env);
        if (v != undefined && v != null) {
            result = {
                value: v.value,
                type: v.type
            }
        } else {
            result = {
                value: null,
                type: Type.BOOLEAN
            }
        }
        
    } else {
        const f = this.falso.executar(env);
        if (f != undefined && f != null) {
            result = {
                value: f.value,
                type: f.type
            }
        } else {
            result = {
                value: null,
                type: Type.BOOLEAN
            }
        }

    }
    

    
    return result
  }
}
