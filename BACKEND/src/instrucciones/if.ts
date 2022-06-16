import { Environment } from './../symbols/enviroment';
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import { Type } from '../symbols/type';
import nodo from '../grafo/nodo';

export class If extends Instruccion {

    private condicion:Expression;
    private bloqueIf:Instruccion;
    private bloqueElse:Instruccion | undefined;
    private bloqueElseIf:Instruccion | undefined;

    constructor(
        condicion: Expression,
        bloqueIf: Instruccion,
        line: number, 
        column : number,
        bloqueElse?:Instruccion,
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
        // console.log("SENTENCIA IF BLOQUES");
        // console.log("IF");        
        // console.log(this.bloqueIf);
        // console.log("ELSE IF");        
        // console.log(this.bloqueElseIf);
        // console.log("ELSE");        
        // console.log(this.bloqueElse);
        
        const condicion = this.condicion.executar(env); 
        // console.log("----- CONDICION IF -----")
        // console.log(condicion)

        if (condicion.type == Type.BOOLEAN) {
            // console.log("es bool entra aqui");
            
            if (condicion.value) {
                const env_if = new Environment(env);
                // console.log("BLOQUE DEL IF");
                
                // console.log(this.bloqueIf.length);
                this.bloqueIf.executar(env_if)
                // console.log(this.bloqueIf) 
                
                // console.log("POR FAVOR EJECUTAR ESOT") 
                // for(let instrucciones of this.bloqueIf) {
                //     var if_instruc = instrucciones.executar(env_if);
                // }
            } else {
                if(this.bloqueElseIf != undefined) {
                    var elseif_intruc = this.bloqueElseIf.executar(env)
                } else if(this.bloqueElse != undefined) {
                    console.log("else se ejecuta");
                    const env_else = new Environment(env);
                    this.bloqueElse.executar(env_else)
                    // for(let instrucciones of this.bloqueElse) {
                        
                    //     var else_intruc = instrucciones.executar(env_else);
                    // }
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