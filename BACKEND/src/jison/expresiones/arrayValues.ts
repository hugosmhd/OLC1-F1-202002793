import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Expression } from '../abstract/express';
import { tipoString, Type } from '../symbols/type';
import { Retorno } from '../abstract/retorno';

export class ArrayValues extends Expression {
  constructor(
    public tipo: Type,
    public expresion: any,
    public expresionDos: any,
    public dimension: number,
    line: number,
    column: number
  ) {
    super(line, column);    
  }

  public getNodo() {
    var nodoDec = new nodo("TOCHARARRAY");
    nodoDec.agregarHijo_nodo(this.expresion.getNodo())
    return nodoDec;
}

  public executar(env: Environment): Retorno {  

    const array: any = []
    

    let result = {
        value: null,
        type: Type.error
    };
        
    if (this.dimension == 1 && Array.isArray(this.expresion)) {
        this.tipo = this.expresion[0].executar(env).type
        this.expresion.forEach((element: any) => {
            const tipoValor = element.executar(env);
            
            if (this.tipo == tipoValor.type) {
                array.push(tipoValor.value);      
            }
        });            
    } else if (this.dimension == 1) {
        // console.log("DESDE LA DIMENSION UNO");
        // console.log(this.tipo);                
        const tamano = this.expresion.executar(env)
        // console.log(tamano);
        for (let i = 0; i < tamano.value; i++) {
            // console.log("HOLA DESDE EL INT");
            if (this.tipo == Type.INT) {                
                array.push(0);
            } else if (this.tipo == Type.STRING) {
                array.push("");
            } else if (this.tipo == Type.DOUBLE) {
                array.push(0.0);
            } else if (this.tipo == Type.CHAR) {
                array.push('');
            } else if (this.tipo == Type.BOOLEAN) {
                array.push(false);
            }    
        }
        // console.log(array);
        
        
    } else if (this.dimension == 2 && Array.isArray(this.expresion) && Array.isArray(this.expresionDos)) {
        const arreglo_uno: any[] = []
        const arreglo_dos: any[] = []
        // console.log("DESDE EL SEGUNDO JAJAJA");
        this.tipo = this.expresion[0].executar(env).type
        // console.log(this.tipo);
        
        this.expresion.forEach((element: any) => {
            const tipoValor = element.executar(env);
            if (this.tipo == tipoValor.type) {
                arreglo_uno.push(tipoValor.value);      
                                
            }
        });            
        this.expresionDos.forEach((element) => {
            const tipoValor = element.executar(env);
            if (this.tipo == tipoValor.type) {
                arreglo_dos.push(tipoValor.value);      
                                
            }
        });      
        array.push(arreglo_uno)
        array.push(arreglo_dos)      
    } else if (this.dimension == 2) {
        const tamano_uno = this.expresion.executar(env);
        const tamano_dos = this.expresionDos.executar(env);
        // console.log("DESDE DOBLE SIMPLE");
        
        const arreglo_uno = []
        const arreglo_dos = []
        for (let i = 0; i < tamano_uno.value; i++) {
            if (this.tipo == Type.INT) {
                arreglo_uno.push(0);
            } else if (this.tipo == Type.STRING) {
                arreglo_uno.push("");
            } else if (this.tipo == Type.DOUBLE) {
                arreglo_uno.push(0.0);
            } else if (this.tipo == Type.CHAR) {
                arreglo_uno.push('');
            } else if (this.tipo == Type.BOOLEAN) {
                arreglo_uno.push(false);
            }    
        }
        for (let i = 0; i < tamano_dos.value; i++) {
            if (this.tipo == Type.INT) {
                arreglo_dos.push(0);
            } else if (this.tipo == Type.STRING) {
                arreglo_dos.push("");
            } else if (this.tipo == Type.DOUBLE) {
                arreglo_dos.push(0.0);
            } else if (this.tipo == Type.CHAR) {
                arreglo_dos.push('');
            } else if (this.tipo == Type.BOOLEAN) {
                arreglo_dos.push(false);
            }    
        }

        array.push(arreglo_uno)
        array.push(arreglo_dos)
    }





    // var express = this.expresion.executar(env)
    // if (express != null) {
    //     result = {
    //         value: express.value,
    //         type: express.type
    //     }
    // }
    // console.log("--- DESDE ARRAY VALUES");    
    // console.log(express);
    // console.log("--- DESDE ARRAY VALUES");
    
    

    // console.log(result);
    
    result = {
        value: array,
        type: this.tipo
    }
    return result
  }
}
