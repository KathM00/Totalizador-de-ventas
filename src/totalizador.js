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

    if (estado === 'AL') {
    return monto * 0.04;
  }
  
  return 0;
}