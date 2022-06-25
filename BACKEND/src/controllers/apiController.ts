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
        // const entrada = requ.body.entrada;
        const entrada = fs.readFileSync("src/entrada.txt");
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
                        console.log(res);                
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
            // console.log(instruccion);
            try {

                instrucciones.agregarHijo_nodo(instruccion.getNodo());
            } catch (error) {
                // console.log(error);
                // if (error instanceof Issue) {
                //     singleton.add_errores(error)                
                // }
                
            }
        }
        var grafo = '';
        grafo = getDot(instrucciones);
        console.log(grafo)
        const array = singleton.get_errores()
        console.log("---- ERRORES ----")
        // console.log(new Issue("Lexico", "Caracter que lo proboco", 2, 3))
        // Singleton.getInstance().add_errores(new Issue("Lexico", "Caracter que lo proboco", 2, 3))
    
        array.forEach(elementos => {
            console.log(elementos)
        });

        response.send({
          traduccion : singleton.get_consola(),
          arbol : grafo,
          errores: singleton.get_errores(),
          ts_variables: env_padre.getEnvVariables(),
          ts_metodos: env_padre.getEnvMetodos()
      });
      singleton.limpiar_consola()
      singleton.limpiar_errores()
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



// //A continuacion un archivo de entrada para el curso de "olc1"
// //Este es un comentario de una linea :)
// //INICIANDO--------------------------------------------
// /*******        
//     ****Universidad San Carlos de Guatemala
//         Facultad de Ingenieria /n
//         Escuela de vacasiones Junio 2022
//         LFScript
// ****/
// print("SENTENCIA DECLARACION :--------------------------");
// double calificacion=0.0;

// //AREA DE DECLARACIONES DE VARIABLES GLOBALES
// int numero = 12;
// int a,b,c,d = 2022;
// int numero_tres_ = numero;

// doublE decimal_uno = -0.235;
// double e,f,g,h,i= 20.22+12;
// double ee,ff,gg,hh,ii= 20.22+12+e;
// double jj= 100.01; 

// char caracter_uno = 'A' ;
// char caracter_uno_uno = '1' ;
// char caracter_uno_dos = 'a' ;
// char caracter_a, caracter_b, caracter__c = '8';

// boolean banderita_uno = true;
// booleaN banderita_dos = false;

// string encabezado = "HOLOWIS";
// string copia_encabezado = encabezado;
// string nombre = "compiladores";
// string nombre_dos = "organizacion";
// string nombre_tres = "-45";
// string nombre_cinco = ""; 

// print("Sentencia declaracion 1/1 status: si!...");
// calificacion= calificacion+5.0;
// print("Calificacion = "+calificacion);
// {
//     //ASIGNACIONES------
//     banderita_uno= true;
//     nombre_tres="ganare compiladores 1";
//     int numero = 13;
//     char caracter_uno = '>' ;
//     numero++;
//     numero++;
//     numero++;
//     numero++;
//     print("SENTENCIA ASIGNACION :--------------------------");
//     print("Sentencia asignacion 1/1 status: si!...");
//     calificacion= calificacion+3.0;
//     print("Calificacion= "+calificacion); 
//     {
//         int nivel_intermedio= ' '+2; //resutlado 34
//         int nivel_intermedio_dos= ' '+'>';       // NO LO PUDE HACER JAJAJA      
//         {
//             //espacio en blanco
//         }
//     }
//     {
//         caracter_uno_dos = '}' ;
//     } 
// }
// call sentencia_if();
// call sentencia_incre_decre();
// calificacion= calificacion+sentencia_switch("bcd");
// print(calificacion);

// void sentencia_if(){    
//     //este es una funcion para ver el correcto funcionamiento del metodo
//     print("SENTENCIA IF :--------------------------");
//     int anio= 2022;
//     int pasos= 6;
//     int tmp=0;
    
//     if(true){
//         print("Sentencia if 1/"+pasos+" status: si!...");
//         tmp= tmp+0.5;
//     }
//     if(false){
//         print("Sentencia if 1/"+pasos+" status: no!...");
//         tmp= tmp-0.5;
//     }
    
//     if(anio-22==2000){
//         print("Sentencia if 2/"+pasos+" status: si!...");
//         anio=1945; //aqui cambia valor
//         tmp= tmp+0.5;
//     }
    
//     if(anio==2000+22){
//         print("Sentencia if 3/"+pasos+" status: nooo!...");
//     }else if(anio+1== 2000){
//         print("Sentencia if 3/"+pasos+" status: nooo!...");
//     }else{
//         print("Sentencia if 3/"+pasos+" status: si!...");
//         tmp= tmp+1.0;
//     }

//     if(anio==20+228*8){
//         print("Sentencia if 4/"+pasos+" status: nooo!...");
//     }else if(anio== 1945){
//         print("Sentencia if 4/"+pasos+" status: si!...");
//         tmp= tmp+0.5;
//         anio= 2022;
//     }else{
//         print("Sentencia if 4/"+pasos+" status: nooo!...");
//     }

//     if(anio==145/8*9)    print("Sentencia if 5/"+pasos+" status: nooo!...");
//     else if(anio== 2022) print("Sentencia if 5/"+pasos+" status: si!...");
//     else                 print("Sentencia if 5/"+pasos+" status: nooo!...");

//     if (anio==2022) tmp= tmp+0.5;

//     anio= 2023;

//     if(anio==145/8*9)    print("Sentencia if 6/"+pasos+" status: nooo!...");
//     else if(anio== 2023) print("Sentencia if 6/"+pasos+" status: si!...");
//     else                 print("Sentencia if 6/"+pasos+" status: nooo!...");

//     if (anio==2022+1) tmp= tmp+1.0;

//     calificacion= calificacion+tmp;
//     print("Calificacion= "+calificacion);
// }

// void sentencia_incre_decre(){
//     print("SENTENCIA INCRE DECRE :--------------------------");
//     int tmp=0;
//     int num=10;
//     int num_num=10;
//     num++;
//     ++num;
//     --num_num;
//     if(num==12){
//         print("Sentencia if 1/2 status: si!...");
//         tmp= tmp+1.0;
//     }
//     if(num_num==9){
//         print("Sentencia if 2/2 status: si!...");
//         tmp= tmp+1.0;
//     }
//     calificacion= calificacion+tmp;
//     print("Calificacion= "+calificacion);
// }

// int sentencia_switch(int valor){
//     print("SENTENCIA SWITCH :--------------------------");
//     int tmp=0;
//     switch(valor){
//         case "abc":
//             print("Sentencia switchs 1/3 status: no!...");
//             break;
//         case "bcd":
//             print("Sentencia switchs 1/3 status: si!...");
//             tmp= tmp+1;
//             break;
//         case "cde":
//             print("Sentencia switchs 1/3 status: no!...");
//             break;
//     }
//     //valor = 159;
//     string val = "olc";
//     switch(val){
//         case "edd":
//             print("Sentencia switchs 2/3 status: no!...");
//             break;
//         case "orga":
//             print("Sentencia switchs 2/3 status: no!...");
//             break;
//         default:
//             print("Sentencia switchs 2/3 status: si!...");
//             tmp= tmp+2;
//             break;
//     }
//     int numero_test=1945;
//     switch(numero_test){
//         case 1944:
//             print("Sentencia switchs 3/3 status: no!...");
//             break;
//         case 1945:
//             int test=30;
//         case 1945:
//             print("Sentencia switchs 3/3 status: si!...");
//             tmp++;
//             break;
//         default:
//             print("Sentencia switchs 3/3 status: no!...");
//             break;
//     }
//     return tmp;
// }