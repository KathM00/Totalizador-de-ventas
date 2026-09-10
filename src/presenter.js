import { 
  calcularPrecioNeto, 
  calcularImpuesto, 
  calcularDescuento, 
  calcularTotal,
  calcularDescuentoCategoria,
  calcularImpuestoCategoria,
  calcularCostoEnvio,
  calcularDescuentoCliente,
  calcularDescuentoEspecifico
} from "./totalizador.js";

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const estadoSelect = document.querySelector("#estado");
const categoriaSelect = document.querySelector("#categoria");
const pesoInput = document.querySelector("#peso");
const tipoClienteSelect = document.querySelector("#tipoCliente");

const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoSelect.value;
  const categoria = categoriaSelect.value;
  const peso = Number.parseFloat(pesoInput.value);
  const tipoCliente = tipoClienteSelect.value;

  try {
    const precioNeto = calcularPrecioNeto(cantidad, precio);
    const descVolumen = calcularDescuento(precioNeto);
    const descCategoria = calcularDescuentoCategoria(precioNeto, categoria);
    const descFijo = calcularDescuentoEspecifico(tipoCliente, precioNeto, categoria);
    const totalDescuentos = descVolumen + descCategoria + descFijo;

    const baseImponible = precioNeto - totalDescuentos;
    const impEstado = calcularImpuesto(baseImponible, estado);
    const impCategoria = calcularImpuestoCategoria(baseImponible, categoria);
    const totalImpuestos = impEstado + impCategoria;

    const envioUnitario = calcularCostoEnvio(peso);
    const envioTotalBase = envioUnitario * cantidad;
    const porcDescEnvio = calcularDescuentoCliente(tipoCliente);
    const descEnvioDinero = envioTotalBase * (porcDescEnvio / 100);
    const costoEnvioFinal = envioTotalBase - descEnvioDinero;

    const totalFinal = calcularTotal(cantidad, precio, estado, categoria, peso, tipoCliente);
    
    div.innerHTML = `
      <div class="result-row"><strong>Precio neto (${cantidad} * $${precio}):</strong> $${precioNeto.toFixed(2)}</div>
      
      <hr>
      <div class="result-row"><strong>Descuentos Aplicados</strong></div>
      <div class="result-row">Por volumen: $${descVolumen.toFixed(2)}</div>
      <div class="result-row">Por categoría (${categoria}): $${descCategoria.toFixed(2)}</div>
      <div class="result-row">Especial (${tipoCliente}): $${descFijo.toFixed(2)}</div>
      
      <hr>
      <div class="result-row"><strong>Impuestos Aplicados (Sobre $${baseImponible.toFixed(2)})</strong></div>
      <div class="result-row">Estado (${estado}): $${impEstado.toFixed(2)}</div>
      <div class="result-row">Categoría (${categoria}): $${impCategoria.toFixed(2)}</div>
      
      <hr>
      <div class="result-row"><strong>Costo de Envío</strong></div>
      <div class="result-row">Base (${cantidad} items * $${envioUnitario}): $${envioTotalBase.toFixed(2)}</div>
      <div class="result-row">Descuento envío (${porcDescEnvio}%): -$${descEnvioDinero.toFixed(2)}</div>
      <div class="result-row"><strong>Costo Envío Final: $${costoEnvioFinal.toFixed(2)}</strong></div>
      
      <hr>
      <div class="result-row" style="font-size: 1.2em; margin-top: 10px;">
        <strong>PRECIO TOTAL: $${totalFinal.toFixed(2)}</strong>
      </div>
    `;
  } catch (error) {
    div.innerHTML = `<p style="font-weight: bold;">Error: ${error.message}</p>`; 
  }
});