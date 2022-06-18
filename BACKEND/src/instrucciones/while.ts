import { Bloque } from './bloque';
import { Environment } from './../symbols/enviroment';
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import { Type } from '../symbols/type';
import nodo from '../grafo/nodo';
import { Break } from "./break";

export class While extends Instruccion {

    private condicion:Expression;
    private instrucciones:Bloque;

    constructor(
        condicion: Expression,
        instrucciones: Bloque,
        line: number, 
        column : number,
    ) {
        super(line,column);
        this.condicion = condicion;
        this.instrucciones = instrucciones;     
        console.log(this.instrucciones);
           
    }

    public getNodo() {
        var nodoDec = new nodo("WHILE");
        // nodoDec.agregarHijo(this.tipo + "");
        // nodoDec.agregarHijo(this.nombre[0]);
        nodoDec.agregarHijo_nodo(this.instrucciones.getNodo());
        return nodoDec;
    }

    public executar(env:Environment) {
        // console.log("CONDICION -----");
        // console.log(this.condicion);
        // console.log("INSTRUCCIONES -----");
        // console.log(this.instrucciones);
        
        while (true) {
            const condicion = this.condicion.executar(env);
            if (condicion.type == Type.BOOLEAN) {
                if (condicion.value) {
                    const env_while = new Environment(env);
                    var instruccion = this.instrucciones.executar(env_while)
                    // console.log(instruccion);
                    
                    if (instruccion instanceof Break) {
                        return;
                    }
                    // for(let instrucciones of this.instrucciones) {
                    //     var if_instruc = instrucciones.executar(env_while);
                    // }
                } else {
                    break
                }
            }
        }        
    }

}