const adultos = document.getElementById("adultos");
const ninos = document.getElementById("ninos");
const ancianos = document.getElementById("ancianos");

const total = document.getElementById("total");
const buyButton = document.getElementById("buyButton");

function calcularTotal() {
    const precioAdulto = 25;
    const precioNino = 12;
    const precioAnciano = 18;

    const cantidadAdultos = Number(adultos.value) || 0;
    const cantidadNinos = Number(ninos.value) || 0;
    const cantidadAncianos = Number(ancianos.value) || 0;

    const totalPrecio =
        cantidadAdultos * precioAdulto +
        cantidadNinos * precioNino +
        cantidadAncianos * precioAnciano;

    total.textContent = "€" + totalPrecio.toFixed(2);

    buyButton.disabled = totalPrecio <= 0;
}

adultos.addEventListener("input", calcularTotal);
ninos.addEventListener("input", calcularTotal);
ancianos.addEventListener("input", calcularTotal);

buyButton.addEventListener("click", () => {
    alert("Compra realizada correctamente.\nTotal: " + total.textContent);
});