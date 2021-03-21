import {Movable} from "./movable";
import { Vehiculo } from "./vehiculo";

/**
 * **Clase Patinetes**
 * Se ha realizado la herencia de la clase Movable
 */
export class Patinetes extends Vehiculo{
    /**
     * constructor de la clase Patinetes
     * @param nombre nombre del vehiculo
     * @param velocidad velocidad que circula
     * @param nRuedas   numero de ruedas del vehiculo
     * @param nPersonas capacidad de trasportar el vehiculo
     */
    constructor(public nombre:string, public velocidad:number, public nRuedas:number, public nPersonas:number){
        super(nombre, velocidad, nRuedas, nPersonas);
    }
}