import { Instruccion } from "../abstract/instruccion";
import { ArrayValues } from "../expresiones/arrayValues";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";
import { tipoString, Type } from "../symbols/type";


export class Declaracion_array extends Instruccion {


    constructor(
        public tipo: Type,
        public tipoConf: Type,
        public nombre: string,
        public dimension: number,
        public valor: ArrayValues,
        public valorDos: any,
        line: number,
        column: number
    ) {
        super(line, column)

    }

    public getNodo() {
        var nodoDec = new nodo("VECTOR");
        var tipoStr = tipoString(this.tipo);
        tipoStr != null?nodoDec.agregarHijo(tipoStr):tipoStr;
        this.dimension == 1 ? nodoDec.agregarHijo(this.nombre + "[]") : nodoDec.agregarHijo(this.nombre + "[][]")
        nodoDec.agregarHijo_nodo(this.valor.getNodo())
        
        
        return nodoDec;
    }

    public executar(env: Environment) {
        // console.log(this.valor);
        
        const express = this.valor.executar(env);
        env.guardar_array(this.nombre, express.value, this.tipo)
    }

        
}
