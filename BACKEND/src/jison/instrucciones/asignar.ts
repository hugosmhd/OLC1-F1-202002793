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
        nodoDec.agregarHijo(this.nombre)
        nodoDec.agregarHijo_nodo(this.expresion.getNodo())

        return nodoDec;
    }

    public executar(env:Environment) {
       
    
        //env.getTipo_variable()
        // console.log("---- DESDE ASIGNAR ----");
        // console.log(env);        
        // console.log("---- DESDE ASIGNAR ----");
        
        const valor = this.expresion.executar(env);
        const variable = env.get_variable(this.nombre);
        if (variable != undefined && variable != null && valor.type == variable.type) {
            const actual = env.actualizar_variable(this.nombre,valor.value);
            if (!actual) {
                Singleton.getInstance().add_errores(new Issue("Semantico", "No se puede modificar una variable const", this.line, this.column));
            }            
        } else if (variable == undefined && variable == null) {
            Singleton.getInstance().add_errores(new Issue("Semantico", "No existe la variable " + this.nombre, this.line, this.column));            
        } else {
            Singleton.getInstance().add_errores(new Issue("Semantico", "La expresion no coincide con el tipo que fue declarada la variable", this.line, this.column));
        }
        
    }
}