// componentes/funciones/funcionesProductos.js
export function resaltarProducto(id) {
    const producto = document.querySelector(`.producto[data-id="${id}"]`);
    if (producto) {
        producto.classList.toggle('resaltado');
        actualizarContador();
    }
}

export function agregarAlCarrito() {
    contadorCarrito++; // Aumentar el contador
    actualizarContador(); // Actualizar el contador en la interfaz
}

let contadorCarrito = 0; // Variable para almacenar el número de productos en el carrito

function actualizarContador() {
    const contador = document.getElementById('contador-productos');
    if (contador) {
        contador.textContent = `Productos en el carrito: ${contadorCarrito}`;
    }
}

// Asignar eventos al botón "Agregar"
document.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-agregar')) {
        agregarAlCarrito(); // Aumentar el contador al hacer clic en "Agregar"
    }
});