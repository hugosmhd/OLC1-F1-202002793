import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";
import { Type } from "../symbols/type";


export class Declaracion_array extends Instruccion {


    constructor(
        public tipo: Type,
        public tipoConf: Type,
        public nombre: string,
        public dimension: number,
        public valor: any,
        public valorDos: any,
        line: number,
        column: number
    ) {
        super(line, column)

    }

    public getNodo() {
        var nodoDec = new nodo("VECTIR");
        nodoDec.agregarHijo(this.nombre)

        return nodoDec;
    }

    public executar(env: Environment) {
        const array: any[] = []
        
        // este pare el new 
        if (this.dimension == 1 && this.tipoConf == null && Array.isArray(this.valor)) {
            this.valor.forEach((element) => {
                const tipoValor = element.executar(env);
                if (this.tipo == tipoValor.type) {
                    array.push(tipoValor.value);      
                }
            });            
        } else if (this.dimension == 1) {
            const tamano = this.valor.executar(env);
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
        } else if (this.dimension == 2 && this.tipoConf == null && Array.isArray(this.valor) && Array.isArray(this.valorDos)) {
            const arreglo_uno: any[] = []
            const arreglo_dos: any[] = []
            this.valor.forEach((element) => {
                const tipoValor = element.executar(env);
                if (this.tipo == tipoValor.type) {
                    arreglo_uno.push(tipoValor.value);      
                    // console.log(tipoValor.value);
                                  
                }
            });            
            this.valorDos.forEach((element) => {
                const tipoValor = element.executar(env);
                if (this.tipo == tipoValor.type) {
                    arreglo_dos.push(tipoValor.value);      
                    // console.log(tipoValor.value);
                                  
                }
            });      
            array.push(arreglo_uno)
            array.push(arreglo_dos)      
        } else if (this.dimension == 2) {
            const tamano_uno = this.valor.executar(env);
            const tamano_dos = this.valorDos.executar(env);
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

        
        // ------------------------------------------------

        

        
        // console.log(this);
        console.log(array);
        env.guardar_array(this.nombre, array, this.tipo)
    }

        
}
