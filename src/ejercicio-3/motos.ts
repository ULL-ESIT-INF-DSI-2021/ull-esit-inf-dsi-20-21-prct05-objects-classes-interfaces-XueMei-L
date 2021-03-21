import {Vehiculo} from "./vehiculo";

/**
 * **Clase Motos**
 * Se ha realizado la herencia de la clase Movable
 */
export class Motos extends Vehiculo{
    /**
     * constructor de la clase Motos
     * @param nombre nombre del vehiculo
     * @param velocidad velocidad que circula
     * @param nRuedas   numero de ruedas del vehiculo
     * @param nPersonas capacidad de trasportar el vehiculo
     */
    constructor(public nombre:string, public velocidad:number, public nRuedas:number, public nPersonas:number){
        super(nombre, velocidad, nRuedas, nPersonas);
    }
}