

# Práctica 5 - Objetos, clases e interfaces

```
Universidad: Universidad de La laguna
Asignatura: Desarrollo de Sistemas Informaticos
Curso: 2020 - 2021
Autor: XueMei Lin
```

## 1. Introducción

​		El objeto en TypeScript nos permite definir tipos de datos personalizados con la composición de nuestra elección. Y El uso de las clases también es muy importante en TypeScript, ya que una clase es como una estructura predefinida que sirve como molde para crear Objetos. 

## 2. Objetivos

​		El objetivo de la practica 5, vamos a aprender como crear clases, y cómo a partir de una clases cómo crear un objeto de la clase. Además, en las clases vamos a crear atributos y métodos, con el fin de realizar una serie de ejercicios de programación que nos permitirán conocer más en profundidad los objetos, clases e interfaces del lenguaje TypeScript.

## 3. Ejercicios realizados
### 3.1. Ejercicio 1 - Pokedéx

Este ejercicio consiste en crear dos clases, por un lado la clase de `Pokémon`, donde guarda la información de los contrincantes, y por otro lado la clase de ``Combat` donde realiza la batalla entre dos contrincantes.

Más concretamente, en la clase ``Combat` he creado  `constructor` `PokemonGame` donde compara el daño que realiza cada pokemon, y después el método `start()` empieza la batalla entre dos pokemon, Tras varias rondas, si la vida de uno de ellos es negativo o 0, el ganador es el otro pokemon.

````
    //Calculate damage
    public pokemonGame(pokemon_attacker:string, pokemon_defender:string, attack:number, defense:number):number{
        let efectiveness: number = 0;
        let damage_total: number = 0;
    
        if(pokemon_attacker == pokemon_defender){
            efectiveness = 0.5;
        }else{
            switch(pokemon_attacker){
                case "fuego":
                    if(pokemon_defender == "hierba"){
                        efectiveness = 2;
                    }else if(pokemon_defender == "agua"){
                        efectiveness = 0.5;
                    }else{
                        efectiveness = 1;
                    }
                    break;
                case "agua":
                    if(pokemon_defender == "fuego"){
                        efectiveness = 2;
                    }
                    if(pokemon_defender == "hierba" || pokemon_defender == "electrico"){
                        efectiveness = 0.5;
                    }
                    break;
                case "hierba":
                    if(pokemon_defender == "fuego"){
                        efectiveness = 0.5;
                    }else if(pokemon_defender == "electrico"){
                        efectiveness = 1;
                    }else{
                        efectiveness = 2;
                    }
                    break;
                case "electrico":
                    if(pokemon_defender == "fuego" || pokemon_defender == "hierba"){
                        efectiveness = 1;
                    }else{
                        efectiveness = 2;
                    }
                    break;
            }
        }
        damage_total = 50 * ( attack / defense ) * efectiveness;
        return  parseFloat(damage_total.toFixed(2));;
    }
````

  y por otro lado el código de `start()`

````
 public start():string{
        console.log(` --- PokemonGame Start ---`);
        console.log(` --- Pokemon 1 ---`);
        this.pokemon_p1.Show();
        console.log(` --- Pokemon 2 ---`);
        this.pokemon_p2.Show();

        let Round:number = 1;
        let winner:string = "";

        while(this.pokemon_p1.getStatusHP() > 0 || this.pokemon_p2.getStatusHP() > 0) {
            let damage:number = 0;
            console.log(`Round ${Round}`);
            if(Round % 2 != 0){
                damage = this.pokemonGame(this.pokemon_p1.getType(), this.pokemon_p2.getType(), this.pokemon_p1.getStatusAttack(), this.pokemon_p2.getStatusDefense());
                this.pokemon_p2.setStatusHP(this.pokemon_p2.getStatusHP() - damage);
                console.log(`Pokemo:"` + this.pokemon_p1.getName() + `" caused` + damage + `to pokemon"` + this.pokemon_p2.getName() + `"`);
                console.log(`pokemo:"` + this.pokemon_p1.getName + `hp es:` + this.pokemon_p1.getStatusHP());
                console.log(`pokemo:"` + this.pokemon_p2.getName + `hp es:` + this.pokemon_p2.getStatusHP());
            }else {
                damage = this.pokemonGame(this.pokemon_p2.getType(), this.pokemon_p1.getType(), this.pokemon_p2.getStatusAttack(), this.pokemon_p1.getStatusDefense());
                this.pokemon_p1.setStatusHP(this.pokemon_p1.getStatusHP() - damage);
                console.log(`Pokemo:"` + this.pokemon_p2.getName() + `" caused` + damage + `to pokemon"` + this.pokemon_p1.getName() + `"`);
                console.log(`pokemo:"` + this.pokemon_p1.getName + `hp es:` + this.pokemon_p1.getStatusHP());
                console.log(`pokemo:"` + this.pokemon_p2.getName + `hp es:` + this.pokemon_p2.getStatusHP());
            }
            if(this.pokemon_p1.getStatusHP() <= 0){
                winner = this.pokemon_p2.getName();
            }else{
                winner = this.pokemon_p1.getName();
            }
            Round++;
        }
        console.log(`winner is: ${winner}`);
        return winner;
    }
}
````



### 3.2. Ejercicio 2 - Gestor bibliográfico

En el ejercicio consiste en crear dos clases para gestionar el bibligrafico:

Por un lado la clase `Articulo` donde guarda todos los datos necesarios para un articulo, autor, titulo, palabras claves, editorial, fecha de publicacion, etc.

````
constructor(titulo:string[], author:string[], email:string[], keywords:string[], abstract:string[], date:string[], editorial:string[], citas:number){
        this.titulo = titulo;
        this.author = author;
        this.email = email;
        this.keywords = keywords;
        this.abstract = abstract;
        this.date = date;
        this.editorial = editorial;
        this.citas = citas;
    }

    getTitulo(){ return this.titulo; }
    getauthor() { return this.author; }
    getEmail() { return this.email; }
    getKeyWords() { return this.keywords; }
    getAbstract() { return this.abstract; }
    getdate() { return this.date; }
    getEditorial() { return this.editorial; }
    getCitas() { return this.citas; }
````

Y en la otra clase se realiza una serie de operaciones para mostrar o filtrar los articulos.

### 3.2. Ejercicio3 - Medios de transporte

En este ejercicio consiste en crear varias clases para cada tipo de vehiculos: `Coches` `Bicicletas` `Patinetes` `Guaguas` `Trenes` `Peatones` . En todas estas clases deben tener su descripción como: Nombre del vehiculo, velocidad del vehiculo, numero de ruedas, y capacidad de transporta personas: lo describí como la siguiente forma:

````
import {Vehiculo} from "./vehiculo";

/**
 * **Clase Coches**
 * Se ha realizado la herencia de la clase Movable
 */
export class Coches extends Vehiculo{
    export interface Movable {
        nombre: string;
        velocidad: number;
        nRuedas: number;
        nPersonas: number;
    }
    /**
     * constructor de la clase Coches
     * @param nombre nombre del vehiculo
     * @param velocidad velocidad que circula
     * @param nRuedas   numero de ruedas del vehiculo
     * @param nPersonas capacidad de trasportar el vehiculo
     */
    constructor(public nombre:string, public velocidad:number, public nRuedas:number, public nPersonas:number){
        super(nombre, velocidad, nRuedas, nPersonas);
    }
}
````

Asi, con todos otros vehiculos que queremos crear. y en la clase `Street` es donde vamos a describir todas las funciones:

**Metodo para contar numeros de vehiculos**

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
**Metodos para anadir, eliminar y desmostrar**

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
## 4. Conclusiones

​		Como conclusión, esta práctica nos ayuda a mejorar a programación, puesto que las clases permiten organizar las cosas, en algún caso, los proyectos. Por ejemplo en el aspecto de la organización de código. Además, **TypeScript sí que tiene clases que facilitan la encapsulación de código**. Por lo tanto, manejar bien la parte de objeto y clases es muy importante en TypeScript.

## 5. Bibliografía

1. [Entender ideas de obtjeto, clases, atributos](https://gustavodohara.com/blogangular/clases-en-typescript/)

2. [Clases en TypeScript]([https://www.manejandodatos.es/2015/09/clases-en-typescript/#:~:text=Utilizar%20las%20clases%20de%20Typescript,al%20desarrollar%20programas%20en%20Javascript.&text=Esta%20visi%C3%B3n%20est%C3%A1%20m%C3%A1s%20cercana,un%20tanto%20especial%20de%20Javascript.](https://www.manejandodatos.es/2015/09/clases-en-typescript/#:~:text=Utilizar las clases de Typescript,al desarrollar programas en Javascript.&text=Esta visión está más cercana,un tanto especial de Javascript.))
3. Apuntes de la clase