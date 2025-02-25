// componentes/funciones/funcionesProductos.js
export function resaltarProducto(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    if (producto) {
        producto.classList.toggle('resaltado'); // Alternar la clase 'resaltado'
        actualizarContador(); // Llamar a la función para actualizar el contador
    }
}

export function eliminarProducto(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    if (producto) {
        producto.remove(); // Eliminar el producto del DOM
        actualizarContador(); // Llamar a la función para actualizar el contador
    }
}

// Función para actualizar el contador
function actualizarContador() {
    const productosResaltados = document.querySelectorAll('.resaltado').length;
    const contador = document.getElementById('contador-productos');
    if (contador) {
        contador.textContent = `Productos resaltados: ${productosResaltados}`;
    }
}

// Asignar evento de eliminar a los botones
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-eliminar')) {
        const producto = event.target.closest('.producto');
        const id = producto.getAttribute('data-id');
        eliminarProducto(id);
    }
});