import { Expression } from "../abstract/express";
import { Retorno } from "../abstract/retorno";
import { Issue } from "../error/issue";
import nodo from "../grafo/nodo";
import { Singleton } from "../patron_singleton/singleton";
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

        if (arreglo == null) throw Singleton.getInstance().add_errores(new Issue("Semantico", `El arreglo con el id ${this.id} no existe`, this.line, this.column)) 
                
        if (this.dimension == 1) {                
            const expre =  this.expresion.executar(env);
            if(expre.type != Type.INT) throw Singleton.getInstance().add_errores(new Issue("Semantico", "El index debe ser tipo int", this.line, this.column))
            if (expre.value < arreglo.value.length && expre.value >= 0) {
                result = { 
                    value: arreglo.value[expre.value], 
                    type: arreglo.type 
                }                    
            } else {
                throw Singleton.getInstance().add_errores(new Issue("Semantico", "El index esta fuera del tamaño del arreglo", this.line, this.column))
            }

        } else {
            const expre =  this.expresion.executar(env);
            const expreDos =  this.expresionDos.executar(env);
            
            if(expre.type != Type.INT) throw Singleton.getInstance().add_errores(new Issue("Semantico", "El index debe ser tipo int", this.line, this.column))
            if(expreDos.type != Type.INT) throw Singleton.getInstance().add_errores(new Issue("Semantico", "El index dos debe ser tipo int", this.line, this.column))
            
            if (expre.value == 0 && expreDos.value < arreglo.value[0].length && expreDos.value >= 0) {
                result = { 
                    value: arreglo.value[expre.value][expreDos.value], 
                    type: arreglo.type 
                }                        
            } else if(expre.value == 1 && expreDos.value < arreglo.value[1].length && expreDos.value >= 0){
                result = { 
                    value: arreglo.value[expre.value][expreDos.value], 
                    type: arreglo.type 
                }
            } else {
                throw Singleton.getInstance().add_errores(new Issue("Semantico", "El index esta fuera del tamaño del arreglo", this.line, this.column))
            }
            
            

        }
        
        
        
        


        return result

    }

}