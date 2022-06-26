import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";
import { Singleton } from "../patron_singleton/singleton";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";

export class Print extends Instruccion {

    constructor(
        public saltoLinea: boolean,
        public expresion: Expression | null,
        line: number, 
        column : number,
    ) {
        super(line,column);        
    }

    public getNodo() {
        var nodoDec = new nodo("PRINT");
        if (this.expresion != null) {
            nodoDec.agregarHijo_nodo(this.expresion.getNodo());            
        }
        // nodoDec.agregarHijo(this.nombre[0]);
        // nodoDec.agregarHijo2(this.expresion.getNodo());
        return nodoDec;
    }

    public executar(env:Environment) {
        // console.log("print jajaj");
        const s= Singleton.getInstance()
        if (this.expresion != null) {
            const instruccion = this.expresion.executar(env);
            // console.log("LOG");
            // console.log(instruccion.value);
            // console.log(Array.isArray(instruccion.value));
            // console.log("LOG");
            if (instruccion.type == Type.STRING && !Array.isArray(instruccion.value)) {
                // console.log("HOLA DESDE EL STRING");
                
                var instr = instruccion.value.replace('\\"', '"')
                instr = instr.replace('\\\\', '\\')
                instr = instr.replace('\\n', '\n')
                instr = instr.replace('\\r', '\r')
                instr = instr.replace('\\t', '\t')
                this.saltoLinea? s.add_consola(instr+"\n") : s.add_consola(instr)                  
            } else if (Array.isArray(instruccion.value)) {
                var arreglo = ""
                if (instruccion.type == Type.STRING) {
                    if (instruccion.value.length == 2 && Array.isArray(instruccion.value[0]) && Array.isArray(instruccion.value[1])) {
                        for (let i = 0; i < instruccion.value.length - 1; i++) {
                            arreglo += "["
                            for (let j = 0; j < instruccion.value[0].length - 1; j++) {
                                arreglo += "\"" + instruccion.value[0][j] + "\"" + ", " 
                            }
                            arreglo += "\"" + instruccion.value[0][instruccion.value[0].length - 1] + "\""
                            arreglo += "] ,"
                            arreglo += "["
                            for (let j = 0; j < instruccion.value[1].length - 1; j++) {
                                arreglo += "\"" +  instruccion.value[1][j] + "\"" + ", " 
                            }
                            arreglo += "\"" + instruccion.value[1][instruccion.value[1].length - 1] + "\""
                            arreglo += "]"
                        }
                    } else {
                        for (let i = 0; i < instruccion.value.length - 1; i++) {
                            arreglo += "\"" + instruccion.value[i] + "\", " 
                        }
                        arreglo += "\"" + instruccion.value[instruccion.value.length - 1] + "\""
                    }
                } else {
                    if (instruccion.value.length == 2 && Array.isArray(instruccion.value[0]) && Array.isArray(instruccion.value[1])) {
                        for (let i = 0; i < instruccion.value.length - 1; i++) {
                            arreglo += "["
                            for (let j = 0; j < instruccion.value[0].length - 1; j++) {
                                arreglo += instruccion.value[0][j] + ", " 
                            }
                            arreglo += instruccion.value[0][instruccion.value[0].length - 1]
                            arreglo += "] ,"
                            arreglo += "["
                            for (let j = 0; j < instruccion.value[1].length - 1; j++) {
                                arreglo += instruccion.value[1][j] + ", " 
                            }
                            arreglo += instruccion.value[1][instruccion.value[1].length - 1]
                            arreglo += "]"
                        }
                    } else {
                        for (let i = 0; i < instruccion.value.length - 1; i++) {
                            arreglo += instruccion.value[i] + ", " 
                        }
                        arreglo += instruccion.value[instruccion.value.length - 1] + ""
                    }
                }
                
                // const arreglo = instruccion.value.toString()
                this.saltoLinea? s.add_consola("["+arreglo+"]"+"\n") : s.add_consola("["+ arreglo+"]")   
            } else {
                this.saltoLinea? s.add_consola(instruccion.value+"\n") : s.add_consola(instruccion.value)  
            }
        } else {
            this.saltoLinea? s.add_consola("\n") : s.add_consola("")  
        }
         
    }

}