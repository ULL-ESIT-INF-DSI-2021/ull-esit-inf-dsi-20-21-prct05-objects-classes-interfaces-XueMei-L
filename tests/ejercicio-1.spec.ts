import 'mocha';
import {expect} from 'chai';
import {Pokemon} from '../src/ejercicio-1/Pokemon';
import {Combat} from '../src/ejercicio-1/Combat';

describe(`Juego de Pokemon, prueba:`, () => {
    const Squirtle: Pokemon = new Pokemon("Squirtle", 9, 0.5, "agua", [48, 65, 43, 314]);
    const Pikachu: Pokemon = new Pokemon("Pikachu", 0.4, 6.0, "electrico", [55, 40, 90, 274]);
    const conbate: Combat = new Combat(Squirtle, Pikachu);
    describe(`Probar de pokemon - Squirtle`, () => {
        it('Nombre: Squirtle', () => {
          expect(Squirtle.getName()).to.be.equal("Squirtle");
        });
        it('Peso: 9', () => {
          expect(Squirtle.getWeight()).to.be.equal(9);
        });
        it('Altura: 0.5', () => {
          expect(Squirtle.getHeight()).to.be.equal(0.5);
        });
        it('Tipo: agua', () => {
          expect(Squirtle.getType()).to.be.equal("agua");
        });
        it('Ataque:48', () => {
          expect(Squirtle.getStatusAttack()).to.be.equal(48);
        });
        it('Defensa:65', () => {
          expect(Squirtle.getStatusDefense()).to.be.equal(65);
        });
        it('Velocidad:43', () => {
          expect(Squirtle.getStatusSpeed()).to.be.equal(43);
        });
        it('Vida Max : 315', () => {
          expect(Squirtle.getStatusHP()).to.be.equal(314);
        });
      });

    
});