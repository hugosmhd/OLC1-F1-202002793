import { Request, Response } from "express";

import nodo from "../jison/grafo/nodo";
import { Break } from "../jison/instrucciones/break";
import { Funcion } from "../jison/instrucciones/funcion";
import { Metodo } from "../jison/instrucciones/metodo";
import { Singleton } from "../jison/patron_singleton/singleton";
import { Environment } from "../jison/symbols/enviroment";

class ApiController {
  public ejecutar (requ:Request,response:Response) {
    const singleton = Singleton.getInstance()
    const parser = require('../jison/gramatica/gramatica');
    const fs = require("fs");
    
    try {
        const entrada = requ.body.entrada;
        // const entrada = fs.readFileSync("src/entrada.txt");
        const ast = parser.parse(entrada.toString());
        const env_padre = new Environment(null);
        //aqui analisis semantico
        // console.log("Hola ya esta")
        // console.log
    
        ast.map((element: any) => {
            
            if ((element instanceof Metodo) || (element instanceof Funcion)) {
                const res = element.executar(env_padre)
                
            }
            // console.log("--- DESDE EL INDEX");
            // console.log(element);
            
            
            // console.log(res);
            // console.log("--- DESDE EL INDEX");
            
            // if (res instanceof Break) {
            //     console.log("Error break fuera de su lugar")
            //     console.log(res);                
            // }
        });
    
        for (const elemento  of ast) {
            try {            
                if (!(elemento instanceof Metodo) && !(elemento instanceof Funcion)) {
                    const res = elemento.executar(env_padre)
                    
                    if (res instanceof Break) {
                        console.log("Error break fuera de su lugar")
                    }
                }
            } catch (error) {
                // console.log(error);
                // if (error instanceof Issue) {
                //     singleton.add_errores(error)                
                // }
                
            }
        }
    
        var instrucciones = new nodo("INSTRUCCIONES");
        for(const instruccion of ast) {
            try {

                instrucciones.agregarHijo_nodo(instruccion.getNodo());
            } catch (error) {
                // if (error instanceof Issue) {
                //     singleton.add_errores(error)                
                // }
                
            }
        }
        var grafo = '';
        grafo = getDot(instrucciones);
        const array = singleton.get_errores()
        console.log("---- ERRORES ----")
    
        array.forEach(elementos => {
            console.log(elementos)
        });

        const grafica_ts = singleton.get_grafica_ts()

        response.send({
          traduccion : singleton.get_consola(),
          arbol : grafo,
          errores: singleton.get_errores(),
          ts_variables: env_padre.getEnvVariables(),
          ts_metodos: env_padre.getEnvMetodos(),
          grafica_ts
      });

    //   grafica_ts.forEach((element: any[]) => {
    //     console.log("---------- GRAFICA TS ----------");
        
    //     element.forEach(objetos => {
    //         console.log(objetos);            
    //     });
        
    //   });
      
      singleton.limpiar_consola()
      singleton.limpiar_errores()
      singleton.limpiar_grafica_ts()
      singleton.limpiar_ts()
      env_padre.limpiarTablas()
    //   grafo = "";
        
    
    
    } catch (error) {
        console.log(error);
        
    }
    
    
    var dot = ''
    var c = 0;
    
    function getDot(raiz:nodo)
    {
        dot = "";
        dot += "digraph grph {\n";
        dot += "nodo0[label=\"" + raiz.getValor().replace("\"", "\\\"") + "\"];\n";
        c = 1;
        recorrerAST("nodo0",raiz);
        dot += "}";
        return dot;
    }
    
    function recorrerAST(padre:String, nPadre:nodo)
    {
        for(let hijo of nPadre.getHijos())
        {
            var nombreHijo = "nodo" + c;
            dot += nombreHijo + "[label=\"" + hijo.getValor() + "\"];\n";
            dot += padre + "->" + nombreHijo + ";\n";
            c++;
            recorrerAST(nombreHijo,hijo);
        }
    }

  }

}

export const apiController = new ApiController();
