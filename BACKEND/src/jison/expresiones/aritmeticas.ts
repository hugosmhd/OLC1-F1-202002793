import { Singleton } from './../patron_singleton/singleton';
import { Issue } from './../error/issue';
import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/retorno"
import nodo from "../grafo/nodo"
import { Environment } from "../symbols/enviroment"
import { Type } from "../symbols/type"
import { ArithmeticOption, arithmeticString } from "./aritmeticOption"

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

    public getNodo() {
        var operacion = arithmeticString(this.type);
        var nodoDec = new nodo(operacion);
        nodoDec.agregarHijo_nodo(this.left.getNodo());
        this.right != null?nodoDec.agregarHijo_nodo(this.right.getNodo()):null;
        return nodoDec;
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
                    value: (Number(nodoIzq.value) + Number(nodoDer.value)), 
                    type: Type.INT 
                }
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.DOUBLE
                ||nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.INT) {
                    console.log("DEBERIA ENTRAR AQUI JAJAJA");
                    console.log(nodoIzq.value);
                    console.log(nodoDer.value);
                    result = { 
                        value: (Number(nodoIzq.value) + Number(nodoDer.value)).toFixed(2), 
                        type: Type.DOUBLE 
                    }     
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
                ||nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.INT ? valorChar + Number(nodoDer.value): Number(nodoIzq.value) + valorChar
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
                    value: (Number(nodoIzq.value) + Number(nodoDer.value)).toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
                ||nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.DOUBLE ? Number(nodoDer.value )+ valorChar: Number(nodoIzq.value) + valorChar
                result = { 
                    value: valorFinal.toFixed(2), 
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
            } else {
                Singleton.getInstance().add_errores(new Issue("Semantico", "El tipo de dato de los operandos no son validos para la suma(+)", this.line, this.column))
            }
            
            //demas validadionces para la operaciones aritmeticas
            
        } else if (this.type == ArithmeticOption.MENOS && nodoDer != null) {   
            if (nodoIzq.type == Type.INT && nodoDer.type == Type.INT) {
                result = { 
                    value: (Number(nodoIzq.value) - Number(nodoDer.value)), 
                    type: Type.INT 
                }
            } else if (nodoIzq.type == Type.INT && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.INT) {
                result = { 
                    value: (Number(nodoIzq.value) - Number(nodoDer.value)).toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.INT ? valorChar - Number(nodoDer.value): Number(nodoIzq.value) - valorChar
                result = { 
                    value: valorFinal, 
                    type: Type.INT 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
                result = { 
                    value: (Number(nodoIzq.value) - Number(nodoDer.value)).toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.DOUBLE ? valorChar - Number(nodoDer.value): Number(nodoIzq.value) - valorChar
                result = { 
                    value: valorFinal.toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: (String(nodoIzq.value).charCodeAt(0) - String(nodoDer.value).charCodeAt(0)), 
                    type: Type.INT 
                }
            } else {
                Singleton.getInstance().add_errores(new Issue("Semantico", "El tipo de dato de los operandos no son validos para la resta(-)", this.line, this.column))
            }
            
        } else if (this.type == ArithmeticOption.POR && nodoDer != null) {   
            if (nodoIzq.type == Type.INT && nodoDer.type == Type.INT) {
                result = { 
                    value: (Number(nodoIzq.value) * Number(nodoDer.value)), 
                    type: Type.INT 
                }
            } else if (nodoIzq.type == Type.INT && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.INT) {
                result = { 
                    value: (Number(nodoIzq.value) * Number(nodoDer.value)).toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.INT ? valorChar * Number(nodoDer.value): Number(nodoIzq.value) * valorChar
                result = { 
                    value: valorFinal, 
                    type: Type.INT 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
                result = { 
                    value: (Number(nodoIzq.value) * Number(nodoDer.value)).toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.DOUBLE ? valorChar * Number(nodoDer.value): Number(nodoIzq.value) * valorChar
                result = { 
                    value: valorFinal.toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: (String(nodoIzq.value).charCodeAt(0) * String(nodoDer.value).charCodeAt(0)), 
                    type: Type.INT 
                }
            } else {
                Singleton.getInstance().add_errores(new Issue("Semantico", "El tipo de dato de los operandos no son validos para la multiplicacion(*)", this.line, this.column))
            }
            
        } else if (this.type == ArithmeticOption.DIV && nodoDer != null) {   
            if (nodoIzq.type == Type.INT && nodoDer.type == Type.INT) {
                result = { 
                    value: Math.trunc(Number(nodoIzq.value) / Number(nodoDer.value)), 
                    type: Type.INT 
                }
            } else if (nodoIzq.type == Type.INT && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.INT) {
                result = { 
                    value: (Number(nodoIzq.value) / Number(nodoDer.value)).toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.INT ? Math.trunc(valorChar / Number(nodoDer.value)): Math.trunc(Number(nodoIzq.value) / valorChar)
                result = { 
                    value: valorFinal, 
                    type: Type.INT 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
                result = { 
                    value: (Number(nodoIzq.value) / Number(nodoDer.value)).toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.DOUBLE ? valorChar / Number(nodoDer.value): Number(nodoIzq.value) / valorChar
                result = { 
                    value: valorFinal.toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: Math.trunc(String(nodoIzq.value).charCodeAt(0) / String(nodoDer.value).charCodeAt(0)), 
                    type: Type.INT 
                }
            } else {
                Singleton.getInstance().add_errores(new Issue("Semantico", "El tipo de dato de los operandos no son validos para la division(/)", this.line, this.column))
            }
            
        } else if (this.type == ArithmeticOption.POT && nodoDer != null) {   
            if (nodoIzq.type == Type.INT && nodoDer.type == Type.INT) {
                result = { 
                    value: (Math.pow(Number(nodoIzq.value), Number(nodoDer.value)).toFixed(2)), 
                    type: Type.DOUBLE 
                }
            } else if (nodoIzq.type == Type.INT && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.INT) {
                result = { 
                    value: (Math.pow(Number(nodoIzq.value), Number(nodoDer.value)).toFixed(2)), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.INT ? Math.pow(valorChar, Number(nodoDer.value)): Math.pow(Number(nodoIzq.value), valorChar)
                result = { 
                    value: valorFinal.toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
                result = { 
                    value: Math.pow(Number(nodoIzq.value), Number(nodoDer.value)).toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.DOUBLE ? Math.pow(valorChar, Number(nodoDer.value)): Math.pow(Number(nodoIzq.value), valorChar)
                result = { 
                    value: valorFinal.toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: Math.pow((nodoIzq.value).charCodeAt(0),(nodoDer.value).charCodeAt(0)).toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else {
                Singleton.getInstance().add_errores(new Issue("Semantico", "El tipo de dato de los operandos no son validos para la potencia(**)", this.line, this.column))
            }
            
        } else if (this.type == ArithmeticOption.MODULO && nodoDer != null) {   
            if (nodoIzq.type == Type.INT && nodoDer.type == Type.INT) {
                result = { 
                    value: (Number(nodoIzq.value) % Number(nodoDer.value)).toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoIzq.type == Type.INT && nodoDer.type == Type.DOUBLE
                || nodoIzq.type == Type.DOUBLE && nodoDer.type == Type.INT) {
                result = { 
                    value: (Number(nodoIzq.value) % Number(nodoDer.value)).toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.INT && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.INT) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.INT ? (valorChar % Number(nodoDer.value)): (Number(nodoIzq.value) % valorChar)
                result = { 
                    value: valorFinal.toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.DOUBLE) {
                result = { 
                    value: (Number(nodoIzq.value) % Number(nodoDer.value)).toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.DOUBLE && nodoIzq.type == Type.CHAR
                || nodoDer.type == Type.CHAR && nodoIzq.type == Type.DOUBLE) {
                const valorChar = nodoIzq.type == Type.CHAR ? String(nodoIzq.value).charCodeAt(0): String(nodoDer.value).charCodeAt(0)
                const valorFinal = nodoDer.type == Type.DOUBLE ? (valorChar % Number(nodoDer.value)): (Number(nodoIzq.value) % valorChar)
                result = { 
                    value: valorFinal.toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else if (nodoDer.type == Type.CHAR && nodoIzq.type == Type.CHAR) {
                result = { 
                    value: ((nodoIzq.value).charCodeAt(0) % (nodoDer.value).charCodeAt(0)).toFixed(2), 
                    type: Type.DOUBLE 
                }
            } else {
                Singleton.getInstance().add_errores(new Issue("Semantico", "El tipo de dato de los operandos no son validos para el modulo(%)", this.line, this.column))
            }
            
        } else if (this.type == ArithmeticOption.MENOSUNARIO && nodoIzq != null) {
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
            } else {
                Singleton.getInstance().add_errores(new Issue("Semantico", "El operador unario menos(-) no es valido para el tipo de dato " + nodoIzq.type, this.line, this.column))
            }
        } 
        else {
            Singleton.getInstance().add_errores(new Issue("Semantico", "Verifique su entrada, en las lineas y columnas indicadas " + nodoIzq.type, this.line, this.column))
        }
        return result
    }


}