
import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";
import { Break } from "./break"


export class BloqueBreak extends Instruccion {
    constructor(
        
        public instrucciones : any[],
        line: number, 
        column : number
    ) {
        super(line,column);
    }

    public getNodo() {
            
        var nodoDec = new nodo("");
        // nodoDec.agregarHijo(this.l);
        // nodoDec.agregarHijo(this.nombre[0]);
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


        for (const elemento  of this.instrucciones) {
            // console.log("DESDE EL BLOQUE JAJAJ")
            try {
                
                var res = elemento.executar(new_env)
                if (res instanceof Break ) {
                    return res
                }
                
            } catch (error) {
                //console.log(error);
                
            }
        }

        
    }
}