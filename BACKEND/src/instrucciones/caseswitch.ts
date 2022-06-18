import { Expression } from "../abstract/express";
import nodo from "../grafo/nodo";

export class CaseSwitch {
    
    private tipoCaso: any;
    private expresion: Expression;
    private instrucciones: any;
    private fila: any;
    private columna: any;

    constructor(
        tipoCaso: any, 
        expresion:Expression, 
        instrucciones:any, 
        fila:any, 
        columna:any
    )
    {
        this.tipoCaso = tipoCaso;
        this.expresion = expresion;
        this.instrucciones = instrucciones;
        this.fila = fila;
        this.columna = columna;
        
    }

    public getTipoCaso():String {
        return this.tipoCaso;
    }

    public getExpresion():any {
        return this.expresion;
    }

    public getInstrucciones():any {
        return this.instrucciones;
    }

    public getNodo() {
        // console.log("---- CASE ----");
        
        // console.log(this.expresion);
        // console.log("---- CASE ----");
        
        var nodoDec = new nodo(this.tipoCaso);
        if (this.expresion != null) {
            nodoDec.agregarHijo_nodo(this.expresion.getNodo())
            
        }
        for(const inst of this.getInstrucciones()) {
            nodoDec.agregarHijo_nodo(inst.getNodo());
        }
        // nodoDec.agregarHijo(this.tipo + "");
        // nodoDec.agregarHijo(this.nombre[0]);
        // nodoDec.agregarHijo_nodo(this.condicion.getNodo());
        return nodoDec;
    }

    // public getDesc():String {
    //     return this.descripcion;
    // }

    // public getFila():Number {
    //     return this.fila;
    // }

    // public getColumna():Number {
    //     return this.columna;
    // }
}