export class Issue {

    private tipo: any;
    private descripcion: any;
    private fila: any;
    private columna: any;

    constructor(
        tipo: any, 
        descripcion:any, 
        fila:any, 
        columna:any
    )
    {
        this.tipo = tipo;
        this.descripcion = descripcion;
        this.fila = fila;
        this.columna = columna;
    }

    public getTipo():String {
        return this.tipo;
    }

    public getDesc():String {
        return this.descripcion;
    }

    public getFila():Number {
        return this.fila;
    }

    public getColumna():Number {
        return this.columna;
    }
}