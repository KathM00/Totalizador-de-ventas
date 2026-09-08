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

    if (estado === 'CA') {
    return monto * 0.0825;
  }

  return 0;
}


export function calcularDescuento(precioNeto) {
  if (precioNeto < 1000) {
    return 0;
  } 
}