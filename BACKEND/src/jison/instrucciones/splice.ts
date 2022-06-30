import { Environment } from '../symbols/enviroment';
import nodo from "../grafo/nodo";
import { Type } from '../symbols/type';
import { Instruccion } from '../abstract/instruccion';
import { Expression } from '../abstract/express';
import { Singleton } from '../patron_singleton/singleton';
import { Issue } from '../error/issue';

export class Splice extends Instruccion {
  constructor(
    public identificador: string,
    public index: Expression,
    public expresion: Expression,
    line: number,
    column: number
  ) {
    super(line, column);    
  }

  public getNodo() {
    var nodoDec = new nodo("SPLICE");
    nodoDec.agregarHijo(this.identificador)
    nodoDec.agregarHijo_nodo(this.index.getNodo())
    nodoDec.agregarHijo_nodo(this.expresion.getNodo())
    return nodoDec;
}

  public executar(env: Environment) {  
    const vector = env.get_array(this.identificador)
    if(vector == null || vector == undefined) throw Singleton.getInstance().add_errores(new Issue("Semantico", `Error en la expresion splice no existe el vector con id ${this.identificador}`, this.line, this.column))
    const ind = this.index.executar(env)
    if(ind == null || ind.type != Type.INT) throw Singleton.getInstance().add_errores(new Issue("Semantico", `Verifique que el indice del vector sea de tipo int`, this.line, this.column))
    const expres = this.expresion.executar(env)
    if(expres == null) throw Singleton.getInstance().add_errores(new Issue("Semantico", `Verifique que la expresion exista`, this.line, this.column))
    if(expres.type != vector.type) throw Singleton.getInstance().add_errores(new Issue("Semantico", `El tipo del vector no coincide con la expresion`, this.line, this.column))
    
    vector.value.splice(ind.value, 0, expres.value)
  }
}
