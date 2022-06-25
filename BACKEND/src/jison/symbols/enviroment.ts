import { Metodo } from './../instrucciones/metodo';
import { Symbol, Symbol_vector } from "./symbols";
import { tipoString, Type } from "./type";

export class Environment {
  
  private tablaSimbolos: Map<string, Symbol>; //unicamente para variables, tienes q guardar funciones en otro map 
  private tablaSimbolos_metodos: Map<string, any>; //unicamente para metodos o funciones
  private tablaSimbolos_vectores: Map<string, any>;
  
  constructor(public anterior: Environment | null) {
    this.tablaSimbolos = new Map();
    this.tablaSimbolos_metodos = new Map();
    this.tablaSimbolos_vectores = new Map();
  }

  /**
   * limpiarTablas
   */
  public limpiarTablas() {
    this.tablaSimbolos.clear();
    this.tablaSimbolos_metodos.clear();
  }

  public getEnv(){
    return this.tablaSimbolos
  }

  public getEnvVariables() {
    var ts_variables = []
    for (let entry of Array.from(this.tablaSimbolos.entries())) {
      ts_variables.push({
        id: entry[1].id,
        value: entry[1].value,
        type: tipoString(entry[1].type),
        editable: entry[1].editable
      })
    }
    return ts_variables

  }

  public getEnvMetodos(){
    var ts_metodos = []
    for (let entry of Array.from(this.tablaSimbolos_metodos.entries())) {
      ts_metodos.push(entry[0])
    }
    return ts_metodos

  }

  public guardar_variable(nombre: string, valor: any, type: Type, editable: boolean): boolean {
    
    if(!this.buscar_variable(nombre)){
      this.tablaSimbolos.set(nombre, new Symbol(valor, nombre, type, editable));
      return true
    }
    console.log("esta variable ["+nombre+"] ya existe...");
    return false
  }

  public guardar_array(nombre: string, valor: any, type: Type): boolean {
    
    if(!this.buscar_variable(nombre)){
      this.tablaSimbolos_vectores.set(nombre, new Symbol_vector(valor, nombre, type));
      return true
    }
    console.log("este vector | array ["+nombre+"] ya existe...");
    return false
  }

  public get_array(nombre: string): Symbol_vector | undefined {
    let env: Environment | null = this
    while (env != null) {
        if (env.tablaSimbolos_vectores.has(nombre)) return env.tablaSimbolos_vectores.get(nombre)
        env = env.anterior
    }
    return undefined
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
        if (env.tablaSimbolos_vectores.has(nombre)) return env.tablaSimbolos_vectores.get(nombre);
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
    // console.log(this.tablaSimbolos_metodos);
    
  }



  public actualizar_variable(nombre: string, new_valor: any): boolean {
    // console.log("ES EDITABLE??");
    // console.log("ES EDITABLE??");
    // console.log(this.tablaSimbolos);

    let env: Environment | null = this;
    while (env != null) {
      for (let entry of Array.from(env.tablaSimbolos.entries())) {
        // console.log(entry[1].editable);        
        
        if (entry[0] == nombre && entry[1].editable) {
            entry[1].value = new_valor;
            return true
        }
      }
      env = env.anterior;
      
    }
    
    return false
  }

  public get_metodo(nombre: string): Metodo | undefined | null {
    let env: Environment | null = this;
    while (env != null) {
        if (env.tablaSimbolos_metodos.has(nombre)) return env.tablaSimbolos_metodos.get(nombre);
        env = env.anterior;
    }
    return null;
  }
  
}
