import { Environment } from './../symbols/enviroment';
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import { Type } from '../symbols/type';
import nodo from '../grafo/nodo';

export class If extends Instruccion {

    private condicion:Expression;
    private bloqueIf:Array<Instruccion>;
    private bloqueElse:Array<Instruccion> | undefined;
    private bloqueElseIf:Instruccion | undefined;

    constructor(
        condicion: Expression,
        bloqueIf: Array<Instruccion>,
        line: number, 
        column : number,
        bloqueElse?:Array<Instruccion>|Instruccion,
    ) {
        super(line,column);
        this.condicion = condicion;
        this.bloqueIf = bloqueIf;
        if(bloqueElse != null) {
            if(bloqueElse instanceof Instruccion)
                this.bloqueElseIf = bloqueElse;
            else
                this.bloqueElse = bloqueElse;            
        }
        
    }

    public getNodo() {
        var nodoDec = new nodo("IF");
        // nodoDec.agregarHijo(this.tipo + "");
        // nodoDec.agregarHijo(this.nombre[0]);
        // nodoDec.agregarHijo2(this.expresion.getNodo());
        return nodoDec;
    }

    public executar(env:Environment) {
        const condicion = this.condicion.executar(env); 
        console.log("----- CONDICION IF -----")
        console.log(condicion)

        if (condicion.type == Type.BOOLEAN) {
            if (condicion.value) {
                const env_if = new Environment(env);
                console.log(this.bloqueIf)
                for(let instrucciones of this.bloqueIf) {
                    var if_instruc = instrucciones.executar(env_if);
                }
            } else {
                if(this.bloqueElseIf != undefined) {
                    var elseif_intruc = this.bloqueElseIf.executar(env)
                } else if(this.bloqueElse != undefined) {
                    const env_else = new Environment(env);
                    for(let instrucciones of this.bloqueElse) {
                        var else_intruc = instrucciones.executar(env_else);
                    }
                }
            }
        }
        // console.log("----- IF -----")
        // console.log(this.instruccionesIf)
        // console.log("----- ELSE IF -----")
        // console.log(this.elseif)
        // if (this.elseif != undefined) {            
        //     var instr = this.elseif.executar(env);
        //     console.log(instr)
        // }
        // console.log("----- ELSE -----")
        // console.log(this.instruccionesElse)
    }

}