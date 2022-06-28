import { Continue } from './continue';
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
    }

    public getNodo() {
        var nodoDec = new nodo("FOR");
        nodoDec.agregarHijo_nodo(this.inicializacion.getNodo())
        nodoDec.agregarHijo_nodo(this.condicion.getNodo())
        nodoDec.agregarHijo_nodo(this.actualizacion.getNodo())
        nodoDec.agregarHijo_nodo(this.instrucciones.getNodo());
        return nodoDec;
    }

    public executar(env:Environment) {
        

        const env_incializacion= new Environment(env);
        const ini = this.inicializacion.executar(env_incializacion);
        
        var condicion = this.condicion.executar(env_incializacion);
        if (condicion.type == Type.BOOLEAN) {
            while (condicion) {                
                if (condicion.value) {
                    const env_for = new Environment(env_incializacion);
                    const instruccion = this.instrucciones.executar(env_for)
                                            
                    if (instruccion instanceof Continue) {
                        
                        this.actualizacion.executar(env_incializacion);
                        condicion = this.condicion.executar(env_incializacion);
                        continue;
                    }
                } else {
                    break
                }
                this.actualizacion.executar(env_incializacion);
                condicion = this.condicion.executar(env_incializacion);
                
            }     
        }
        

        
        
    }

}