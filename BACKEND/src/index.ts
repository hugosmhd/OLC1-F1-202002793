import nodo from './grafo/nodo';
import { Environment } from './symbols/enviroment';

const parser = require('./gramatica/gramatica');
const fs = require("fs");

try {
    const entrada = fs.readFileSync("src/entrada.txt");
    const ast = parser.parse(entrada.toString());
    const env_padre = new Environment(null);
    //aqui analisis semantico
    // console.log("Hola ya esta")
    for (const elemento  of ast) {
        try {
            
            elemento.executar(env_padre)
        } catch (error) {
            console.log(error);
            
        }
    }

    var instrucciones = new nodo("INSTRUCCIONES");
    for(const instruccion of ast) {
        instrucciones.agregarHijo_nodo(instruccion.getNodo());
    }
    var grafo = '';
    grafo = getDot(instrucciones);
    console.log(grafo)
    


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