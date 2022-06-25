import { Expression } from "../abstract/express";
import { Retorno } from "../abstract/retorno";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";


export class ArrayRetorno extends Expression {
    constructor(
        public id: string,
        public expresion: Expression,
        public expresionDos: Expression,
        public dimension: number,
        line: number,
        column: number
    ) {
        super(line, column);
    }
    public getNodo() {
        var nodoDec = new nodo("ARREGLO");
        return nodoDec;
    }

    public executar(env:Environment): Retorno {

        let result: Retorno = {
            value:null,
            type:Type.error
        }

        const arreglo = env.get_array(this.id)
        
        if (arreglo != null) {
            if (this.dimension == 1) {                
                const expre =  this.expresion.executar(env);
                result = { 
                    value: arreglo.value[expre.value], 
                    type: arreglo.type 
                }
            } else {
                const expre =  this.expresion.executar(env);
                const expreDos =  this.expresionDos.executar(env);
                result = { 
                    value: arreglo.value[expre.value][expreDos.value], 
                    type: arreglo.type 
                }
                // console.log("**********************************");
                
                // console.log(expre.value);
                // console.log(expreDos.value);
                

            }
        }
        
        
        


        return result

    }

}