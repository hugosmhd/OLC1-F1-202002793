import { Environment } from './../symbols/enviroment';
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import { Type } from '../symbols/type';

export class Switch extends Instruccion {


    constructor(
        public condicion: Expression,
        public bloqueCase: Array<Instruccion>,
        line: number, 
        column : number,
        public bloqueDefault?:Array<Instruccion>|Instruccion,
    ) {
        super(line,column);
        
    }
    public executar(env:Environment) {
        const condicion = this.condicion.executar(env); 
        console.log("----- EVALUACION SWITCH -----")
        console.log(condicion)
        console.log("----- BLOQUE CASE -----")
        console.log(this.bloqueCase)
        console.log("----- BLOQUE DEFAULT -----")
        console.log(this.bloqueDefault)


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