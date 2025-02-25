// componentes/header/header.js
export function mostrarMenu() {
    const contador = document.getElementById('contador-productos');
    const productosResaltados = document.querySelectorAll('.resaltado').length;
    contador.textContent = `Productos resaltados: ${productosResaltados}`;
}