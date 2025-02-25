// componentes/funciones/itemProducto.js
export function producto(prod) {
    const item = document.createElement('div');
    item.classList.add('producto');
    item.setAttribute('data-id', prod.id); // Añadir un identificador único

    item.innerHTML = `
        <div class="imagen-producto">
            <img src="${prod.imagen || 'X'}" alt="${prod.nombre}">
        </div>
        <h3>${prod.nombre}</h3>
        <div class="precio-y-boton">
            <p>$${prod.precio.toFixed(2)}</p>
            <button class="btn-agregar">Agregar</button>
        </div>
    `;

    return item;
}