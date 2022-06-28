import { Issue } from './../error/issue';
import { Singleton } from './../patron_singleton/singleton';
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";

export class GraficarTS extends Instruccion {
    constructor(
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public getNodo() {
        var nodoDec = new nodo("GRAFICAR-TS");
        return nodoDec;
    }

    public executar(env:Environment) {
        const single = Singleton.getInstance()
        single.add_grafica_ts(env.getEnvVariables());       
        
    }
}