import { Expression } from "../abstract/express";
import { Retorno } from "../abstract/retorno";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { LogicalOption } from './logicalOptions';

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
        var nodoDec = new nodo("LOGICA");
        // nodoDec.agregarHijo(this.tipo + "");
        // nodoDec.agregarHijo(this.nombre[0]);
        // nodoDec.agregarHijo2(this.expresion.getNodo());
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
            }
        } else if (this.type == LogicalOption.AND && nodoDer != null) {
            if (nodoDer.type == Type.BOOLEAN && nodoIzq.type == Type.BOOLEAN) {
                result = {
                    value: nodoIzq.value && nodoDer.value,
                    type: Type.BOOLEAN,
                };
            }
        } else if (this.type == LogicalOption.XOR && nodoDer != null) {
            if (nodoDer.type == Type.BOOLEAN && nodoIzq.type == Type.BOOLEAN) {
                result = {
                    value: (nodoIzq.value ^ nodoDer.value) == 1 ? true: false,
                    type: Type.BOOLEAN,
                };
            }
        } else if (this.type == LogicalOption.NOT) {
            if (nodoDer == null && nodoIzq.type == Type.BOOLEAN) {
                result = {
                    value: !nodoIzq.value,
                    type: Type.BOOLEAN,
                };
            }
        }

        return result;
    
    
    }

}