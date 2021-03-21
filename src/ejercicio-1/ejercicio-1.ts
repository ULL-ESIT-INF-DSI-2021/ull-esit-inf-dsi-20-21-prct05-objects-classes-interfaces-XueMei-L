import {Pokemon} from './Pokemon';
import {Combat} from './Combat';

let pokemon_p1 = new Pokemon("Charizard", 0.6, 8.5, "Fuego", [52, 43, 65, 282],);
let pokemon_p2 = new Pokemon("Squirtle", 0.5, 9, "Agua", [48, 65, 43, 292]);

let battle :Combat = new Combat(pokemon_p1, pokemon_p2);
battle.start();