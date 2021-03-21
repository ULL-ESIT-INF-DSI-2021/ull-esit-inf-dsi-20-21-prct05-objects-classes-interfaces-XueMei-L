import {Vehiculo} from "./vehiculo";

/**
 * **Clase Trenes**
 * Se ha realizado la herencia de la clase Movable
 */
export class Trenes extends Vehiculo{
    /**
     * constructor de la clase Trenes
     * @param name nombre del vehiculo
     * @param velocidad velocidad que circula
     * @param nRuedas   numero de ruedas del vehiculo
     * @param nPersonas capacidad de trasportar el vehiculo
     */    
    constructor(public name:string, public velocidad:number, public nRuedas:number, public nPersonas:number){
        super(name, velocidad, nRuedas, nPersonas);
    }
}