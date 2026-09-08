import {calcularPrecioNeto, calcularImpuesto, calcularDescuento} from './totalizador.js';

describe('Calculadora de Totalizador', () => {
  it('debería calcular el precio neto multiplicando cantidad por precio', () => {
    expect(calcularPrecioNeto(20, 3)).toEqual(60);
  });

  it('debería calcular el impuesto del 6.25% para el estado TX', () => {
    expect(calcularImpuesto(60, 'TX')).toEqual(3.75);
  });

  it('debería calcular el impuesto del 6.65% para el estado UT', () => {
    expect(calcularImpuesto(60, 'UT')).toEqual(3.99);
  });

  it('debería calcular el impuesto del 8.00% para el estado NV', () => {
    expect(calcularImpuesto(60, 'NV')).toEqual(4.8);
  });

  it('debería calcular el impuesto del 4.00% para el estado AL', () => {
    expect(calcularImpuesto(60, 'AL')).toEqual(2.4);
  });

  it('debería calcular el impuesto del 8.25% para el estado CA', () => {
    expect(calcularImpuesto(60, 'CA')).toEqual(4.95);
  });

  it('debería calcular 0 de descuento si el precio neto es menor a 1000', () => {
    expect(calcularDescuento(60)).toEqual(0);
  });

  it('debería calcular 3% de descuento si el precio neto es mayor o igual a 1000 y menor a 3000', () => {
    expect(calcularDescuento(1000)).toEqual(30);
  });

  it('debería calcular 5% de descuento si el precio neto es mayor o igual a 3000 y menor a 7000', () => {
    expect(calcularDescuento(3000)).toEqual(150);
  });

});