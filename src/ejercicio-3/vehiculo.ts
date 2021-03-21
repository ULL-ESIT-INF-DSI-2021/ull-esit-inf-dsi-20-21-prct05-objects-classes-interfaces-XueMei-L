import {Movable} from "./movable";

/**
 * Clase Vehiculo (Padre)
 * Implemente la interfaz Movable
 */

export class Vehiculo implements Movable {
    public name:string;
    public velocidad:number;
    public nRuedas:number;
    public nPersonas:number;
    constructor(name:string, velocidad:number, nRuedas:number, nPersonas:number){
        this.name = name;
        this.velocidad = velocidad;
        this.nRuedas = nRuedas;
        this.nPersonas = nPersonas;
    }
}