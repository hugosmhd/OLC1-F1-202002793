import { Type } from './../symbols/type';
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";

export class Funcion extends Instruccion {
    constructor(
        public retorno:Type,
        public id:string,
        public parametros:any[],
        public bloque: Instruccion,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public getNodo() {
        var nodoDec = new nodo("FUNCION");
        // nodoDec.agregarHijo(this.tipo + "");
        // nodoDec.agregarHijo(this.nombre[0]);
        // nodoDec.agregarHijo2(this.expresion.getNodo());
        return nodoDec;
    }

    /**
     * getParametros
     */
    public getParametros() {
        return this.parametros;
    }

    public executar(env:Environment) {
       
        //semantica

        //asignacion parecida a la de varibles, envez de guardar variables, estoy guardando funciones/metodods
        // console.log("hola que hace");
        // console.log("--- PARAMETROS ---");
        
        // console.log(this.parametros)
        
        // this.parametros.forEach(element => {
            // console.log(element);            
        // });
        // console.log("--- PARAMETROS ---");
        
        env.guardar_funcion(this.id, this);


    }
}
