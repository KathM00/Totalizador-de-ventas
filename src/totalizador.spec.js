import {calcularPrecioNeto, calcularImpuesto} from './totalizador.js';

describe('Calculadora de Totalizador', () => {
  it('debería calcular el precio neto multiplicando cantidad por precio', () => {
    expect(calcularPrecioNeto(20, 3)).toEqual(60);
  });

  it('debería calcular el impuesto del 6.25% para el estado TX', () => {
    expect(calcularImpuesto(60, 'TX')).toEqual(3.75);
  });

});