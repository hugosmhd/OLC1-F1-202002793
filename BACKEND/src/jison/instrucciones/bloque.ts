import { Continue } from './continue';
import { Return } from './return';

import { Break } from "./break"
import { Instruccion } from '../abstract/instruccion';
import nodo from '../grafo/nodo';
import { Environment } from '../symbols/enviroment';


export class Bloque extends Instruccion {
    constructor(
        
        public instrucciones : Instruccion[] | null,
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public getNodo() {
            
        var nodoDec = new nodo("BLOQUE");
        if (this.instrucciones != null) {
            for (const elemento  of this.instrucciones) {
                nodoDec.agregarHijo_nodo(elemento.getNodo())
            }
            
        }
        return nodoDec;
    }


    public executar(env:Environment) {

        //analisis semantivo 

        const new_env= new Environment(env);


        // como acceder a otras tablas de simbolos padres
        // while(env!=null){
        //     //busqueda de dla variblea
        //     env = env.anterior
        // }

        if (this.instrucciones != null) {
            for (const elemento  of this.instrucciones) {
                try {
                    
                    var res = elemento.executar(new_env)
                    if (res instanceof Break || res instanceof Continue) {
                        return res
                    }
                    if (res instanceof Return ) {
                        
                        return res.express?.executar(new_env);
                    }
                    
                } catch (error) {
                    //console.log(error);
                    
                }
            }
        }

        
    }
}