import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";


export class Declaracion_array extends Instruccion {


    constructor(
        public tipo: Type,
        public tipoConf: Type,
        public nombre: string,
        public dimension: number,
        public valor: any,
        public valorDos: any,
        line: number,
        column: number
    ) {
        super(line, column)

    }

    public getNodo() {
        var nodoDec = new nodo("VECTIR");
        nodoDec.agregarHijo(this.nombre)

        return nodoDec;
    }

    public executar(env: Environment) {
        console.log("----- DECLARACION JAJA ----");
        const express = this.valor.executar();
        console.log(express);        
        console.log("----- DECLARACION JAJA ----");
        
        // ------------------------------------------------
   
        // console.log(this);
        // console.log(array);
        env.guardar_array(this.nombre, express.value, this.tipo)
    }

        
}
