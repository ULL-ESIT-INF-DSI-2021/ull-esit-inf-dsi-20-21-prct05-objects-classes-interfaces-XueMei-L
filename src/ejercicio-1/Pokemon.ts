//class Pokedex
/*
Nombre del Pokemon
Peso y altura
Tipo
Estadísticas básicas: ataque, 
defensa, velocidad, daño máximo (HP). 
*/

/**
 * Class Pokemon:
 * Create pokemon attributes: Name, height, weight, type, damage, armor, speed, health
 */
export class Pokemon {
    private name:string;
    private weight:number;
    private height:number;
    private type:string;
    private status = Array(4);
    
    //Constructor
    constructor(name:string ,weight:number, height:number, type:string, status:number[]){
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.type = type;
        this.status = status;
    }

    //To access class attributes
    getName(){ return this.name; }
    getWeight() { return this.weight; }
    getHeight() { return this.height; }
    getType() { return this.type; }
    getStatusAttack() { return this.status[0]; }
    getStatusDefense() { return this.status[1]; }
    getStatusSpeed() { return this.status[2]; }
    getStatusHP() { return this. status[3]; }
    setStatusHP(hp:number) { this.status[3] = hp;}

    /**
     * Method Show(), to see Pokemon data
     */
    public Show(){
        console.log(`Pokemon name:` + this.getName() +
                    `Type:` + this.getType() +
                    `Attack:` + this.getStatusAttack() +
                    `Defense:` + this.getStatusDefense() +
                    `Speed:` + this.getStatusSpeed() +
                    `HP:` + this.getStatusHP()
        );
    }
}