import { calcularPrecioNeto } from './totalizador.js';

describe('Calculadora de Totalizador', () => {
  it('debería calcular el precio neto multiplicando cantidad por precio', () => {
    expect(calcularPrecioNeto(20, 3)).toEqual(60);
  });
});