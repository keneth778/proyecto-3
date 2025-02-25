// componentes/funciones/catalogo.js
import { dataProductos } from '../../data.js';
import { producto } from './itemProducto.js';
import { resaltarProducto } from './funcionesProductos.js'; // Importar resaltarProducto

export function cargarProductos() {
    const contenedorProductos = document.getElementById('contenedor-productos');

    dataProductos.forEach(prod => {
        const item = producto(prod); // Crear el elemento del producto
        contenedorProductos.appendChild(item);

        // Añadir evento para resaltar (excepto si se hace clic en el botón de eliminar)
        item.addEventListener('click', (event) => {
            if (!event.target.classList.contains('btn-eliminar') && !event.target.classList.contains('btn-agregar')) {
                resaltarProducto(prod.id); // Click para resaltar
            }
        });
    });
}