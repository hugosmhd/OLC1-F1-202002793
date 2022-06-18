import { Break } from './instrucciones/break';
import { Issue } from './error/issue';
import nodo from './grafo/nodo';
import { Singleton } from './patron_singleton/singleton';
import { Environment } from './symbols/enviroment';

const singleton = Singleton.getInstance()
const parser = require('./gramatica/gramatica');
const fs = require("fs");

try {
    const entrada = fs.readFileSync("src/entrada.txt");
    const ast = parser.parse(entrada.toString());
    const env_padre = new Environment(null);
    //aqui analisis semantico
    // console.log("Hola ya esta")

    ast.map((element: any) => {
        const res = element.executar(env_padre)
        if (res instanceof Break) {
            console.log("Error break fuera de su lugar")
            console.log(res);                
        }
    });

    // for (const elemento  of ast) {
    //     try {            
    //         const res = elemento.executar(env_padre)
    //         if (res instanceof Break) {
    //             console.log("Error break fuera de su lugar")
    //             console.log(res);                
    //         }
    //     } catch (error) {
    //         // console.log(error);
    //         if (error instanceof Issue) {
    //             singleton.add_errores(error)                
    //         }
            
    //     }
    // }

    var instrucciones = new nodo("INSTRUCCIONES");
    for(const instruccion of ast) {
        instrucciones.agregarHijo_nodo(instruccion.getNodo());
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
    


} catch (error) {
    console.log(error);
    
}


var dot = ''
var c = 0;

function getDot(raiz:nodo)
{
    dot = "";
    dot += "digraph {\n";
    dot += "n0[label=\"" + raiz.getValor().replace("\"", "\\\"") + "\"];\n";
    c = 1;
    recorrerAST("n0",raiz);
    dot += "}";
    return dot;
}

function recorrerAST(padre:String, nPadre:nodo)
{
    for(let hijo of nPadre.getHijos())
    {
        var nombreHijo = "n" + c;
        dot += nombreHijo + "[label=\"" + hijo.getValor().replace("\"", "\\\"") + "\"];\n";
        dot += padre + "->" + nombreHijo + ";\n";
        c++;
        recorrerAST(nombreHijo,hijo);
    }
}