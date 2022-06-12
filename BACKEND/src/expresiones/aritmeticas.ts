import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/retorno"
import { Environment } from "../symbols/enviroment"
import { Type } from "../symbols/type"
import { ArithmeticOption } from "./aritmeticOption"

export class Arithmetic extends Expression {

    private operandoU:Expression|undefined;

    constructor(
        private left: Expression,
        private right: Expression | undefined,
        private type: ArithmeticOption,
        line: number,
        column: number) {
        super(line, column)
        if (!right) {
            this.operandoU = left;
        }
    }

    public executar(env:Environment): Retorno {

        let result: Retorno = {
            value:null,
            type:Type.error
        }
        const nodoIzq = this.left.executar(env)
        const nodoDer = this.right != undefined ? this.right.executar(env) : null

        if (this.type == ArithmeticOption.MAS && nodoDer != null) {

   
            if (nodoDer.type == Type.INT && nodoIzq.type == Type.INT) {
                result = { 
                    value: (nodoIzq.value + nodoDer.value), 
                    type: Type.INT 
                }
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.DOUBLE
                ||nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.INT) {
                result = { 
                    value: (nodoIzq.value + nodoDer.value), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
                ||nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.INT ? valorChar + nodoDer.value: nodoIzq.value + valorChar
                result = { 
                    value: valorFinal, 
                    type: Type.INT 
                }
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.STRING
                ||nodoDer.type == Type.STRING && nodoIzq.type == Type.INT) {
                result = { 
                    value: (String(nodoIzq.value) + String(nodoDer.value)), 
                    type: Type.STRING 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
                result = { 
                    value: (nodoIzq.value + nodoDer.value), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
                ||nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.DOUBLE ? nodoDer.value + valorChar: nodoIzq.value + valorChar
                result = { 
                    value: valorFinal, 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.STRING
                ||nodoDer.type == Type.STRING && nodoIzq.type == Type.DOUBLE) {
                result = { 
                    value: (String(nodoIzq.value) + String(nodoDer.value)), 
                    type: Type.STRING 
                }
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: (String(nodoIzq.value).charCodeAt(0) + String(nodoDer.value).charCodeAt(0)), 
                    type: Type.INT 
                }
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.STRING
                ||nodoDer.type == Type.STRING && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: (String(nodoIzq.value) + String(nodoDer.value)), 
                    type: Type.STRING 
                }
            } else if (nodoDer.type == Type.STRING && nodoIzq.type == Type.STRING) {
                result = { 
                    value: (String(nodoIzq.value) + String(nodoDer.value)), 
                    type: Type.STRING 
                }
            }
            
            //demas validadionces para la operaciones aritmeticas
            
        } else if (this.type == ArithmeticOption.MENOS && nodoDer != null) {   
            if (nodoIzq.type == Type.INT && nodoDer.type == Type.INT) {
                result = { 
                    value: (nodoIzq.value - nodoDer.value), 
                    type: Type.INT 
                }
            } else if (nodoIzq.type == Type.INT && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.INT) {
                result = { 
                    value: (nodoIzq.value - nodoDer.value), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.INT ? valorChar - nodoDer.value: nodoIzq.value - valorChar
                result = { 
                    value: valorFinal, 
                    type: Type.INT 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
                result = { 
                    value: (nodoIzq.value - nodoDer.value), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.DOUBLE ? valorChar - nodoDer.value: nodoIzq.value - valorChar
                result = { 
                    value: valorFinal, 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: (String(nodoIzq.value).charCodeAt(0) - String(nodoDer.value).charCodeAt(0)), 
                    type: Type.INT 
                }
            }
            
        } else if (this.type == ArithmeticOption.POR && nodoDer != null) {   
            if (nodoIzq.type == Type.INT && nodoDer.type == Type.INT) {
                result = { 
                    value: (nodoIzq.value * nodoDer.value), 
                    type: Type.INT 
                }
            } else if (nodoIzq.type == Type.INT && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.INT) {
                result = { 
                    value: (nodoIzq.value * nodoDer.value), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.INT ? valorChar * nodoDer.value: nodoIzq.value * valorChar
                result = { 
                    value: valorFinal, 
                    type: Type.INT 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
                result = { 
                    value: (nodoIzq.value * nodoDer.value), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.DOUBLE ? valorChar * nodoDer.value: nodoIzq.value * valorChar
                result = { 
                    value: valorFinal, 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: (String(nodoIzq.value).charCodeAt(0) * String(nodoDer.value).charCodeAt(0)), 
                    type: Type.INT 
                }
            }
            
        } else if (this.type == ArithmeticOption.DIV && nodoDer != null) {   
            if (nodoIzq.type == Type.INT && nodoDer.type == Type.INT) {
                result = { 
                    value: Math.trunc(nodoIzq.value / nodoDer.value), 
                    type: Type.INT 
                }
            } else if (nodoIzq.type == Type.INT && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.INT) {
                result = { 
                    value: (nodoIzq.value / nodoDer.value), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.INT ? Math.trunc(valorChar / nodoDer.value): Math.trunc(nodoIzq.value / valorChar)
                result = { 
                    value: valorFinal, 
                    type: Type.INT 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
                result = { 
                    value: (nodoIzq.value / nodoDer.value), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.DOUBLE ? valorChar / nodoDer.value: nodoIzq.value / valorChar
                result = { 
                    value: valorFinal, 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: Math.trunc(String(nodoIzq.value).charCodeAt(0) / String(nodoDer.value).charCodeAt(0)), 
                    type: Type.INT 
                }
            }
            
        } else if (this.type == ArithmeticOption.POT && nodoDer != null) {   
            if (nodoIzq.type == Type.INT && nodoDer.type == Type.INT) {
                result = { 
                    value: (Math.pow(nodoIzq.value, nodoDer.value)), 
                    type: Type.DOUBLE 
                }
            } else if (nodoIzq.type == Type.INT && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.INT) {
                result = { 
                    value: (Math.pow(nodoIzq.value, nodoDer.value)), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.INT ? Math.pow(valorChar, nodoDer.value): Math.pow(nodoIzq.value, valorChar)
                result = { 
                    value: valorFinal, 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
                result = { 
                    value: Math.pow(nodoIzq.value, nodoDer.value), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.DOUBLE ? Math.pow(valorChar, nodoDer.value): Math.pow(nodoIzq.value, valorChar)
                result = { 
                    value: valorFinal, 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: Math.pow((nodoIzq.value).charCodeAt(0),(nodoDer.value).charCodeAt(0)), 
                    type: Type.DOUBLE 
                }
            }
            
        } else if (this.type == ArithmeticOption.MODULO && nodoDer != null) {   
            if (nodoIzq.type == Type.INT && nodoDer.type == Type.INT) {
                result = { 
                    value: (nodoIzq.value % nodoDer.value), 
                    type: Type.DOUBLE 
                }
            } else if (nodoIzq.type == Type.INT && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.INT) {
                result = { 
                    value: (nodoIzq.value % nodoDer.value), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.INT ? (valorChar % nodoDer.value): (nodoIzq.value % valorChar)
                result = { 
                    value: valorFinal, 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
                result = { 
                    value: (nodoIzq.value % nodoDer.value), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.DOUBLE ? (valorChar % nodoDer.value): (nodoIzq.value % valorChar)
                result = { 
                    value: valorFinal, 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: ((nodoIzq.value).charCodeAt(0) % (nodoDer.value).charCodeAt(0)), 
                    type: Type.DOUBLE 
                }
            }
            
        }

        else if (this.type == ArithmeticOption.MENOSUNARIO && nodoIzq != null && nodoDer != null) {
            if (nodoIzq.type == Type.INT) {
                result = { 
                    value: Number(-1*nodoIzq.value), 
                    type: Type.INT 
                }
            } else if (nodoIzq.type == Type.DOUBLE) {
                result = { 
                    value: Number(-1*nodoIzq.value), 
                    type: Type.DOUBLE 
                }
            } 
        }
        return result
    }


}