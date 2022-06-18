import { Issue } from './../error/issue';
import { Singleton } from './../patron_singleton/singleton';
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
        public isConstant : boolean,
        line: number, 
        column : number
    ) {
        super(line,column);        
    }

    public getNodo() {
        var nodoDec = new nodo("DECLARACION");
        var tipoStr = tipoString(this.tipo);
        

        this.isConstant?null:nodoDec.agregarHijo("const");
        tipoStr != null?nodoDec.agregarHijo(tipoStr):tipoStr;
        this.nombre.forEach(id => {
            nodoDec.agregarHijo(id);
        });
        nodoDec.agregarHijo_nodo(this.expresion.getNodo());
        return nodoDec;
    }

    /**
     * setConstant
valor: boolea     */
    public setConstant(isConstant: boolean) {
        this.isConstant = isConstant;
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
                    
                    env.guardar_variable(elemento,expresion.value,expresion.type, this.isConstant)
                    
                } else {
                    Singleton.getInstance().add_errores(new Issue("Semantico", "El tipo de dato declarado no coincide con la expresion", this.line, this.column))
                    // console.log("Error semantico no coinciden los tipos")
                }
                
            } catch (error) {
                // console.log(error);
                
            }
        }
        
        

        
    }
}