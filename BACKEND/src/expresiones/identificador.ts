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
        var nodoDec = new nodo("IDENTIFICADOR");
        // nodoDec.agregarHijo(this.tipo + "");
        // nodoDec.agregarHijo(this.nombre[0]);
        // nodoDec.agregarHijo2(this.expresion.getNodo());
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
        
        return {
            value: variable_ts.value,
            type: variable_ts.type
        }
    }
}