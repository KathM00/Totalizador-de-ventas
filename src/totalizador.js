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
  if (categoria === 'Varios') {
     return 0;
  }  
  if (categoria === 'Alimentos') {
    return precioNeto * 0.02;
  }
  if (categoria === 'Bebidas Alcohólicas') {
    return 0;
  }
  if (categoria === 'Material de escritorio') {
    return precioNeto * 0.015;
  }
  if (categoria === 'Muebles') {
    return 0;
  }
  if (categoria === 'Electrónicos') {
    return precioNeto * 0.01;
  }
  if (categoria === 'Vestimenta') {
    return 0;
  }
}

export function calcularImpuestoCategoria(precioNeto, categoria) {
  if (categoria === 'Varios') {
    return 0;
  } 
  if (categoria === 'Alimentos') {
    return 0;
  }
  if (categoria === 'Bebidas Alcohólicas') {
    return precioNeto * 0.07;
  }
  if (categoria === 'Material de escritorio') {
    return 0;
  }
  if (categoria === 'Muebles') {
    return precioNeto * 0.03;
  }
  if (categoria === 'Electrónicos') {
    return precioNeto * 0.04;
  }
  if (categoria === 'Vestimenta') {
    return precioNeto * 0.02;
  }
}

export function calcularCostoEnvio(peso) {
  if (peso >= 0 && peso <= 10) {
    return 0;
 }
  if (peso >= 11 && peso <= 20) {
    return 3.5;
  }
  if (peso >= 21 && peso <= 40) {
    return 5;
  }
}