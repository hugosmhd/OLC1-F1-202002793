import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Expression } from '../abstract/express';
import { tipoString, Type } from '../symbols/type';
import { Retorno } from '../abstract/retorno';
import { Singleton } from '../patron_singleton/singleton';
import { Issue } from '../error/issue';

export class ArrayValues extends Expression {


    private arreglo: any = [];

    
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
    var nodoDec = new nodo("[" + this.valores() + "]");
        
    return nodoDec;
}

  public executar(env: Environment): Retorno {  

    const array: any = []
    

    let result = {
        value: null,
        type: Type.error
    };
        
    if (this.dimension == 1 && Array.isArray(this.expresion)) {
        if(this.tipo == null) this.tipo = this.expresion[0].executar(env).type
        this.expresion.forEach((element: any) => {
            const tipoValor = element.executar(env);
            
            if (this.tipo == tipoValor.type) {
                array.push(tipoValor.value);      
            } else {
                throw Singleton.getInstance().add_errores(new Issue("Semantico", "Los datos del array deben ser todo del mismo tipo", this.line, this.column))
            }
        });            
    } else if (this.dimension == 1) {
        const tamano = this.expresion.executar(env)
        if(tamano.type != Type.INT) throw Singleton.getInstance().add_errores(new Issue("Semantico", "El tamaño del array debe ser un int", this.line, this.column))
        for (let i = 0; i < tamano.value; i++) {
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
        
        
    } else if (this.dimension == 2 && Array.isArray(this.expresion) && Array.isArray(this.expresionDos)) {
        const arreglo_uno: any[] = []
        const arreglo_dos: any[] = []
        if(this.tipo == null) this.tipo = this.expresion[0].executar(env).type
        
        this.expresion.forEach((element: any) => {
            const tipoValor = element.executar(env);
            if (this.tipo == tipoValor.type) {
                arreglo_uno.push(tipoValor.value);      
                                
            } else {
                throw Singleton.getInstance().add_errores(new Issue("Semantico", "Los datos del array deben ser todo del mismo tipo", this.line, this.column))
            }
        });            
        this.expresionDos.forEach((element) => {
            const tipoValor = element.executar(env);
            if (this.tipo == tipoValor.type) {
                arreglo_dos.push(tipoValor.value);      
                                
            } else {
                throw Singleton.getInstance().add_errores(new Issue("Semantico", "Los datos del array deben ser todo del mismo tipo", this.line, this.column))
            }
        });      
        array.push(arreglo_uno)
        array.push(arreglo_dos)      
    } else if (this.dimension == 2) {
        const tamano_uno = this.expresion.executar(env);
        const tamano_dos = this.expresionDos.executar(env);
        if(tamano_uno.type != Type.INT || tamano_dos.type != Type.INT) throw Singleton.getInstance().add_errores(new Issue("Semantico", "El tamaño del array debe ser un int", this.line, this.column))
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
    
    result = {
        value: array,
        type: this.tipo
    }
    this.arreglo = array
    return result
  }

  public valores(): string {

    if (this.dimension == 1) {
        return this.arreglo.toString()
    } else if(this.dimension == 2) {
        var arreglo = ""
        for (let i = 0; i < this.arreglo.length - 1; i++) {
            arreglo += "["
            for (let j = 0; j < this.arreglo[0].length - 1; j++) {
                arreglo += this.arreglo[0][j] + ", " 
            }
            arreglo += this.arreglo[0][this.arreglo[0].length - 1]
            arreglo += "] ,"
            arreglo += "["
            for (let j = 0; j < this.arreglo[1].length - 1; j++) {
                arreglo += this.arreglo[1][j] + ", " 
            }
            arreglo += this.arreglo[1][this.arreglo[1].length - 1]
            arreglo += "]"
        }        
        return arreglo
    } 
    return ""

  }
}
