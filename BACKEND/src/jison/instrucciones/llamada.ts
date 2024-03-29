import { Return } from './return';

import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";
import { Arithmetic } from '../expresiones/aritmeticas';

export class Llamada extends Instruccion {
    constructor(        
        public id:string,
        public parametros:any[],
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public getNodo(): nodo {
        var nodoDec = new nodo("LLAMADA");
        this.parametros.forEach(param => {
            nodoDec.agregarHijo_nodo(param.getNodo())
        });
        // nodoDec.agregarHijo(this.nombre)
        // nodoDec.agregarHijo_nodo(this.expresion.getNodo())

        return nodoDec;
    }

    public executar(env:Environment) {
       
        const x = env.get_metodo(this.id)
        const env_para_parametros= new Environment(env);
        
        if (x!= null && x != undefined) {
            var contador = 0;
            x.getParametros().forEach(parametro => {
                var tipo;
                this.parametros[contador].type != undefined ? tipo = this.parametros[contador]: tipo = this.parametros[contador].executar(env);
                if (tipo instanceof Arithmetic) {
                    tipo = tipo.executar(env);
                                        
                }
                
                if (parametro.tipo == tipo.type) {                                        
                    env_para_parametros.guardar_variable(parametro.id, tipo.value, parametro.tipo, true)                    
                }             
                contador++;
            });
        }


        if (x== null) {
            throw "Error semantico, no ecnontre esta funcion"
        }
        

        const res = x.bloque.executar(env_para_parametros)
        if (x.retorno != null && res != undefined) {
            if (x.retorno == res.type) {                                
                return {
                    value: res.value,
                    type: res.type
                }                
            }
            
        }
        

        

    }
}

