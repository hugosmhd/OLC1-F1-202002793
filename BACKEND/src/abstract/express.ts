import { Retorno } from "./retorno"
import { Environment } from "../symbols/enviroment"
import nodo from "../grafo/nodo"

export abstract class Expression {

    constructor(public line: number, public column: number) {
        this.line = line
        this.column = column + 1
    }

    public abstract getNodo():nodo;
    public abstract executar(env:Environment): Retorno
    
}