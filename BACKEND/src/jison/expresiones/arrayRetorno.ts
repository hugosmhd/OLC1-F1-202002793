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
        var nodoDec = this.dimension == 1 ? new nodo(this.id + "[]") : new nodo(this.id + "[][]");
        if (this.dimension == 1) {
            nodoDec.agregarHijo_nodo(this.expresion.getNodo())
        } else if (this.dimension == 2) {
            nodoDec.agregarHijo_nodo(this.expresion.getNodo())
            nodoDec.agregarHijo_nodo(this.expresionDos.getNodo())            
        }
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
                

            }
        }
        
        
        


        return result

    }

}