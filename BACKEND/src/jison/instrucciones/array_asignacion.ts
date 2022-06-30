import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import { Issue } from "../error/issue";
import nodo from "../grafo/nodo";
import { Singleton } from "../patron_singleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";


export class Asignacion_array extends Instruccion {


    constructor(
        public nombre: string,
        public index: Expression,
        public indexDos: Expression,
        public expresion: Expression,
        public dimension: number,
        line: number,
        column: number
    ) {
        super(line, column)

    }

    public getNodo() {
        var nodoDec = new nodo("ASIGNACION");
        
        if (this.dimension == 1) {
            var name = new nodo(this.nombre + "[]")
            name.agregarHijo_nodo(this.index.getNodo())
            nodoDec.agregarHijo_nodo(name)
        } else if (this.dimension == 2) {
            var name = new nodo(this.nombre + "[][]")
            name.agregarHijo_nodo(this.index.getNodo())
            name.agregarHijo_nodo(this.indexDos.getNodo())
            nodoDec.agregarHijo_nodo(name)
        }

        nodoDec.agregarHijo_nodo(this.expresion.getNodo())

        return nodoDec;
    }

    public executar(env: Environment) {
        const arreglo = env.get_array(this.nombre)
        if (arreglo == null) throw Singleton.getInstance().add_errores(new Issue("Semantico", `El arreglo con el id ${this.nombre} no existe`, this.line, this.column)) 
        
        if (this.dimension == 1) {
            const index = this.index.executar(env)
            if(index.type != Type.INT) throw Singleton.getInstance().add_errores(new Issue("Semantico", "El index debe ser tipo int", this.line, this.column))
            const expres = this.expresion.executar(env)
            if(arreglo.type != expres.type) throw Singleton.getInstance().add_errores(new Issue("Semantico", "El tipo de dato no coincide con el tipo del arreglo", this.line, this.column))
            
            arreglo.value[index.value] = expres.value                
        } else {
            const index = this.index.executar(env)
            const index_dos = this.indexDos.executar(env)
            if(index.type != Type.INT) throw Singleton.getInstance().add_errores(new Issue("Semantico", "El index debe ser tipo int", this.line, this.column))
            if(index_dos.type != Type.INT) throw Singleton.getInstance().add_errores(new Issue("Semantico", "El index debe ser tipo int", this.line, this.column))
            const expres = this.expresion.executar(env)
            if(arreglo.type != expres.type) throw Singleton.getInstance().add_errores(new Issue("Semantico", "El tipo de dato no coincide con el tipo del arreglo", this.line, this.column))
            arreglo.value[index.value][index_dos.value] = expres.value 
        }
        
    }

        
}
