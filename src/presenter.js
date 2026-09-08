import { calcularPrecioNeto, calcularImpuesto, calcularDescuento, calcularTotal } from "./totalizador.js";

const cantidadInput = document.querySelector("#cantidad");
const precioInput = document.querySelector("#precio");
const estadoSelect = document.querySelector("#estado");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const cantidad = Number.parseInt(cantidadInput.value);
  const precio = Number.parseFloat(precioInput.value);
  const estado = estadoSelect.value;

  try {
    const precioNeto = calcularPrecioNeto(cantidad, precio);
    const descuento = calcularDescuento(precioNeto);
    const impuesto = calcularImpuesto(precioNeto - descuento, estado);
    const total = calcularTotal(cantidad, precio, estado);

    // Derivar porcentajes para la vista
    const porcDescuento = precioNeto > 0 ? (descuento / precioNeto) * 100 : 0;
    const baseImpuesto = precioNeto - descuento;
    const porcImpuesto = baseImpuesto > 0 ? (impuesto / baseImpuesto) * 100 : 0;

    div.innerHTML = `
      <div class="result-row">Precio neto (${cantidad}*$${precio}): $${precioNeto}</div>
      <div class="result-row">Descuento (${porcDescuento}%): $${descuento}</div>
      <div class="result-row">Impuesto para ${estado}(%${porcImpuesto.toFixed(2)}): $${impuesto.toFixed(2)}</div>
      <div class="result-row">Precio total (descuento e impuesto): $${total}</div>
    `;
  } catch (error) {
    div.innerHTML = `<p style="color: red; font-weight: bold;">Error: ${error.message}</p>`;
  }
});