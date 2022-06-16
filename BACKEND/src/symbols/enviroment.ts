import { Symbol } from "./symbols";
import { Type } from "./type";

export class Environment {
  
  private tablaSimbolos: Map<string, Symbol>; //unicamente para variables, tienes q guardar funciones en otro map 
  private tablaSimbolos_metodos: Map<string, any>; //unicamente para metodos o funciones
  
  constructor(public anterior: Environment | null) {
    this.tablaSimbolos = new Map();
    this.tablaSimbolos_metodos = new Map();
  }

  public getEnv(){
    return this.tablaSimbolos
  }

  public guardar_variable(nombre: string, valor: any, type: Type): boolean {
    
    if(!this.buscar_variable(nombre)){
      this.tablaSimbolos.set(nombre, new Symbol(valor, nombre, type));
      return true
    }
    console.log("esta variable ["+nombre+"] ya existe...");
    return false
  }

  public buscar_variable(nombre: string): boolean {
    for (let entry of Array.from(this.tablaSimbolos.entries())) {
        if (entry[0] == nombre) return true;
    }
    return false
  }
  public getTipo_variable(nombre: string): Type {
    for (let entry of Array.from(this.tablaSimbolos.entries())) {
        if (entry[0] == nombre) return entry[1].type;
    }
    return Type.error
  }

  public get_variable(nombre: string): Symbol | undefined | null {
    let env: Environment | null = this;
    while (env != null) {
        if (env.tablaSimbolos.has(nombre)) return env.tablaSimbolos.get(nombre);
        env = env.anterior;
    }
    return null;
  }

  public get_env(nombre: string): Environment | undefined | null {
    let env: Environment | null = this;
    while (env != null) {
        if (env.tablaSimbolos.has(nombre)) return env;
        env = env.anterior;
    }
    return null;
  }

  public guardar_funcion(nombre: string, valor:any) {
    
    //verificar que no existan duplicados
    this.tablaSimbolos_metodos.set(nombre, valor);
    console.log(this.tablaSimbolos_metodos);
    
  }



  public actualizar_variable(nombre: string, new_valor: any) {
    for (let entry of Array.from(this.tablaSimbolos.entries())) {
      if (entry[0] == nombre) {
          entry[1].value = new_valor;
      }
  }
  }
  
}
