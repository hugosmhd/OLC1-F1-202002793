import { Environment } from './../symbols/enviroment';
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import { Type } from '../symbols/type';
import nodo from '../grafo/nodo';

export class Print extends Instruccion {

    constructor(
        public expresion: Expression,
        line: number, 
        column : number,
    ) {
        super(line,column);        
    }

    public getNodo() {
        var nodoDec = new nodo("PRINT");
        // nodoDec.agregarHijo(this.tipo + "");
        // nodoDec.agregarHijo(this.nombre[0]);
        // nodoDec.agregarHijo2(this.expresion.getNodo());
        return nodoDec;
    }

    public executar(env:Environment) {
        const instruccion = this.expresion.executar(env);
        console.log(instruccion);   
    }

}