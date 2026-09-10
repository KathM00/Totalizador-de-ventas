export function calcularPrecioNeto(cantidad, precio) {
 if (typeof cantidad !== 'number' ||  typeof precio !== 'number' || isNaN(cantidad) || isNaN(precio) ) {
    throw new Error("La cantidad y el precio deben ser valores numéricos");
  }
 
  if (cantidad <= 0) {
    throw new Error("La cantidad debe ser un número positivo mayor a cero");
  }

 if (precio < 0) {
    throw new Error("El precio no puede ser negativo");
  }

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

export function calcularDescuentoCategoria(precioNeto, categoria) {
  const tasas = { 'Alimentos': 0.02, 'Material de escritorio': 0.015, 'Electrónicos': 0.01 };
  return precioNeto * (tasas[categoria] || 0);
}

export function calcularImpuestoCategoria(precioNeto, categoria) {
  const tasas = { 'Bebidas Alcohólicas': 0.07, 'Muebles': 0.03, 'Electrónicos': 0.04, 'Vestimenta': 0.02 };
  return precioNeto * (tasas[categoria] || 0);
}

export function calcularCostoEnvio(peso) {
 if (typeof peso !== 'number' || isNaN(peso) || peso < 0) {
    throw new Error("El peso debe ser un número positivo");
  }
  if (peso <= 10) return 0;
  if (peso <= 20) return 3.5;
  if (peso <= 40) return 5;
  if (peso <= 80) return 6;
  if (peso <= 100) return 6.5;
  if (peso <= 200) return 8;
  return 9;
}


export function calcularDescuentoCliente(tipoCliente) {
  if (tipoCliente === 'Normal') {
    return 0;
  }
  if (tipoCliente === 'Recurrente') {
    return 0.5;
  }
  if (tipoCliente === 'Antiguo Recurrente') {
    return 1;
  }
  if (tipoCliente === 'Especial') {
    return 1.5;
  }
}

export function calcularDescuentoEspecifico(tipoCliente, precioNeto, categoria) {
  if (tipoCliente === 'Recurrente' && precioNeto > 3000 && categoria === 'Alimentos') {
    return 100;
  }
  if (tipoCliente === 'Especial' && precioNeto > 7000 && categoria === 'Electrónicos') {
    return 200;
  }
  return 0;
}
