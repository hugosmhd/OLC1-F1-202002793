import { Break } from './break';
import { Environment } from './../symbols/enviroment';
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import { Type } from '../symbols/type';
import nodo from '../grafo/nodo';
import { Continue } from './continue';

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
        var nodoDec = new nodo("IF");;
        nodoDec.agregarHijo_nodo(this.condicion.getNodo())
        nodoDec.agregarHijo_nodo(this.bloqueIf.getNodo())

        if(this.bloqueElseIf != undefined) {
            var nodoElse = new nodo("ELSE")
            nodoElse.agregarHijo_nodo(this.bloqueElseIf.getNodo())
            nodoDec.agregarHijo_nodo(nodoElse); 
        }

        // if(this.bloqueElseIf != undefined && nodoDec != null) {
        //     var nodeElse = new nodo("ELSE-IF")
        //     nodeElse.agregarHijo_nodo(this.bloqueElseIf.getNodo()); 
        //     nodoDec.agregarHijo_nodo(nodeElse);                    
            
        // }

        return nodoDec;
    }

    public executar(env:Environment) {
        const condicion = this.condicion.executar(env);

        if (condicion.type == Type.BOOLEAN) {
            
            if (condicion.value) {
                const env_if = new Environment(env);
                var res = this.bloqueIf.executar(env_if)
                if (res instanceof Break || res instanceof Continue) {
                    return res
                }
            } else {
                if(this.bloqueElseIf != undefined) {
                    var elseif_intruc = this.bloqueElseIf.executar(env)
                    if (elseif_intruc instanceof Break ) {
                        return elseif_intruc
                    }
                } else if(this.bloqueElse != undefined) {
                    const env_else = new Environment(env);                 
                    
                    var elseif_intruc = this.bloqueElse.executar(env_else)
                    if (elseif_intruc instanceof Break ) {
                        return elseif_intruc
                    }
                }
            }
        }
    }

}