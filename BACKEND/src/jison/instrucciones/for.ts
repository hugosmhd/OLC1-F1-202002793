import { Bloque } from './bloque';
import { Environment } from './../symbols/enviroment';
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import { Type } from '../symbols/type';
import nodo from '../grafo/nodo';
import { Break } from "./break";
import { Declaracion } from './declaracion';
import { Asignacion } from './asignar';
import { Incremento } from '../expresiones/incremento';
import { Decremento } from '../expresiones/decremento';

export class For extends Instruccion {

    private inicializacion:Declaracion | Asignacion;
    private condicion:Expression;
    private actualizacion:Asignacion | Incremento | Decremento;
    private instrucciones:Bloque;

    constructor(
        inicializacion:Declaracion | Asignacion,
        condicion: Expression,
        actualizacion:Asignacion | Incremento | Decremento,
        instrucciones: Bloque,
        line: number, 
        column : number,
    ) {
        super(line,column);
        this.inicializacion = inicializacion;
        this.condicion = condicion;
        this.actualizacion = actualizacion;
        this.instrucciones = instrucciones;     
        // console.log(this.instrucciones);
           
    }

    public getNodo() {
        var nodoDec = new nodo("FOR");
        // nodoDec.agregarHijo(this.tipo + "");
        // nodoDec.agregarHijo(this.nombre[0]);
        nodoDec.agregarHijo_nodo(this.instrucciones.getNodo());
        return nodoDec;
    }

    public executar(env:Environment) {
        // console.log("CONDICION -----");
        // console.log(this.condicion);
        // console.log("INSTRUCCIONES -----");
        // console.log(this.instrucciones);
        
        
    }

}