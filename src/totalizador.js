export function calcularPrecioNeto(cantidad, precio) {
  return cantidad * precio;
}

export function calcularImpuesto(monto, estado) {
  if (estado === 'TX') {
    return monto * 0.0625;
  }
  if (estado === 'UT') {
    return monto * 0.0665;
  }

  return 0;
}