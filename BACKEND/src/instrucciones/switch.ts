import { Environment } from './../symbols/enviroment';
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import { Type } from '../symbols/type';
import nodo from '../grafo/nodo';

export class Switch extends Instruccion {


    constructor(
        public condicion: Expression,
        public bloqueCase: Instruccion[],
        line: number, 
        column : number,
        public bloqueDefault?:Instruccion,
    ) {
        super(line,column);
        
    }

    public getNodo() {
        var nodoDec = new nodo("SWITCH");
        // nodoDec.agregarHijo(this.tipo + "");
        // nodoDec.agregarHijo(this.nombre[0]);
        // nodoDec.agregarHijo2(this.expresion.getNodo());
        return nodoDec;
    }

    public executar(env:Environment) {
        const condicion = this.condicion.executar(env);
        console.log("------ HOLA HOLA ------")
        for (const elemento  of this.bloqueCase) {
            console.log(elemento)
        }
        console.log("------ HOLA HOLA ------")
        // console.log("----- EVALUACION SWITCH -----")
        // console.log(condicion)
        // console.log("----- BLOQUE CASE -----")
        // console.log(this.bloqueCase)
        // console.log("----- BLOQUE DEFAULT -----")
        // console.log(this.bloqueDefault)


        // if (condicion.type == Type.BOOLEAN) {
        //     if (condicion.value) {
        //         const env_if = new Environment(env);
        //         console.log(this.bloqueIf)
        //         for(let instrucciones of this.bloqueIf) {
        //             var if_instruc = instrucciones.executar(env_if);
        //         }
        //     } else {
        //         if(this.bloqueElseIf != undefined) {
        //             var elseif_intruc = this.bloqueElseIf.executar(env)
        //         } else if(this.bloqueElse != undefined) {
        //             const env_else = new Environment(env);
        //             for(let instrucciones of this.bloqueElse) {
        //                 var else_intruc = instrucciones.executar(env_else);
        //             }
        //         }
        //     }
        // }
    }

}