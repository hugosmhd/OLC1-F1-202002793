import { Issue } from './../error/issue';
import { Singleton } from './../patron_singleton/singleton';
import { Expression } from "../abstract/express";
import { Retorno } from "../abstract/retorno";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { LogicalOption, tipoString } from './logicalOptions';

export class Logical extends Expression {
    constructor(
      private left: Expression,
      private right: Expression | undefined,
      private type: LogicalOption,
      line: number,
      column: number
    ) {
      super(line, column);
    }

    public getNodo() {
        var tipoStr = tipoString(this.type);
        var nodoDec = new nodo(tipoStr);
        nodoDec.agregarHijo_nodo(this.left.getNodo());
        if (this.right != undefined) {
            nodoDec.agregarHijo_nodo(this.right.getNodo());            
        }
        return nodoDec;
    }

    public executar(env: Environment): Retorno {
        let result: Retorno = {
          value: null,
          type: Type.error,
        };
    
        const nodoIzq = this.left.executar(env);
        const nodoDer = this.right != undefined ? this.right.executar(env) : null

        if (this.type == LogicalOption.OR && nodoDer != null) {
            if (nodoDer.type == Type.BOOLEAN && nodoIzq.type == Type.BOOLEAN) {
                result = {
                    value: nodoIzq.value || nodoDer.value,
                    type: Type.BOOLEAN,
                };
            } else {
                Singleton.getInstance().add_errores(new Issue("Semantico", "La expresion logica OR(||) solo acepta operadores booleanos", this.line, this.column))
            }
        } else if (this.type == LogicalOption.AND && nodoDer != null) {
            if (nodoDer.type == Type.BOOLEAN && nodoIzq.type == Type.BOOLEAN) {
                result = {
                    value: nodoIzq.value && nodoDer.value,
                    type: Type.BOOLEAN,
                };
            } else {
                Singleton.getInstance().add_errores(new Issue("Semantico", "La expresion logica AND(&&) solo acepta operadores booleanos", this.line, this.column))
            }
        } else if (this.type == LogicalOption.XOR && nodoDer != null) {
            if (nodoDer.type == Type.BOOLEAN && nodoIzq.type == Type.BOOLEAN) {
                result = {
                    value: (nodoIzq.value ^ nodoDer.value) == 1 ? true: false,
                    type: Type.BOOLEAN,
                };
            } else {
                Singleton.getInstance().add_errores(new Issue("Semantico", "La expresion logica XOR(^) solo acepta operadores booleanos", this.line, this.column))
            }
        } else if (this.type == LogicalOption.NOT) {
            if (nodoDer == null && nodoIzq.type == Type.BOOLEAN) {
                result = {
                    value: !nodoIzq.value,
                    type: Type.BOOLEAN,
                };
            } else {
                Singleton.getInstance().add_errores(new Issue("Semantico", "La expresion logica NOT(!) solo acepta operadores booleanos", this.line, this.column))
            }
        } else {
            Singleton.getInstance().add_errores(new Issue("Semantico", "Verifique su entrada, en las lineas y columnas indicadas " + nodoIzq.type, this.line, this.column))
        }

        return result;
    
    
    }

}