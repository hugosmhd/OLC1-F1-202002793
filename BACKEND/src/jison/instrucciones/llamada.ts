import { Return } from './return';

import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";

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
        // nodoDec.agregarHijo(this.nombre)
        // nodoDec.agregarHijo_nodo(this.expresion.getNodo())

        return nodoDec;
    }

    public executar(env:Environment) {
       
        // console.log("--- LLAMADA");
        
        // console.log(this);
        // console.log("--- LLAMADA");
        const x = env.get_metodo(this.id)
        // console.log(x);

        //si lo encontro
        //new env para declarar los parametros
        const env_para_parametros= new Environment(env);
        // console.log("----- LLAMADA PARAMETROS");
        
        if (x!= null && x != undefined) {
            var contador = 0;
            x.getParametros().forEach(parametro => {
                var tipo;
                this.parametros[contador].type != undefined ? tipo = this.parametros[contador]: tipo = this.parametros[contador].executar(env);
                
                if (parametro.tipo == tipo.type) {                                        
                    env_para_parametros.guardar_variable(parametro.id, tipo.value, parametro.tipo, true)                    
                }             
                contador++;
            });
        }

        // console.log(env_para_parametros);
        
        
        // console.log("----- LLAMADA PARAMETROS");
        ;
        // env_para_parametros.guardar_variable()      
        

        if (x== null) {
            throw "Error semantico, no ecnontre esta funcion"
        }
        // console.log(env_para_parametros);
        

        const res = x.bloque.executar(env_para_parametros)
        // console.log("IMPRIMIENDO BLOQUE METODO");        
        // console.log(res);
        // console.log("IMPRIMIENDO BLOQUE METODO");
        if (x.retorno != null && res != undefined) {
            // const valorRetorno = null
            // console.log("DESDE LLAMADA");
            // console.log(valorRetorno);
            // console.log("DESDE LLAMADA");
            if (x.retorno == res.type) {
                                
                return {
                    value: res.value,
                    type: res.type
                }                
            }


            // console.log(res.executar(env_para_parametros).express?.executar(env_para_parametros));
            
        }
        

        

    }
}

