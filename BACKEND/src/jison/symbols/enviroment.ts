import { Singleton } from '../patron_singleton/singleton';
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
    const single = Singleton.getInstance()
    var tabla = `<h4>TABLA DE SIMBOLOS DE VARIABLES No.${single.get_ts()}</h4> ` +
    "<table class=\"table\">"
    tabla += 
    "<thead class=\"thead-dark\" style=\"background: #2C3E50; color: white\">" +
      "<tr>" +
        "<th scope=\"col\">ID</th>" + 
        "<th scope=\"col\">Tipo</th>" + 
        "<th scope=\"col\">Valor</th>" +
        "<th scope=\"col\">Editable</th>" +
      "</tr>" + 
    "</thead>" +
    "<tbody>"
    var ts_variables: any = []
    let env: Environment | null = this;
    var contador = 0; 
    while (env != null) {
      var ts_bloque: any = []
      contador++
      var bloque = {
        noBloque: contador,
        data: []
      }
      for (let entry of Array.from(env.tablaSimbolos.entries())) {
        tabla += 
        "<tr>" +
          `<th scope=\"row\">${entry[1].id}</th>` +
          `<td>${tipoString(entry[1].type)}</td>` +
          `<td>${entry[1].value}</td>` +
          `<td>${entry[1].editable}</td>` +
        `</tr>`
        ts_bloque.push({
          id: entry[1].id,
          value: entry[1].value,
          type: tipoString(entry[1].type),
          editable: entry[1].editable
        })
      }
      for (let entry of Array.from(env.tablaSimbolos_vectores.entries())) {
        tabla += 
        "<tr>" +
          `<th scope=\"row\">${entry[1].id}</th>` +
          `<td>${tipoString(entry[1].type)} []</td>` +
          `<td>${entry[1].value}</td>` +
          `<td>true</td>` +
        `</tr>`
        ts_bloque.push({
          id: entry[1].id,
          value: entry[1].value,
          type: tipoString(entry[1].type),
          editable: entry[1].editable
        })
      }
      bloque.data = ts_bloque
      ts_variables.push(bloque)
      
      env = env.anterior;
      if (env != null) {
        tabla += 
        "<thead class=\"thead-light\" style=\"background: #EAEDED; color: #566573\">" +
          "<tr>" +
            "<th scope=\"col\">ID</th>" + 
            "<th scope=\"col\">Tipo</th>" + 
            "<th scope=\"col\">Valor</th>" +
            "<th scope=\"col\">Editable</th>" +
          "</tr>" + 
        "</thead>"
      }
    }
    tabla += "</tbody>"
    tabla += "</table>"
    tabla += "<br>"
    // console.log(tabla);
    
    return tabla
    

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
    
  }



  public actualizar_variable(nombre: string, new_valor: any): boolean {

    let env: Environment | null = this;
    while (env != null) {
      for (let entry of Array.from(env.tablaSimbolos.entries())) {
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
