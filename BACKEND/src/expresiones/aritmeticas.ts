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

        let result: Retorno ={
            value:null,
            type:Type.error
        }
        // console.log(this.left.executar(env))
        // console.log(this.right.executar(env))
        const nodoIzq = this.left.executar(env)
        const nodoDer = this.right != undefined ? this.right.executar(env) : null

        if (this.type == ArithmeticOption.MAS && nodoDer != null) {

   
            if (nodoDer.type == Type.INT && nodoIzq.type == Type.INT) {
                result = { 
                    value: (nodoIzq.value + nodoDer.value), 
                    type: Type.INT 
                }
            }// else if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.STRING
            //     ||nodoDer.type == Type.STRING && nodoIzq.type == Type.NUMBER) {
            //     result = { 
            //         value: (String(nodoIzq.value) + String(nodoDer.value)), 
            //         type: Type.STRING 
            //     }
            // }else if (nodoIzq.type == Type.STRING || nodoDer.type == Type.STRING ) {
            //     result = { 
            //         value: (String(nodoIzq.value) + String(nodoDer.value)), 
            //         type: Type.STRING 
            //     }
            // }else if (nodoIzq.type == Type.BOOLEAN && nodoDer.type == Type.NUMBER ) {
            //     const val:number= nodoIzq.value? 1:0
            //     result = { 
            //         value: ( val+nodoDer.value), 
            //         type: Type.NUMBER 
            //     }
            // }
            // else if (nodoDer.type == Type.BOOLEAN && nodoIzq.type == Type.NUMBER ) {
            //     const val:number= nodoDer.value? 1:0
            //     result = { 
            //         value: ( val+nodoIzq.value), 
            //         type: Type.NUMBER 
            //     }
            // }
            // else if (nodoIzq.type == Type.BOOLEAN || nodoDer.type == Type.BOOLEAN ) {
            //     const val1:number= nodoIzq.value? 1:0
            //     const val2:number= nodoDer.value? 1:0
            //     result = { 
            //         value: ( val1+val2), 
            //         type: Type.NUMBER 
            //     }
            // }
            
            //demas validadionces para la operaciones aritmeticas
            
        }// else if (this.type == ArithmeticOption.MENOS) {

   
        //     if (nodoDer.type == Type.NUMBER && nodoIzq.type == Type.NUMBER) {
        //         result = { 
        //             value: (nodoIzq.value - nodoDer.value), 
        //             type: Type.NUMBER 
        //         }
        //     }
        //     //en la resta unicamente quiero con numeros
            
        // }

        else if (this.type == ArithmeticOption.MENOSUNARIO && nodoDer == null) {
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