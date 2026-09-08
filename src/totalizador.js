export function calcularPrecioNeto(cantidad, precio) {
  return cantidad * precio;
}

export function calcularImpuesto(monto, estado) {
  const tasas = {
    'TX': 0.0625,
    'UT': 0.0665,
    'NV': 0.08,
    'AL': 0.04,
    'CA': 0.0825
  };
  
  const tasa = tasas[estado] || 0;
  return monto * tasa;
}


export function calcularDescuento(precioNeto) {
  if (precioNeto < 1000) {
    return 0;
  } 

  if (precioNeto >= 1000 && precioNeto < 3000) {
    return precioNeto * 0.03;
  }

  if (precioNeto >= 3000 && precioNeto < 7000) {
    return precioNeto * 0.05;
  }

  if (precioNeto >= 7000 && precioNeto < 10000) {
    return precioNeto * 0.07;
  }

  if (precioNeto >= 10000 && precioNeto < 30000) {
    return precioNeto * 0.1;
  }

  if (precioNeto >= 30000) {
    return precioNeto * 0.15;
  }

}

export function calcularTotal(cantidad, precio, estado) {
  const precioNeto = calcularPrecioNeto(cantidad, precio);
  const descuento = calcularDescuento(precioNeto);
  const impuesto = calcularImpuesto(precioNeto - descuento, estado);
  return precioNeto - descuento + impuesto;
}