import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";
import { Singleton } from "../patron_singleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";

export class Print extends Instruccion {

    constructor(
        public saltoLinea: boolean,
        public expresion: Expression | null,
        line: number, 
        column : number,
    ) {
        super(line,column);        
    }

    public getNodo() {
        var nodoDec = new nodo("PRINT");
        if (this.expresion != null) {
            nodoDec.agregarHijo_nodo(this.expresion.getNodo());            
        }
        // nodoDec.agregarHijo(this.nombre[0]);
        // nodoDec.agregarHijo2(this.expresion.getNodo());
        return nodoDec;
    }

    public executar(env:Environment) {
        // console.log("print jajaj");
        const s= Singleton.getInstance()
        if (this.expresion != null) {
            const instruccion = this.expresion.executar(env);
            console.log(instruccion);
            if (instruccion.type == Type.STRING ) {
                var instr = instruccion.value.replace('\\"', '"')
                instr = instr.replace('\\\\', '\\')
                instr = instr.replace('\\n', '\n')
                instr = instr.replace('\\r', '\r')
                instr = instr.replace('\\t', '\t')
                this.saltoLinea? s.add_consola(instr+"\n") : s.add_consola(instr)                  
            } else {
                this.saltoLinea? s.add_consola(instruccion.value+"\n") : s.add_consola(instruccion.value)  

            }
        } else {
            this.saltoLinea? s.add_consola("\n") : s.add_consola("")  
        }
         
    }

}