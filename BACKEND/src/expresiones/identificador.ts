import { Environment } from './../symbols/enviroment';
import { Instruccion } from "../abstract/instruccion";

export class Identificador extends Instruccion {
    constructor(
        public nombre: string,
        line: number,
        column: number) {
        super(line, column)
    }


    public executar(env:Environment){
        
        // console.log("------s----")
        // console.log(this.nombre)
        // console.log(env.get_variable(this.nombre))
        const variable = env.get_variable(this.nombre)
        
        return variable;
    }
}