import { Expression } from "../abstract/express";
import { Instruccion } from "../abstract/instruccion";
import nodo from "../grafo/nodo";
import { Environment } from "../symbols/enviroment";
import { Type, tipoString } from "../symbols/type";

export class Declaracion extends Instruccion {
    constructor(
        public nombre: string[],
        public tipo: Type,
        public expresion : Expression,
        line: number, 
        column : number
    ) {
        super(line,column);
        
    }

    public getNodo() {
        var nodoDec = new nodo("DECLARACION");
        var tipoStr = tipoString(this.tipo);
        

        tipoStr != null?nodoDec.agregarHijo(tipoStr):tipoStr;
        this.nombre.forEach(id => {
            nodoDec.agregarHijo(id);
        });
        nodoDec.agregarHijo_nodo(this.expresion.getNodo());
        return nodoDec;
    }

    public executar(env:Environment) {
        for (const elemento  of this.nombre) {
            try {
                //codigo analisis semantico
                const expresion= this.expresion.executar(env);
                // console.log(expresion.type)
                // console.log(this.tipo)

                if (expresion.type == this.tipo) {
                    console.log("Declarando nueva variable: "+ elemento);
                    // console.log(this);


                    console.log(expresion);
                    

                    //preguntar si la variable esta libre
                    //si los tipos son correctos o hacen match

                    // if(x.type==){
                    //     //ingreso de la variable a la tabla simbolos
                    // }
                    // else{
                    //     //reporte de error semantico
                    // }

                    env.guardar_variable(elemento,expresion.value,expresion.type)
                    
                }
                
            } catch (error) {
                console.log(error);
                
            }
        }
        
        

        
    }
}