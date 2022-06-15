import { Expression } from "../abstract/express";
import { Retorno } from "../abstract/retorno";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";
import { RelacionalOption } from "./relacionalOption";

export class Relacional extends Expression {
  constructor(
    private left: Expression,
    private right: Expression,
    private type: RelacionalOption,
    line: number,
    column: number
  ) {
    super(line, column);
  }

  public getNodo() {
    var nodoDec = new nodo("RELACIONAL");
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
    const nodoDer = this.right.executar(env);

    if (this.type == RelacionalOption.MAYOR) {
        if (nodoDer.type == Type.INT && nodoIzq.type == Type.INT
        || nodoDer.type == Type.INT && nodoIzq.type == Type.DOUBLE
        || nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.INT
        || nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
            result = {
            value: nodoIzq.value > nodoDer.value,
            type: Type.BOOLEAN,
            };
        } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
        || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
            const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
            const valorFinal = nodoDer.type == Type.INT ? (valorChar > nodoDer.value): (nodoIzq.value > valorChar)
            result = { 
                value: valorFinal, 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
        || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
            const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
            const valorFinal = nodoDer.type == Type.DOUBLE ? (valorChar > nodoDer.value): (nodoIzq.value > valorChar)
            result = { 
                value: valorFinal, 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
            result = { 
                value: String(nodoIzq.value).charCodeAt(0) > String(nodoDer.value).charCodeAt(0), 
                type: Type.BOOLEAN 
            }
        }
    } else if (this.type == RelacionalOption.MENOR) {
        if (nodoDer.type == Type.INT && nodoIzq.type == Type.INT
        || nodoDer.type == Type.INT && nodoIzq.type == Type.DOUBLE
        || nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.INT
        || nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
          result = {
            value: nodoIzq.value < nodoDer.value,
            type: Type.BOOLEAN,
          };
        } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
        || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
            const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
            const valorFinal = nodoDer.type == Type.INT ? (valorChar < nodoDer.value): (nodoIzq.value < valorChar)
            result = { 
                value: valorFinal, 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
        || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
            const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
            const valorFinal = nodoDer.type == Type.DOUBLE ? (valorChar < nodoDer.value): (nodoIzq.value < valorChar)
            result = { 
                value: valorFinal, 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
            result = { 
                value: String(nodoIzq.value).charCodeAt(0) < String(nodoDer.value).charCodeAt(0), 
                type: Type.BOOLEAN 
            }
        }
    } else if (this.type == RelacionalOption.MAYORIGUAL) {
        if (nodoDer.type == Type.INT && nodoIzq.type == Type.INT
        || nodoDer.type == Type.INT && nodoIzq.type == Type.DOUBLE
        || nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.INT
        || nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
          result = {
            value: nodoIzq.value >= nodoDer.value,
            type: Type.BOOLEAN,
          };
        } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
        || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
            const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
            const valorFinal = nodoDer.type == Type.INT ? (valorChar >= nodoDer.value): (nodoIzq.value >= valorChar)
            result = { 
                value: valorFinal, 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
        || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
            const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
            const valorFinal = nodoDer.type == Type.DOUBLE ? (valorChar >= nodoDer.value): (nodoIzq.value >= valorChar)
            result = { 
                value: valorFinal, 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
            result = { 
                value: String(nodoIzq.value).charCodeAt(0) >= String(nodoDer.value).charCodeAt(0), 
                type: Type.BOOLEAN 
            }
        }
    } else if (this.type == RelacionalOption.MENORIGUAL) {
        if (nodoDer.type == Type.INT && nodoIzq.type == Type.INT
        || nodoDer.type == Type.INT && nodoIzq.type == Type.DOUBLE
        || nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.INT
        || nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
          result = {
            value: nodoIzq.value <= nodoDer.value,
            type: Type.BOOLEAN,
          };
        } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
        || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
            const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
            const valorFinal = nodoDer.type == Type.INT ? (valorChar <= nodoDer.value): (nodoIzq.value <= valorChar)
            result = { 
                value: valorFinal, 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
        || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
            const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
            const valorFinal = nodoDer.type == Type.DOUBLE ? (valorChar <= nodoDer.value): (nodoIzq.value <= valorChar)
            result = { 
                value: valorFinal, 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
            result = { 
                value: String(nodoIzq.value).charCodeAt(0) <= String(nodoDer.value).charCodeAt(0), 
                type: Type.BOOLEAN 
            }
        }
    } else if (this.type == RelacionalOption.IGUALIGUAL) {
        if (nodoDer.type == Type.INT && nodoIzq.type == Type.INT
        || nodoDer.type == Type.INT && nodoIzq.type == Type.DOUBLE
        || nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.INT
        || nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
          result = {
            value: nodoIzq.value == nodoDer.value,
            type: Type.BOOLEAN,
          };
        } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
        || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
            const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
            const valorFinal = nodoDer.type == Type.INT ? (valorChar == nodoDer.value): (nodoIzq.value == valorChar)
            result = { 
                value: valorFinal, 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
        || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
            const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
            const valorFinal = nodoDer.type == Type.DOUBLE ? (valorChar == nodoDer.value): (nodoIzq.value == valorChar)
            result = { 
                value: valorFinal, 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
            result = { 
                value: String(nodoIzq.value).charCodeAt(0) == String(nodoDer.value).charCodeAt(0), 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.STRING && nodoIzq.type == Type.STRING) {
            result = { 
                value: (nodoIzq.value) == (nodoDer.value), 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.BOOLEAN && nodoIzq.type == Type.BOOLEAN) {
            result = { 
                value: (nodoIzq.value) == (nodoDer.value), 
                type: Type.BOOLEAN 
            }
        }
    } else if (this.type == RelacionalOption.DIFERENTE) {
        if (nodoDer.type == Type.INT && nodoIzq.type == Type.INT
        || nodoDer.type == Type.INT && nodoIzq.type == Type.DOUBLE
        || nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.INT
        || nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
          result = {
            value: nodoIzq.value != nodoDer.value,
            type: Type.BOOLEAN,
          };
        } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
        || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
            const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
            const valorFinal = nodoDer.type == Type.INT ? (valorChar != nodoDer.value): (nodoIzq.value != valorChar)
            result = { 
                value: valorFinal, 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
        || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
            const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
            const valorFinal = nodoDer.type == Type.DOUBLE ? (valorChar != nodoDer.value): (nodoIzq.value != valorChar)
            result = { 
                value: valorFinal, 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
            result = { 
                value: String(nodoIzq.value).charCodeAt(0) != String(nodoDer.value).charCodeAt(0), 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.STRING && nodoIzq.type == Type.STRING) {
            result = { 
                value: (nodoIzq.value) != (nodoDer.value), 
                type: Type.BOOLEAN 
            }
        } else if (nodoDer.type == Type.BOOLEAN && nodoIzq.type == Type.BOOLEAN) {
            result = { 
                value: (nodoIzq.value) != (nodoDer.value), 
                type: Type.BOOLEAN 
            }
        }
    } 
    
    return result;
  }
}
