import {Pokemon} from './Pokemon'

//class Combat

export class Combat{
    public pokemon_p1:Pokemon;
    public pokemon_p2:Pokemon;
    //public start():Pokemon;

    //Constructor
    constructor(pokemon_1:Pokemon, pokemon_2:Pokemon){
        this.pokemon_p1 = pokemon_1;
        this.pokemon_p2 = pokemon_2;
    }

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