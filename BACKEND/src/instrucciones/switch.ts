import { Break } from './break';
import { CaseSwitch } from './caseswitch';
import { Environment } from './../symbols/enviroment';
import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import { Type } from '../symbols/type';
import nodo from '../grafo/nodo';

export class Switch extends Instruccion {


    constructor(
        public condicion: Expression,
        public bloqueCase: CaseSwitch[],
        line: number, 
        column : number,
        public bloqueDefault?:CaseSwitch,
    ) {
        super(line,column);
        
    }

    public getNodo() {
        var nodoDec = new nodo("SWITCH");
        // nodoDec.agregarHijo(this.tipo + "");
        // nodoDec.agregarHijo(this.nombre[0]);
        nodoDec.agregarHijo_nodo(this.condicion.getNodo());
        for (const elemento  of this.bloqueCase) {
            nodoDec.agregarHijo_nodo(elemento.getNodo())
        }
        return nodoDec;
    }

    public executar(env:Environment) {
        const condicion = this.condicion.executar(env);
        var breakCondition = false;
        var aceptacion = false;
        var contador = 0;
        var contadorDefault = 0;
        for (const elemento  of this.bloqueCase) {
            if (elemento.getTipoCaso() == "case") {
                if (elemento.getExpresion().value == condicion.value || (!breakCondition && aceptacion)) {
                    for(const inst of elemento.getInstrucciones()) {
                        const res = inst.executar(env)
                        res instanceof Break ? breakCondition = true: null;
                    }
                    aceptacion = true;                   
                }
            } else if (elemento.getTipoCaso() == "default" && (this.bloqueDefault == undefined || null)) {
                if (!breakCondition && aceptacion) {
                    for(const inst of elemento.getInstrucciones()) {
                        const res = inst.executar(env)
                        res instanceof Break ? breakCondition = true: null;
                    }             
                } else {
                    this.bloqueDefault = elemento;
                    contadorDefault = contador + 1;
                }
            }
            contador++;
        }

        if ((this.bloqueDefault !=undefined && !aceptacion ) && (!breakCondition || !aceptacion)) {
            for(const inst of this.bloqueDefault.getInstrucciones()) {
                const res = inst.executar(env)
                res instanceof Break ? breakCondition = true: null;
            }
            if (!breakCondition) {
                for (let i = contadorDefault; i < this.bloqueCase.length; i++) {
                    if (!breakCondition) {
                        const element = this.bloqueCase[i];    
                        for(const inst of element.getInstrucciones()) {
                            const res = inst.executar(env)
                            res instanceof Break ? breakCondition = true: null;
                        }     
                    }
                }                
            }
        }
    }

}