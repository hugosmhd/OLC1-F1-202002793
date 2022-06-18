import { Environment } from './../symbols/enviroment';
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import { Type } from '../symbols/type';
import nodo from '../grafo/nodo';

export class DoWhile extends Instruccion {

    private condicion:Expression;
    private instrucciones:Instruccion;

    constructor(
        condicion: Expression,
        instrucciones: Instruccion,
        line: number, 
        column : number,
    ) {
        super(line,column);
        this.condicion = condicion;
        this.instrucciones = instrucciones;        
    }

    public getNodo() {
        var nodoDec = new nodo("DO");
        // nodoDec.agregarHijo(this.tipo + "");
        // nodoDec.agregarHijo(this.nombre[0]);
        nodoDec.agregarHijo_nodo(this.instrucciones.getNodo());
        var nodoWhile = new nodo("WHILE")
        nodoWhile.agregarHijo_nodo(this.condicion.getNodo())
        nodoDec.agregarHijo_nodo(nodoWhile)
        return nodoDec;
    }

    public executar(env:Environment) {
        // console.log("CONDICION -----");
        // console.log(this.condicion);
        // console.log("INSTRUCCIONES -----");
        // console.log(this.instrucciones);
        
        const env_dowhile = new Environment(env);
        this.instrucciones.executar(env_dowhile);
        while (true) {
            const condicion = this.condicion.executar(env);
            if (condicion.type == Type.BOOLEAN) {
                if (condicion.value) {
                    this.instrucciones.executar(env_dowhile)
                } else {
                    break
                }
            }
        }        
    }

}