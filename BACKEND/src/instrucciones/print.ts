import { Environment } from './../symbols/enviroment';
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import { Type } from '../symbols/type';

export class Print extends Instruccion {

    constructor(
        public expresion: Expression,
        line: number, 
        column : number,
    ) {
        super(line,column);        
    }
    public executar(env:Environment) {
        const instruccion = this.expresion.executar(env);
        console.log(instruccion);   
    }

}