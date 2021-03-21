import {Vehiculo} from "./vehiculo";

/**
 * **Clase Bicicletas**
 * Se ha realizado la herencia de la clase Movable
 */

export class Bicicletas extends Vehiculo{
    /**
     * constructor de la clase Bicicletas
     * @param nombre nombre del vehiculo
     * @param velocidad velocidad que circula
     * @param ruedas numero de ruedas del vehiculo
     * @param nPersonas capacidad de trasportar el vehiculo
     */
    constructor(public nombre:string, public velocidad:number, public ruedas:number, public nPersonas:number){
        super(nombre, velocidad, ruedas, nPersonas);
    }
}