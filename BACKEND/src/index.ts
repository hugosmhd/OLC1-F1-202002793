
const parser = require('./gramatica/gramatica');
const fs = require("fs");

try {
    const entrada = fs.readFileSync("src/entrada.txt");
    const ast = parser.parse(entrada.toString());
    //aqui analisis semantico
    console.log("Hola ya esta")


} catch (error) {
    console.log(error);
    
}