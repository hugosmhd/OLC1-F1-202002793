import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";


export class Asignacion_array extends Instruccion {


    constructor(
        public nombre: string,
        public index: Expression,
        public indexDos: Expression,
        public expresion: Expression,
        public dimension: number,
        line: number,
        column: number
    ) {
        super(line, column)

    }

    public getNodo() {
        var nodoDec = new nodo("ASIGNACION");
        nodoDec.agregarHijo(this.nombre)

        return nodoDec;
    }

    public executar(env: Environment) {
        const arreglo = env.get_array(this.nombre)
        if (arreglo != null) {
            if (this.dimension == 1) {
                const index = this.index.executar(env)
                const expres = this.expresion.executar(env)
                arreglo.value[index.value] = expres.value                
            } else {
                const index = this.index.executar(env)
                const index_dos = this.indexDos.executar(env)
                const expres = this.expresion.executar(env)
                arreglo.value[index.value][index_dos.value] = expres.value 

            }
        }
    }

        
}
