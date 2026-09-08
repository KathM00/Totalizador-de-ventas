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
    if (estado === 'NV') {
    return monto * 0.08;
  }
  
  return 0;
}