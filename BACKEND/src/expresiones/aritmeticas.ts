import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/retorno"
import { Environment } from "../symbols/enviroment"
import { Type } from "../symbols/type"
import { ArithmeticOption } from "./aritmeticOption"

export class Arithmetic extends Expression {

    constructor(
        private left: Expression,
        private right: Expression,
        private type: ArithmeticOption,
        line: number,
        column: number) {
        super(line, column)
    }

    public executar(env:Environment): Retorno {

        let result: Retorno ={
            value:null,
            type:Type.error
        }

        const nodoIzq = this.left.executar(env)
        const nodoDer = this.right.executar(env)

        if (this.type == ArithmeticOption.MAS) {

   
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


        return result
    }


}