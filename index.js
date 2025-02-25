// index.js
import { cargarProductos } from './componentes/funciones/catalogo.js';
import { mostrarMenu } from './componentes/header/header.js';

function iniciarApp() {
    let app = document.querySelector("#root");

    // Crear el contenedor principal
    let contenedor = document.createElement('div');
    contenedor.className = "contenedor";

    // Crear el header
    let header = document.createElement('header');
    header.innerHTML = `
        <h1>Mi Tienda</h1>
        <div id="contador-productos"></div>
    `;
    contenedor.appendChild(header);

    // Crear el contenedor de productos
    let divProductos = document.createElement('div');
    divProductos.id = "contenedor-productos";
    divProductos.className = "div_productos";
    contenedor.appendChild(divProductos);

    // Crear el footer (opcional)
    let footer = document.createElement('div');
    footer.className = "div_footer";
    footer.textContent = "© 2023 Mi Tienda";
    contenedor.appendChild(footer);

    // Añadir el contenedor al DOM
    app.appendChild(contenedor);

    // Cargar los productos y mostrar el menú
    cargarProductos();
    mostrarMenu();
}

// Iniciar la aplicación cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', iniciarApp);