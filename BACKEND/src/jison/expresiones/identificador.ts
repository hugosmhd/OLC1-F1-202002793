import { Environment } from './../symbols/enviroment';
import { Instruccion } from "../abstract/instruccion";
import nodo from '../grafo/nodo';

export class Identificador extends Instruccion {
    constructor(
        public nombre: string,
        line: number,
        column: number) {
        super(line, column)
    }

    public getNodo() {
        var nodoDec = new nodo(this.nombre);
        // nodoDec.agregarHijo(this.nombre)
        return nodoDec;
    }


    public executar(env:Environment){
        
        // console.log("------s----")
        // console.log(this.nombre)
        // console.log(env.get_variable(this.nombre))
        const variable_ts = env.get_variable(this.nombre)

        if(variable_ts== null|| variable_ts== undefined){
            //errores semaintics
            return
        }
        console.log("--- ID");
        console.log(variable_ts);
        console.log("--- ID");
        
        
        return {
            value: variable_ts.value,
            type: variable_ts.type
        }
    }
}