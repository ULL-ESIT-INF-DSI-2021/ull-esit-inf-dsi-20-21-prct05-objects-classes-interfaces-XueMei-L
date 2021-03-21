import {Coches} from './coches';
import {Motos} from './motos';
import {Patinetes} from './patinetes';
import {Trenes} from './trenes';
import {Guaguas} from './guaguas';
import {Bicicletas} from './bicicletas';
import {Peatones} from './peatones';
import {Vehiculo} from "./vehiculo";

export class Street{
    private nameStreet:string;
    private location:string;
    private vehiculos:Vehiculo[];
    constructor(nameStreet:string, location:string, vehiculos:Vehiculo[]){
        this.nameStreet = nameStreet;
        this.location = location;
        this.vehiculos = vehiculos;
    }

    getStreet() { return this.nameStreet; }
    getLocation() { return this.location; }
    getvehiculos() { return this.vehiculos; }

    public Count(){
        let count:number[] = [0, 0, 0, 0, 0, 0, 0];
        this.vehiculos.forEach(element => {
            if(element instanceof Coches){ count[0]++; }
            if(element instanceof Motos){ count[1]++; }
            if(element instanceof Patinetes){ count[2]++; }
            if(element instanceof Trenes){ count[3]++; }
            if(element instanceof Guaguas){ count[4]++; }
            if(element instanceof Bicicletas){ count[5]++; }
            if(element instanceof Peatones){ count[6]++; }   
        });
        console.log(`hay ${count[0]} de coche`);
        console.log(`hay ${count[1]} de moto`);
        console.log(`hay ${count[1]} de patinete`);
        console.log(`hay ${count[3]} de trenes`);
        console.log(`hay ${count[4]} de guagua`);
        console.log(`hay ${count[5]} de bicicleta`);
        console.log(`hay ${count[6]} de peaton`);
    }

    public anadirVehiculo(vehiculosNuevo:Vehiculo){
        this.vehiculos.push(vehiculosNuevo);
    }

    public deleteVehiculo(vehiculosDelete:Vehiculo){
        let index = this.vehiculos.indexOf(vehiculosDelete);
        this.vehiculos.splice(index, 1);
    }

    public showVehiculosVelocidad(){
        let result:Vehiculo;
        let temp = this.vehiculos[0];
        for(let i = 0; i < this.vehiculos.length - 1; i++){
            for(let j = 0; j < this.vehiculos.length - i - 1; j++){
                if(this.vehiculos[j].velocidad < this.vehiculos[j+1].velocidad){
                    temp = this.vehiculos[j];
                    this.vehiculos[j] = this.vehiculos[j+1];
                    this.vehiculos[j+1] = temp;
                }
            }
        }
    }

}