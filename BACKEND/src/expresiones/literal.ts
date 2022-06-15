import { Expression } from "../abstract/express"
import { Retorno } from "../abstract/retorno"
import nodo from "../grafo/nodo";
import { Type } from "../symbols/type"


export class Literal extends Expression {

    constructor(
        private value: any,
        private type: Type,
        line: number,
        column: number
    ) {
        super(line, column)
    }

    public getNodo() {
        var nodoDec = new nodo(this.value);
        // nodoDec.agregarHijo(this.tipo + "");
        // nodoDec.agregarHijo(this.nombre[0]);
        // nodoDec.agregarHijo2(this.expresion.getNodo());
        return nodoDec;
    }

    public executar(): Retorno {
        
        // console.log(this.value)
        // console.log(Number.isInteger(Number(this.value)))
        if (this.type == Type.INT && Number.isInteger(Number(this.value))) {
            return { value: Number(this.value), type: Type.INT }
        }
        else if (this.type == Type.STRING)
            return { value: this.value, type: Type.STRING }        
        else if (this.type == Type.CHAR)
            return { value: this.value, type: Type.CHAR }        
        else if (this.type == Type.BOOLEAN) {
            if (this.value == "true") return { value: Boolean(true), type: Type.BOOLEAN }
            else return { value: Boolean(false), type: Type.BOOLEAN }
        }
        else if (this.type == Type.DOUBLE) {
            // console.log("----ENTRO EN EL DOUBLE------")
            // console.log(this.value)
            return { value: parseFloat(this.value), type: Type.DOUBLE }
        }
        else return { value: this.value, type: Type.error }

    }
}