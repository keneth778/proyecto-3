// componentes/funciones/catalogo.js
import { productos } from '../../data.js';
import { producto } from './itemProducto.js';
import { resaltarProducto, eliminarProducto } from './funcionesProductos.js';

export function cargarProductos() {
    const contenedorProductos = document.getElementById('contenedor-productos');

    productos.forEach(prod => {
        const item = producto(prod); // Crear el elemento del producto
        contenedorProductos.appendChild(item);

        // Añadir eventos para resaltar y eliminar
        item.addEventListener('click', () => resaltarProducto(prod.id)); // Click para resaltar
        item.addEventListener('dblclick', () => eliminarProducto(prod.id)); // Doble click para eliminar
    });
}