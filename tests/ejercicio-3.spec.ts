import 'mocha';
import {expect} from 'chai';
import {Coches} from '../src/ejercicio-3/coches';
import {Motos} from '../src/ejercicio-3/motos';
import {Patinetes} from '../src/ejercicio-3/patinetes';
import {Trenes} from '../src/ejercicio-3/trenes';
import {Guaguas} from '../src/ejercicio-3/guaguas';
import {Bicicletas} from '../src/ejercicio-3/bicicletas';
import {Peatones} from '../src/ejercicio-3/peatones';
import {Street} from '../src/ejercicio-3/Street';

describe(`Pracitca5_prueba`, () => {
    const coche1 = new Coches(`Coche01`, 80, 4, 5);
    const coche2 = new Coches(`Coche02`, 75, 4, 5);
    const coche3 = new Coches(`Coche01`, 60, 4, 5);

    const moto1 = new Motos(`Moto1`, 90, 2, 2);
    const moto2 = new Motos(`Moto2`, 85, 3, 2);

    const patinete1 = new Patinetes(`Patinete1`, 30, 2, 1);

    const tren1 = new Trenes(`Tren1`, 80, 40, 200);

    const guagua1 = new Guaguas(`Guagua1`, 60, 6, 15);
    const guagua2 = new Guaguas(`Guagua2`, 55, 6, 20);
    
    const bicicleta1 = new Bicicletas(`Bicicleta1`, 20, 2, 2);

    const peaton1 = new Peatones(`peaton1`, 0, 0, 15);


    describe('Proba para llamar la funcion', () => {
        it('Existe el coche:', () => {
            expect(coche1).not.to.be.equal(null);
        });
        describe('Acceder a un elemento público clase coche', () => {
            it('coche1.nombre = Coche1', () => {
                expect(coche1.nombre).to.be.equal('Coche01');
            });
            it('coche1.velocidad = 80', () => {
                expect(coche1.velocidad).to.be.equal(80);
            });
            it('coche1.nRuedas = 4', () => {
                expect(coche1.nRuedas).to.be.equal(4);
            });
            it('coche1.nPersonas = 5', () => {
                expect(coche1.nPersonas).to.be.equal(5);
            });
        });
    });

    const Street1 = new Street(`Calle Juan`,`La laguna`,[coche1, coche2, coche3, bicicleta1, peaton1]);
    describe('Probar llamadas clase Street', () => {
        it('Calle:', () => {
          expect(Street1.getStreet()).to.be.equal('Calle Juan');
        });
        it('Localizacion:', () => {
          expect(Street1.getLocation()).to.be.equal('La laguna');
        });
        it('Contar los vehiculos de la calle', () => {
          Street1.Count();
        });
        it('Añadir un vehiculo:.', () => {
          Street1.anadirVehiculo(bicicleta1);
        });
        it('Eliminar un vehiculo:', () => {
          Street1.deleteVehiculo(coche3);
        });
        it('Vehiculo despues de ordenanar', () => {
            Street1.showVehiculosVelocidad();
          });
    });
});
