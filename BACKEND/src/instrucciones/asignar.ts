import { Issue } from './../error/issue';
import { Singleton } from './../patron_singleton/singleton';
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";

export class Asignacion extends Instruccion {
    constructor(
        public nombre: string,
        public expresion : Expression,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public getNodo() {
        var nodoDec = new nodo("ASIGNAR");
        // var tipoStr = tipoString(this.tipo);
        

        // tipoStr != null?nodoDec.agregarHijo(tipoStr):tipoStr;
        // this.nombre.forEach(id => {
        //     nodoDec.agregarHijo(id);
        // });
        // nodoDec.agregarHijo_nodo(this.expresion.getNodo());
        return nodoDec;
    }

    public executar(env:Environment) {
       
    
        //env.getTipo_variable()
        const actual = env.actualizar_variable(this.nombre,10);
        if (!actual) {
            Singleton.getInstance().add_errores(new Issue("Semantico", "No se puede modificar una variable const", this.line, this.column));
        }
        
    }
}