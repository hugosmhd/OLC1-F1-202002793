export class CaseSwitch {
    
    private tipoCaso: any;
    private expresion: any;
    private instrucciones: any;
    private fila: any;
    private columna: any;

    constructor(
        tipoCaso: any, 
        expresion:any, 
        instrucciones:any, 
        fila:any, 
        columna:any
    )
    {
        this.tipoCaso = tipoCaso;
        this.expresion = expresion;
        this.instrucciones = instrucciones;
        this.fila = fila;
        this.columna = columna;
    }

    // public getTipo():String {
    //     return this.tipo;
    // }

    // public getDesc():String {
    //     return this.descripcion;
    // }

    // public getFila():Number {
    //     return this.fila;
    // }

    // public getColumna():Number {
    //     return this.columna;
    // }
}