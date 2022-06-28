import { Issue } from "../error/issue";
 
export class Singleton {

    private static instance: Singleton

    private consola: string = ""
    private errores: any[] = []
    private grafica_ts: string = "" 
    private no_grafica_ts: number = 0 

    
    constructor() {
    }


    public static getInstance() :Singleton
    {
        if (!Singleton.instance) {
            Singleton.instance = new Singleton();
        }
        return Singleton.instance;
    }


    public add_consola(data: string) {
        this.consola += data
    }

    public get_consola(): string {
        return this.consola
    }

    public limpiar_consola() {
        this.consola = "";
    }

    public limpiar_errores() {
        this.errores = [];
    }

    public limpiar_grafica_ts() {
        this.grafica_ts = "";
    }

    public add_errores(data: any) {
        this.errores.push(data)
    }

    public get_errores():any[] {
        return this.errores
    }

    public add_grafica_ts(data: string) {
        this.grafica_ts += data;
    }

    public get_grafica_ts() {
        return this.grafica_ts;
    }

    public get_ts() {
        this.no_grafica_ts++   
        return this.no_grafica_ts     
    }

    public limpiar_ts() {
        this.no_grafica_ts = 0
    }

}